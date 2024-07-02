// http
const http = require("http");

const homepage = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Homepage</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">

    <!-- Header Section -->
    <header style="background-color: #4CAF50; color: white; padding: 15px; text-align: center;">
        <h1>Welcome to My Homepage</h1>
    </header>

    <!-- Navigation Bar -->
    <nav style="display: flex; justify-content: center; background-color: #333;">
        <a href="#" style="color: white; padding: 14px 20px; text-decoration: none; text-align: center;">Home</a>
        <a href="#" style="color: white; padding: 14px 20px; text-decoration: none; text-align: center;">About</a>
        <a href="#" style="color: white; padding: 14px 20px; text-decoration: none; text-align: center;">Services</a>
        <a href="#" style="color: white; padding: 14px 20px; text-decoration: none; text-align: center;">Contact</a>
    </nav>

    <!-- Main Content Section -->
    <main style="padding: 20px;">
        <section style="margin-bottom: 20px;">
            <h2>About Us</h2>
            <p>Welcome to our homepage. We provide a range of services to help you achieve your goals. Our team is dedicated to providing the best service possible.</p>
        </section>

        <section style="margin-bottom: 20px;">
            <h2>Our Services</h2>
            <p>We offer a variety of services including web development, SEO, and digital marketing. Contact us to learn more about how we can help you.</p>
        </section>

        <section style="margin-bottom: 20px;">
            <h2>Contact Us</h2>
            <p>If you have any questions or would like to get in touch, please feel free to contact us. We look forward to hearing from you!</p>
        </section>
    </main>

    <!-- Footer Section -->
    <footer style="background-color: #333; color: white; text-align: center; padding: 10px; position: fixed; width: 100%; bottom: 0;">
        <p>&copy; 2024 My Homepage. All rights reserved.</p>
    </footer>

</body>
</html>
`;

const aboutUs = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - Simple Homepage</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">

    <!-- Header Section -->
    <header style="background-color: #4CAF50; color: white; padding: 15px; text-align: center;">
        <h1>About Us</h1>
    </header>

    <!-- Navigation Bar -->
    <nav style="display: flex; justify-content: center; background-color: #333;">
        <a href="#" style="color: white; padding: 14px 20px; text-decoration: none; text-align: center;">Home</a>
        <a href="#" style="color: white; padding: 14px 20px; text-decoration: none; text-align: center;">About</a>
        <a href="#" style="color: white; padding: 14px 20px; text-decoration: none; text-align: center;">Services</a>
        <a href="#" style="color: white; padding: 14px 20px; text-decoration: none; text-align: center;">Contact</a>
    </nav>

    <!-- Main Content Section -->
    <main style="padding: 20px;">
        <section style="margin-bottom: 20px;">
            <h2>Who We Are</h2>
            <p>Our company was founded with the mission to provide exceptional services and solutions. Our team is composed of dedicated professionals committed to delivering high-quality results.</p>
        </section>

        <section style="margin-bottom: 20px;">
            <h2>Our Mission</h2>
            <p>We strive to exceed our clients' expectations through innovative solutions and unparalleled service. Our goal is to help our clients succeed and grow in their respective fields.</p>
        </section>

        <section style="margin-bottom: 20px;">
            <h2>Our Values</h2>
            <ul style="list-style-type: none; padding: 0;">
                <li style="margin-bottom: 10px;"><strong>Integrity:</strong> We adhere to the highest standards of ethical behavior.</li>
                <li style="margin-bottom: 10px;"><strong>Excellence:</strong> We deliver outstanding results and continually strive for improvement.</li>
                <li style="margin-bottom: 10px;"><strong>Innovation:</strong> We embrace creativity and encourage new ideas.</li>
                <li style="margin-bottom: 10px;"><strong>Teamwork:</strong> We work collaboratively to achieve common goals.</li>
            </ul>
        </section>
    </main>

    <!-- Footer Section -->
    <footer style="background-color: #333; color: white; text-align: center; padding: 10px; position: fixed; width: 100%; bottom: 0;">
        <p>&copy; 2024 Our Company. All rights reserved.</p>
    </footer>

</body>
</html>
`;

// 1. create server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.end(homepage);
  }

  if (req.url === "/about-us") {
    res.end(aboutUs);
  }
});

// 2. running the created server
server.listen(3000);
