import java.util.ArrayList;
public class Model{
	private ArrayList<Triangle> TFaces;
	
	public Model(){
		TFaces = new ArrayList<Triangle>();
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
	
	public String toString(){
		return "Triangular faces: " + 
				TFaces.size();
	}
}