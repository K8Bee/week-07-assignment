// render the database data sent by users here

export default function Content() {
  //store data in state
  // fetch the values from the server (server will have the data in the READ route) - this is an effect
  // once fetched the data, parse it to JSON - console log it!
  //update state with the fetched data (might have to wrangle it)

  //poll database to keep data updated - this is an effect
  return (
    <>
      <h1>My Content</h1>
      {/* <div>rendered list of content, remember the key (react needs the key property).</div> */}
      {/* If feeling extra: conditionally render some items in my list? */}
    </>
  );
}
