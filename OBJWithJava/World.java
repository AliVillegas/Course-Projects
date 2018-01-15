import java.util.Random;
import java.util.ArrayList;
import java.io.PrintWriter;

public class World {
	public static void main(String[] args) {
		int numOfTriangles = 100; 
		int numOfVertices = 200; // 3 for 1 triangle // double of numOfTriangles for 2 or more triangles
		int max = 10; 
		int min = 0;	
		ArrayList<Vertex> vertices = new ArrayList<>();
		ArrayList<Triangle> triangles = new ArrayList<>();
		Random r = new Random(); 
		for(int x = 0; x < 2; x++){
			float r1 = min + r.nextFloat() * (max - min);
			float r2 = min + r.nextFloat() * (max - min);
			float r3 = min + r.nextFloat() * (max - min);
			vertices.add(new Vertex(r1,r2,r3));
		}
		Model model = new Model(); 
		for(int x = 0; x < numOfVertices-2; x++){ // 0 to 198 since we created the first 2 before
				vertices.add(
						     new Vertex(min + r.nextFloat() * (max - min),
									    min + r.nextFloat() * (max - min),
								        min + r.nextFloat() * (max - min)
									  )
							);
							
				triangles.add(
							  new Triangle(vertices.get(vertices.size()-1),
										   vertices.get(vertices.size()-2),
										   vertices.get(vertices.size()-3)
										 )
							 );
				model.getTFaces().add(triangles.get(triangles.size() - 1)); 
				}
		try(PrintWriter outT = new PrintWriter("Model.obj")){
			for(Triangle t : model.getTFaces()){
				outT.println(t.toString());
			}
			int f = 1;
			for(int x = 0; x < numOfTriangles; x++ ){
				outT.println("f " + (f) + " " + (f+1) + " " + (f+2) );
				f = f + 2;
			}
		}catch(Exception e){
			e.printStackTrace();
		}
	}
}