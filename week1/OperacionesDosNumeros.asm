.data
	number1: .asciiz "\nIngrese el primer numero: "
	number2: .asciiz "\nIngrese el segundo numero: "
	result_message: .asciiz "\nEl resultado de la suma es: "
	result_message2: .asciiz "\nEl resultado de la resta es: "
	result_message3: .asciiz "\nEl resultado de la multiplicación es: "
	result_message4: .asciiz "\nEl resultado de la división es: "
.text
	main:
		li $v0, 4
		la $a0, number1		
		syscall			##Se solicita el primer numero

		li $v0, 5
		syscall

		move $t0, $v0		## El primer numero se guarda en $to

		li $v0, 4
		la $a0, number2
		syscall			##Se solicita el segundo numero

		li $v0, 5
		syscall
		   
		move $t1, $v0		## El segundo numero se guarda en $t1
		
	##-----------------------------------------------------------------------------------------------------------
	##---------------Se realizan las operaciones(suma, resta, multiplicación y división)-------------------------	
	
	

		add $t2, $t0, $t1      ## En t2 se guarda la suma de t0 con t1
		
		sub $t3, $t0, $t1      ## En t3 se guarda la resta de t0 con t1
		
		mul $t4, $t0, $t1      ## En t4 se guarda la multiplicación de t0 con t1
		
		div $t5, $t0, $t1      ## En t5 se guarda la división de t0 con t1

	##-----------------------------------------------------------------------------------------------------------
	##----------------------------------Se imprimen los resultados---------------------------------------------- 		
	##-----------------------------------------------------------------------------------------------------------
	
	
		li $v0, 4
		la $a0 result_message
		syscall				## Muestra el primer mensaje que se almacena en result_message
		
		li $v0, 1
		move $a0, $t2			## Imprime el valor de la suma, almacenado en t2
		syscall	
	##-----------------------------------------------------------------------------------------------------------		
		li $v0, 4
		la $a0 result_message2		## Muestra el primer mensaje que se almacena en result_message
		syscall
		
		li $v0, 1
		move $a0, $t3			## Imprime el valor de la resta, almacenado en t3
		syscall		
	##-----------------------------------------------------------------------------------------------------------	
		li $v0, 4
		la $a0 result_message3		## Muestra el primer mensaje que se almacena en result_message
		syscall
		
		li $v0, 1
		move $a0, $t4			## Imprime el valor de la multiplicación, almacenado en t4
		syscall		
	##-----------------------------------------------------------------------------------------------------------	
		li $v0, 4
		la $a0 result_message4		## Muestra el primer mensaje que se almacena en result_message
		syscall
		
		li $v0, 1
		move $a0, $t5			## Imprime el valor de la división, almacenado en t5
		syscall			