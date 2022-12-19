package com.FMSS.kolayik;

import com.FMSS.kolayik.repository.AddressRepository;
import com.FMSS.kolayik.repository.ExpenseRepository;
import com.FMSS.kolayik.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class KolayIkApplication implements CommandLineRunner {
	private final AddressRepository addressRepository;
	private final UserRepository userRepository;
	private final ExpenseRepository expenseRepository;

	public KolayIkApplication(AddressRepository addressRepository, UserRepository userRepository, ExpenseRepository expenseRepository) {
		this.addressRepository = addressRepository;
		this.userRepository = userRepository;
		this.expenseRepository = expenseRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(KolayIkApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
//		Address address1 = Address.builder()
//				.city("ISTANBUL")
//				.country("TR")
//				.postCode("34400")
//				.telephone("543242342")
//				.build();
//
//		Address address2 = Address.builder()
//				.city("KOCAELI")
//				.country("TR")
//				.postCode("41300")
//				.telephone("544231231")
//				.build();
//
//		User user1 = User.builder()
//				.name("ersin")
//				.lastName("alpaslan")
//				.salary("50000")
//				.address(address2)
//				.build();
//
//		User user2 = User.builder()
//				.name("serhat")
//				.lastName("oluc")
//				.salary("70000")
//				.address(address1)
//				.build();
//
//		Expenses expense1 = Expenses.builder()
//				.expenseType("gıda")
//				.amount(100)
//				.spendingStatement("harcadim gitti")
//				.user(user1)
//				.build();
//
//		Expenses expense2 = Expenses.builder()
//				.expenseType("diger")
//				.amount(500)
//				.spendingStatement("yok")
//				.user(user1)
//				.build();
//		List<Expenses> expensesList = new ArrayList<>();
//		expensesList.add(expense1);
//		expensesList.add(expense2);
//		expenseRepository.saveAll(expensesList);
//		user1.setExpenses(expensesList);
//		userRepository.save(user2);
//		userRepository.save(user1);
//
//		addressRepository.save(address1);
//		addressRepository.save(address2);
	}
}