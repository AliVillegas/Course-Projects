import java.util.ArrayList;
public class Quad extends Figure implements FigureOperators{
	private ArrayList<Triangle> triangles; 

	public Quad(Triangle t1, Triangle t2){
		triangles = new ArrayList<Triangle>();
		triangles.add(t1);
		triangles.add(t2);
	}
	
	public float calcArea(){
		Triangle t1 = triangles.get(0); 
		Triangle t2 = triangles.get(1); 
		return t1.calcArea() + t2.calcArea();
	}
	
	public float calcPerimeter(){
		Triangle t1 = triangles.get(0); 
		Triangle t2 = triangles.get(1); 
		float distanceToReduce = 2; 
		for(int x = 0; x < 3; x++){
			for(int y = 0; y < 3; y++){
				if(t1.getPoints().get(x).distanceTo(t1.getPoints().get(y)) == (t2.getPoints().get(x).distanceTo(t2.getPoints().get(y)))){
					distanceToReduce= distanceToReduce*t1.getPoints().get(x).distanceTo(t1.getPoints().get(y));
				}
			}
		}
		return t1.calcPerimeter() + t2.calcPerimeter() - distanceToReduce;
	}
	public void draw(){
		System.out.println(toString()); 
	}
	public String toString(){
		String txt = ""; 
		for(int x = 0; x < triangles.size(); x++){
			txt += triangles.get(x).toString();
		}
		return txt;
	}
}