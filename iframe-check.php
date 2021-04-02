<?php
$source = $_GET['url'];
$response = false;

try {
  $headers = get_headers($source, 1);
  $headers = array_change_key_case($headers, CASE_LOWER);

  if (isset($headers['content-security-policy'])) {
    $response = false;
  }
  else if (isset($headers['x-frame-options']) &&
    $headers['x-frame-options'] == 'DENY' ||
    $headers['x-frame-options'] == 'SAMEORIGIN'
  ) {
    $response = false;
  }
} catch (Exception $ex) {
  $response = $ex;
}

echo $response;
?>