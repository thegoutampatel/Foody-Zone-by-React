import Button from "./Button"
function FilterBtn({filterFood}) {
  return (
    <div className="flex gap-3 justify-center mt-2">
            <Button onClick={() => filterFood("all")} text="All" />
            <Button onClick={() => filterFood("breakfast")} text="Breakfast"/>
            <Button onClick={() => filterFood("lunch")} text="Lunch"/>
            <Button onClick={() => filterFood("dinner")} text="Dinner"/>

    </div>
  )
}

export default FilterBtn