<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
    <h1>Página de másteres</h1>

	<p><b>Para añadir un máster rellena el form:</b></p>

    <br/>

    <!-- Mostrar XML actual -->

    <xsl:for-each select="masteres/master">
    <div style="background-color:teal;color:white;padding:4px">
        <span style="font-weight:bold"><xsl:value-of select="nombre"/> - </span>
        <xsl:value-of select="price"/>
        </div>
    <div style="margin-left:20px;margin-bottom:1em;font-size:10pt">
        <p>
        <xsl:value-of select="description"/>
        <span style="font-style:italic"> (<xsl:value-of select="calories"/> calories per serving)</span>
        </p>
    </div>
    </xsl:for-each>

  </body>
  </html>
</xsl:template>
</xsl:stylesheet>
