## <h1>Auth : -</h1>

<h2>For Login:-</h2>
<strong>/api/auth/login</strong>

<h3>Post Req with body :-</h3>
{
user:
{
username:username,
password:password
}
}

<h3>Response</h3>
For success :- {
user:{
username:username
}
} and Sets the auth-token in the cookie

For fail :- {
error:{
errorMsg:errorMsg
}
}

---

<h2>For Registration :-</h2>
<strong>/api/auth/register</strong>

<h3>Post Req with body :-<h3>
{
user:{
username:username,
name:name,
password:password,
email:email,
phoneNumber:phoneNumber
}
}

<h3>Response</h3>

For Success :- {
user:{
username:username,
name:name,
}
}

For fail :- {
error:{
errorMsg:errorMsg
}
}
