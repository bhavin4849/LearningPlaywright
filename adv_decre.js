let a = 5;
console.log(a++ + ++a - --a + a-- + ++a);
console.log(a); // 6

/*
A = a++ =5
a = 6
+
B = ++a = 7
a = 7
-
C = --a = 6
a = 6
+
D = a-- = 6
a = 5
+
E = ++a = 6
a = 6
*/