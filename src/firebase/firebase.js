
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB8_NsCbQyL8lPgaVzIsd-veBdCN85nT3I",
  authDomain: "react-proyecto-coder-8aa7f.firebaseapp.com",
  projectId: "react-proyecto-coder-8aa7f",
  storageBucket: "react-proyecto-coder-8aa7f.appspot.com",
  messagingSenderId: "14029244718",
  appId: "1:14029244718:web:0893e3b3bc32871b8712bf"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const cargarDB = async () => {
const promise = await fetch('./Json/Productos.json')
const productos = await promise.json()
productos.forEach(async (prod) => {
  await addDoc(collection(db, "productos"), {
    nombre: prod.nombre,
    idCategoria: prod.idCategoria,
    img: prod.img,
    precio: prod.precio,
    marca: prod.marca,
    stock: prod.stock

  })
})
}
export const getProductos = async ()=>{
  const productos = await getDocs(collection(db,"productos"));
  const items = productos.docs.map(prod =>{
    return{...prod.data(), id: prod.id}
  })
 return items
}

export const getProductoDetail = async (id)=>{
  const producto = await getDoc(doc(db, "productos", id)) 
  const item = {...producto.data(), id : producto.id}
  return item
}

export const createOrdenCompra = async (cliente, productos, precioTotal, fecha)=>{
  const ordenCompra = await addDoc(collection(db, "ordenCompra"),{
    datosCliente : cliente,
    productos : productos,
    precioTotal : precioTotal,
    fecha : fecha

  })
  return ordenCompra
}

export const getOrdenCompra = async (id)=>{
  const ordenCompra = await getDoc(doc(db,"ordenCompra",id));
  const oCompra = {...ordenCompra.data(), id: ordenCompra.id}
  return oCompra
}

export const updateProducto = async (id, info) =>{
  await updateDoc(doc(db, "productos", id), info)
}