.data
	msg: .asciiz "\n Hi, my name is: "
	name: .asciiz "\nJose Lira"
.text
	main:
		li $v0, 4
		la $a0, msg		
		syscall		
		
		li $v0, 4
		la $a0, name		
		syscall	