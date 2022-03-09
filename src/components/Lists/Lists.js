
export default function Lists({lists}) {

  console.log(lists)

  return (
  <div>
    <h2>Your Lists:</h2>
      {lists && lists.map(list => {
        return (
          <h2 key={list.id}>{list.title}</h2>
        )
      })}
  </div>
  )
}
