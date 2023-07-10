const URLRecetas = import.meta.env.VITE_API_RECETAS;
const URLUsuarios = import.meta.env.VITE_API_USUARIOS;

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URLUsuarios);
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioBuscado) {
      if (usuarioBuscado.password === usuario.password) {
        return usuarioBuscado;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const registrar = async (usuarioNuevo) => {
  try {
    const respuesta = await fetch(`${URLUsuarios}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuarioNuevo),
    });
    return respuesta.json();
  } catch (error) {
    console.log(error);
  }
};

export const obtenerListaRecetas = async () => {
  try {
    const respuesta = await fetch(URLRecetas);
    const listaRecetas = await respuesta.json();
    return listaRecetas;
  } catch (error) {
    console.log(error);
  }
};

export const consultaReceta = async (id) => {
  try {
    const respuesta = await fetch(URLRecetas + '/' + id);
    const receta = await respuesta.json();
    return receta;
  } catch (error) {
    console.log(error);
  }
};

export const consultaAgregarReceta = async (receta) => {
  try {
    const respuesta = await fetch(URLRecetas, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(receta),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const consultaEditarReceta = async (receta, id) => {
  try {
    const respuesta = await fetch(URLRecetas + '/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(receta),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const consultaBorrarReceta = async (id) => {
  try {
    const respuesta = await fetch(`${URLRecetas}/${id}`, {
      method: 'DELETE',
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
