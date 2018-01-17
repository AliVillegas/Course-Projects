import java.util.Random;
import java.util.ArrayList;
import java.io.PrintWriter;
import java.io.File;

public class World {
	public static void main(String[] args) {
		int numOfTriangles = 100; 
		int numOfVertices = 102; // 3 for 1 triangle // numOfTriangles + 2 for 2 or more triangles
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
		
		/*************************************/
		//Model nModel = create();
		//update(model);
		//retrieve(model);
		//delete(model);
	}
	
	public static void delete(Model m){
		m = null;
		try {
			File model = new File("Model.obj");
			model.delete();
		}catch(Exception e){
			e.printStackTrace();
		}
		
		System.out.println("The model has been deleted");
	}
	
	public static void retrieve(Model m){
		System.out.println(m);
		float tArea = 0;
		float tPerimeter = 0; 
		for(Triangle t : m.getTFaces()){
			tPerimeter += t.calcPerimeter();
		}
		for(Triangle t : m.getTFaces()){
			tArea += t.calcArea();
		}
		System.out.println("Total area: " + tArea);
		System.out.println("Total perimeter: " + tPerimeter);
		
	}
	
	public static Model create(int numTriangles, int numVertices){
		int numOfTriangles = numTriangles; 
		int numOfVertices = numVertices; // 3 for 1 triangle // numOfTriangles + 2 for 2 or more triangles
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
		Model m = new Model(); 
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
				m.getTFaces().add(triangles.get(triangles.size() - 1)); 
			}
		return m; 
	}
		
		
}