import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError(); // получаем информацию об ошибке

  return (
    <div
      style={{
        textAlign: "center",
        padding: "100px 20px",
        color: "#000",
        backgroundColor: "#fff",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "80px", marginBottom: "20px" }}>404</h1>
      <h2>Страница не найдена</h2>

      {error?.statusText && (
        <p style={{ marginTop: "10px", color: "#aaa" }}>
          {error.statusText || error.message}
        </p>
      )}

      <Link
        to="/"
        style={{
          marginTop: "30px",
          display: "inline-block",
          padding: "10px 25px",
          backgroundColor: "#000",
          borderRadius: "8px",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default ErrorPage;
