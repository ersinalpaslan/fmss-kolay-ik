package com.FMSS.kolayik.controller;

import com.FMSS.kolayik.dto.request.CreateLeaveRequestDto;
import com.FMSS.kolayik.dto.request.UpdateLeaveRequestDto;
import com.FMSS.kolayik.dto.response.LeaveResponseDto;
import com.FMSS.kolayik.service.LeaveService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/v1/leaves")
public class LeaveController {
    private final LeaveService leaveService;

    public LeaveController(LeaveService leaveService) {
        this.leaveService = leaveService;
    }

    @GetMapping()
    public ResponseEntity<List<LeaveResponseDto>> getAllLeaves(){
        return ResponseEntity.ok(leaveService.getAllLeaves());
    }
    @GetMapping("/{id}")
    public ResponseEntity<LeaveResponseDto> getLeaveById(@PathVariable Integer id){
        return ResponseEntity.ok(leaveService.getLeaveById(id));
    }
    @GetMapping("/user/{id}")
    public ResponseEntity<List<LeaveResponseDto>> getLeaveByUserId(@PathVariable Integer id){
        return ResponseEntity.ok(leaveService.getLeavesByUserId(id));
    }

    @PostMapping("/{id}")
    public ResponseEntity<LeaveResponseDto> createLeaves(@Valid @PathVariable Integer id,
                                                            @RequestBody CreateLeaveRequestDto createLeaveRequestDto){
        return ResponseEntity.ok(leaveService.createLeave(id,createLeaveRequestDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<LeaveResponseDto> deleteLeave(@PathVariable Integer id){
        leaveService.deleteLeave(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<LeaveResponseDto> updateLeave(@PathVariable Integer id, @RequestBody UpdateLeaveRequestDto updateLeaveRequest ){
        return ResponseEntity.ok(leaveService.updateLeave(id,updateLeaveRequest));
    }
}
