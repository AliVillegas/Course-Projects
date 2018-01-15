import java.util.ArrayList;
public class Triangle extends Figure implements FigureOperators{
	
	private ArrayList<Vertex> points; 

	public Triangle(Vertex v1, Vertex v2, Vertex v3){
		points = new ArrayList<Vertex>();
		points.add(v1);
		points.add(v2);
		points.add(v3);
	}
	
	
	public float calcArea(){
		Vertex p1 = points.get(0); 
		Vertex p2 = points.get(1);
		Vertex p3 = points.get(2);  
		float s = calcPerimeter()/2; 
		float a = p1.distanceTo(p2);
		float b = p1.distanceTo(p3);
		float c = p2.distanceTo(p3); 
		double heron = (double)(s*(s-a)*(s-b)*(s-c));
		return (float)(Math.sqrt(heron));
	}
	
	public float calcPerimeter(){
		Vertex p1 = points.get(0); 
		Vertex p2 = points.get(1);
		Vertex p3 = points.get(2);
		return p1.distanceTo(p2) + p1.distanceTo(p3) + p2.distanceTo(p3);
	}
	
	public void draw(){
		System.out.println(toString()); 
	}
	public String toString(){
		String txt = ""; 
		for(int x = 0; x < points.size(); x++){
			txt += points.get(x).toString();
		}
		return txt;
	}
	public ArrayList<Vertex> getPoints(){
		return points; 
	}
	
}