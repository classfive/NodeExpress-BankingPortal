<%- include('header') %>
<h1>Profile</h1>
<div>
  <p><= user.name %> </p>
  <p><= user.username %> </p>
  <p><= user.email %> </p>
  <p><= user.phone %> </p>
  <p><= user.address %> </p>
</div>
<br><a href="/">Back to Account Summary</a>
<%- include('footer') %>
