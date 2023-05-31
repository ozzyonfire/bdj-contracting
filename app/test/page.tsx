export default function Page() {
  return (
    <form action="/api/contact" method="POST">
      <input id="fname" type="text" name="first-name" required />
      <input id="lname" type="text" name="last-name" required />
    </form>
  );
}