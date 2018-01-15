import java.util.ArrayList;
public class Model{
	private ArrayList<Triangle> TFaces;
	private ArrayList<Quad> QFaces;
	
	public Model(){
		TFaces = new ArrayList<Triangle>();
		QFaces = new ArrayList<Quad>();
	}
	
	public void print(){
		System.out.println(toString());
	}
	
	public void add(Triangle t){
		TFaces.add(t);
	}
	
	public ArrayList<Triangle> getTFaces(){
		return TFaces;
	}
	
	public ArrayList<Quad> getQFaces(){
		return QFaces;
	}
	
	public void add(Quad q){
		QFaces.add(q);
	}
	
	public String toString(){
		return "Triangular faces: " + 
				TFaces.size() + 
				"\nSquare faces " + 
				QFaces.size();
	}
}