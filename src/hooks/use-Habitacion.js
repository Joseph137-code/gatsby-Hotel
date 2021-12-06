import { graphql, useStaticQuery } from "gatsby";

const useHabitacion = () => {

    const data = useStaticQuery(graphql`
    query{
        allDatoCmsHabitacione{
          nodes{
            titulo
            slug
            contenido
            id
            imagen{
              fluid(maxWidth: 1200){
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `);
    
    return data.allDatoCmsHabitacione.nodes.map(habitacion => ({
        titulo: habitacion.titulo,
        id: habitacion.id,
        contenido: habitacion.contenido,
        imagen: habitacion.imagen,
        slug: habitacion.slug,
    }))
   
}
 
export default useHabitacion;

