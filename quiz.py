def max(nuts):
	biglist = []

	temp1 = 0
	for j in range(9,0,-1):
		newlist = []
		for x in nuts:
			if str(x)[0] is str(j):
				newlist.append(x)


		newlist = sorted(newlist, reverse = True)

		print "newlist2:"
		print  newlist
		temp = 0

		print "j"
		print j
		try:
			if newlist[-1] is j:
				temp = newlist.pop()
		except:
			pass
	

		for n in newlist:
			if n >= int(str(j)+str(j)):
				biglist.append(n)
		if temp:
			biglist.append(temp)
		for n in newlist:
			if n < int(str(j)+str(j)):
				biglist.append(n)

		print "#####"
		print biglist
	biglist_str = ''.join([str(j) for j in biglist])

	print "*****"	
	print biglist_str
		

			
		



print max([43, 41, 5, 12, 55, 56, 54, 99, 97])








# newlist.append(str(x)[0])