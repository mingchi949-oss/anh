<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Put your actual Telegram details here
    $token = "8749837452:AAF_TCGDTvgK4bLXBIoM4eQLjxv27Rxcksw";
    $chat_id = "-5249856765";

    // 2. Simple, clean alert message
    $message = "🔔 **New Order Received!**";

    // 3. Prepare the Telegram API URL
    $url = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chat_id . "&text=" . urlencode($message) . "&parse_mode=markdown";
    
    // 4. Send the notification to your Telegram bot
    file_get_contents($url);
    
    // 5. Show a simple success message to the customer
    echo "<h1>Thank you! Your order has been placed.</h1>";
    exit();
}
?>