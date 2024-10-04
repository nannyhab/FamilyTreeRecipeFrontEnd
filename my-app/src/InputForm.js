export default function MyForm() {
    
    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
  
      // You can pass formData as a fetch body directly:
      fetch('/some-api', { method: form.method, body: formData });
  
      // Or you can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);
    }
  
    return (
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Enter Recipe Name: <input name="myInput" defaultValue="Cherry Cheesecake" />
        </label>
        <hr />
        <p>
          Difficulty:
          <label><input type="radio" name="myRadio" value="option1" /> Easy </label>
          <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Medium </label>
          <label><input type="radio" name="myRadio" value="option3" /> Hard</label>
        </p>
        <hr />
        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
      </form>
    );
  }
  