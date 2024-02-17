import daw.com.Pantalla;
import daw.com.Teclado;

public class AppVideoClub {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		//ProductoVC productoVC;
		
		//ProductoVC miProducto = new ProductoVC("El Señor de los Anillos", ProductoVC.PELICULA, 3.99f, 7, false);
	    //private static Map<String, ProductoVC> productos = new HashMap<>();
	    public ProductoVC productos;
	    
	    productos= new ProductoVc ("pepe");
		productos.getTitulo();

		int opcion;
		mostrarMenu();
		opcion= Teclado.leerInt("Que opción");

		switch (opcion){
		case 1:
			ListaProductosSA();
			break;
		case 2:
			AñadirPorducto();

			break;
		case 3:
			MostrarFichaProducto();

			break;
		case 4:
			ListarClientes();

			break;
		case 5:
			AñadirCliente();

			break;
		case 6:
			MostarFichaCliente();

			break;
		case 7:
			AlquilarProducto();

			break;
		case 8:
			DevolverProducto();

			break;
		case 9:
			Salir();

			break;
		}
	}
	//empiezan los metodos
	private static void mostrarMenu() {
		System.out.println("1. Listar productos sin alquilar");
		System.out.println("2. Añadir producto");
		System.out.println("3. Mostrar ficha de producto");
		System.out.println("4. Listar clientes");
		System.out.println("5. Añadir cliente");
		System.out.println("6. Mostrar ficha de cliente");
		System.out.println("7. Alquilar producto");
		System.out.println("8. Devolver producto");
		System.out.println("9. Salir");
	}

	public static void ListaProductosSA () {
		 if (productos.isEmpty()) {
		        System.out.println("No hay productos disponibles.");
		        return;
		    }
		    for (ProductoVC producto : productos.values()) {
		        producto.mostrarDatos();
		    }

	}
	public static void AñadirPorducto() {
		// Crear un nuevo producto
		ProductoVC miProducto = new ProductoVC("Super Mario Bros", ProductoVC.VIDEOJUEGO, 19.99f, 15, false);
	    productos.put(miProducto.getTitulo(), miProducto);
	}
	public static void MostrarFichaProducto() {
     productos.
	}
	public static void ListarClientes() {

	}
	public static void AñadirCliente() {

	}
	public static void MostarFichaCliente() {

	}
	public static void AlquilarProducto() {

	}
	public static void DevolverProducto() {

	}
	public static void Salir() {
		Pantalla.escribirString("Me da pereza");
	}
}

