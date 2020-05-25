<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>

  <button onclick="senKey()">senKey</button>

<script>
  function getKey() {
    let str = window.location.search.replace( '?', '');
    return str.split('=')[1];
  }
  
  function senKey() {
    let key = getKey();
    axios.post('/api/confirmation/email', {key: key})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
</script>
</body>
</html>