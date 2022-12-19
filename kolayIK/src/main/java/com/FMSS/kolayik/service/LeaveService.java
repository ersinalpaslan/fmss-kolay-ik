package com.FMSS.kolayik.service;

import com.FMSS.kolayik.Mapper.LeaveMapper;
import com.FMSS.kolayik.dto.request.CreateLeaveRequestDto;
import com.FMSS.kolayik.dto.request.UpdateLeaveRequestDto;
import com.FMSS.kolayik.dto.response.LeaveResponseDto;
import com.FMSS.kolayik.exception.AddressNotFoundException;
import com.FMSS.kolayik.exception.LeaveNotFoundException;
import com.FMSS.kolayik.exception.UserNotFoundException;
import com.FMSS.kolayik.model.Leave;
import com.FMSS.kolayik.repository.LeaveRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LeaveService {
    private final LeaveRepository leaveRepository;
    private final UserService userService;
    private final LeaveMapper leaveMapper;

    public List<LeaveResponseDto> getAllLeaves() {
        return leaveRepository.findAll().stream().map(leaveMapper::toLeaveResponseDto).toList();
    }
    public LeaveResponseDto getLeaveById(Integer id) {
        Optional<Leave> leaveOptional = leaveRepository.findById(id);

        return leaveOptional.map(leaveMapper::toLeaveResponseDto)
                .orElseThrow(()-> new LeaveNotFoundException("Leave not found!"));
    }
    public List<LeaveResponseDto> getLeavesByUserId(Integer id) {
        List<Leave> leaveList = leaveRepository.findLeavesByUserId(id);
        return leaveList.stream().map(leaveMapper::toLeaveResponseDto).toList();
    }

    public LeaveResponseDto createLeave(Integer id, CreateLeaveRequestDto createLeaveRequestDto) {
        Leave leave = leaveMapper.toLeaveFromCreateLeaveRequest(createLeaveRequestDto);
        leave.setUser(userService.findById(id).orElseThrow(()->new UserNotFoundException("User not exist")));
        leaveRepository.save(leave);

        return leaveMapper.toLeaveResponseDto(leave);
    }

    public void deleteLeave(Integer id) {
        if(leaveRepository.existsById(id)){
            leaveRepository.deleteById(id);
        }else
            throw new AddressNotFoundException("Leave not exist!");
    }

    public LeaveResponseDto updateLeave(Integer id, UpdateLeaveRequestDto updateLeaveRequest) {
        leaveRepository
                .save(leaveMapper.updateLeave(leaveRepository.findById(id)
                        .orElseThrow(()-> new LeaveNotFoundException("Leave not exist")),updateLeaveRequest));
        return leaveMapper.toLeaveResponseFromUpdateLeaveRequestDto(updateLeaveRequest);
    }
}

