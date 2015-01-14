# AJAX-Forms
AJAX Forms using jQuery

Add the "ajax" class to any of your forms and this snippet will make an ajax request to the action url provided in the form everytime you submit.

## Example:
<form class="ajax" method="post" action="sub.php">
  <input type="text" name="username" placeholder="Username">
  <input type="password" name="password" placeholder="Password">
  <input type="submit" value="Login">
</form>

The above code will send a request to the provided url, using POST method.
