export const Card = (props) => {
    return (
      <Card>
          <div>{props.Card}</div>
          <button onClick={props.eliminarCancion}>eliminar</button>
      </Card>
    )
  }