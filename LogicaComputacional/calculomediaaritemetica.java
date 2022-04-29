import java.util.Scanner;
public class Main
{
  public static void main (String[]args)
  {
    Scanner pegasus = new Scanner (System.in);
      System.out.println ("Digite a primeira nota");
    double nota1 = pegasus.nextDouble ();
      System.out.println ("Digite a segunda nota");
    double nota2 = pegasus.nextDouble ();
      System.out.println ("Digite a terceira nota");
    double nota3 = pegasus.nextDouble ();
      System.out.println ("Digite a quarta nota");
    double nota4 = pegasus.nextDouble ();

    double media = calculoMedia (nota1, nota2, nota3, nota4);
    if (aprovado (media) == true)
      {
	System.out.println ("O aluno foi aprovado com mC)dia " + media);
      }
    else
      {
	System.out.println ("O aluno foi reprovado com mC)dia " + media);
      }
  }
  public static double calculoMedia (double a, double b, double c, double d)
  {
    return (a + b + c + d) / 4;
  }
  public static boolean aprovado (double media)
  {
    if (media >= 7)
      {
	return true;
      }
    else
      {
	return false;
      }
  }
}
