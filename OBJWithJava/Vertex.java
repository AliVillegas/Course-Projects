public class Vertex {
	private float x;
	private float y;
	private float z;
	private static int createdVertices; 
	
	static{
		createdVertices = 0; 
	}
	public Vertex(float x, float y, float z){
		this.x = x; 
		this.y = y; 
		this.z = z; 
		createdVertices++;
	}
	
	public float distanceTo(Vertex v){
		double dx = (x-v.getX()) * (x-v.getX());
		double dy = (y-v.getY()) * (y-v.getY());
		double d = Math.sqrt(dx+dy);
		return (float)d;

	}
	
	public float getX(){
		return x; 
	}
	
	public void setX(float x){
		this.x = x; 
	}
	
	public float getY(){
		return y; 
	}
	
	public void setY(float y){
		this.y = y; 
	}
	
	public float getZ(){
		return z; 
	}
	
	public void setZ(float z){
		this.z = z; 
	}
	
	public int CreatedVertices(){
		return createdVertices; 
	}
	
	public void print(){
		System.out.println("v " + x + " " + y + " " + z +"\n");
	}
	
	public String toString(){
		return "v " + x + " " + y + " " + z +"\n";
	}
	
}