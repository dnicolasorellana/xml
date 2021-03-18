<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <link rel="stylesheet" href="./css/style.css"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"></link>
      </head>
      <body>
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Principal</a>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Masteres
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <xsl:for-each select="masteres/master">
                    <li>
                      <a class="dropdown-item btn" onclick="showMaster(this)">
                        <b>
                          <xsl:value-of select="@id" />
                        </b>
                        <span class="margin">
                          <xsl:value-of select="@anio" />
                        </span>
                      </a>
                    </li>
                  </xsl:for-each>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./formulario.html" >Crear Master</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <h1>Página de másteres</h1>
        <label id="seleccion" class="d-none">Label para guardar la variable</label>

        <hr />
      <!-- Mostrando las asignaturas con la info correspondiente-->
      
      <div id="1" class="divTable">
        <xsl:for-each select="masteres/master">
        <div id="unidad" class="container bg-light" style="display:block">
          <div class="container">
            <h1>
              <xsl:value-of select="@nombre" />
            </h1>
            <h2 class="text-center">
              <xsl:value-of select="@id" />
            </h2>
          </div>
          
          <xsl:for-each select="asignaturas/asignatura">
          
          <table class="table">
            <tbody>
              <tr>
                <th scope="row" style="centerText" colspan="2">
                  <xsl:value-of select="nombre" />
                </th>
              </tr>
              <tr>
                <td>Descripción </td>
                <td>
                  <xsl:value-of select="descripcion" />
                </td>
              </tr>
              <tr>
                <td>Créditos </td>
                <td>
                  <xsl:value-of select="creditos" />
                </td>
              </tr>
              <tr>
                <td>Localización </td>
                <td>
                  <p>
                    <strong>lat</strong>
                    <span class="mx-3">
                      <xsl:value-of select="localizacion/lat" />
                    </span>
                    <br/>
                    <strong>long</strong>
                    <span class="mx-3">
                      <xsl:value-of select="localizacion/long" />
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>Profesores </td>
                <td>
                  
                  <xsl:value-of select="profesores/profesor/nombre" />
                  <span class="margin">
                    <xsl:value-of select="profesores/profesor/apellidos" />
                  </span>
                </td>
              </tr>
              <tr>
                <td>Alumnos </td>
                <td>
                  <xsl:for-each select="alumnos/alumno">
                  
                  <xsl:value-of select="nombre" />
                  <span class="margin">
                    <xsl:value-of select="apellidos" />
                  </span>
                  <br />
                </xsl:for-each>
              </td>
            </tr>
          </tbody>
          
        </table>
      </xsl:for-each>
      <hr />
    </div>
  </xsl:for-each>
</div>

<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
<script src="js/main.js"></script>
</body>

</html>
</xsl:template>
</xsl:stylesheet>
