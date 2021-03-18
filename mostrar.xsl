<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <link rel="stylesheet" href="./style.css"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"></link>
      </head>
      <body>
        <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
        <h1>Página de másteres</h1>
        <label id="seleccion">Label para guardar la variable</label>
        <br />
        <div class="dropdown">
          <button class="btn">Masteres</button>
          <div class="dropdown-content">
            <xsl:for-each select="masteres/master">
              <div>
                <a onclick="showMaster(this)">
                  <b>
                    <xsl:value-of select="@id" />
                  </b>
                  <span class="margin">
                    <xsl:value-of select="@anio" />
                  </span>
                </a>
              </div>
            </xsl:for-each>

          </div>
        </div>
        <hr />
        <!-- Mostrando las asignaturas con la info correspondiente-->

        <div id="1" class="divTable">
          <xsl:for-each select="masteres/master">
            <div id="unidad" class="container bg-light" style="display:block">
              <h1>
                <xsl:value-of select="@nombre" />
              </h1>
              <h2>
                <xsl:value-of select="@id" />
              </h2>

              <xsl:for-each select="asignaturas/asignatura">

                <table>
                  <tr>
                    <th style="centerText" colspan="2">
                      <xsl:value-of select="nombre" />
                    </th>
                  </tr>
                  <tr>
                    <td>Descripcion </td>
                    <td>
                      <xsl:value-of select="descripcion" />
                    </td>
                  </tr>
                  <tr>
                    <td>Creditos </td>
                    <td>
                      <xsl:value-of select="creditos" />
                    </td>
                  </tr>
                  <tr>
                    <td>Localizacion </td>
                    <td>
                      <p>
                        lat:
                        <span>
                          <xsl:value-of select="localizacion/lat" />
                        </span>
                        long:
                        <span>
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
                </table>
              </xsl:for-each>
              <hr />
            </div>
          </xsl:for-each>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
        <script src="main.js"></script>
      </body>

    </html>
  </xsl:template>
</xsl:stylesheet>
