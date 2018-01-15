public abstract class Figure{
	protected float perimeter; 
	protected float area;
	
	public abstract void draw(); 
	
	public float getPerimeter(){
		return perimeter; 
	}
	
	public void setPerimeter(float p){
		this.perimeter = p; 
	}
	
	public float getArea(){
		return area; 
	}
	
	public void setArea(float a){
		this.area = a; 
	}
}