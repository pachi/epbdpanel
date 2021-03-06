import React from "react";

import NavBar from "components/NavBar";
import Footer from "components/Footer";
import esquema_0pasos from "img/esquema_0pasos.svg";
import esquema_1balance from "img/esquema_1balance.svg";
import esquema_2ponderacion from "img/esquema_2ponderacion.svg";
import interfaz_general from "img/interfaz/general.png";
import interfaz_parametrosgenerales from "img/interfaz/parametrosgenerales.png";
import interfaz_pestanhavectores from "img/interfaz/pestanhavectores.png";
import interfaz_pestanhaservicios from "img/interfaz/pestanhaservicios.png";
import interfaz_pestanhacomponentes from "img/interfaz/pestanhacomponentes.png";
import interfaz_editor from "img/interfaz/editor.png";
import interfaz_entradavalorexpresion from "img/interfaz/entradavalorexpresion.png";
import interfaz_comentario from "img/interfaz/comentario.png";
import interfaz_indicadores from "img/interfaz/indicadores.png";
import interfaz_factorespaso from "img/interfaz/factorespaso.png";
import interfaz_creditos from "img/interfaz/creditos.png";
import linea1vector from "img/ejemplos/linea1vector.png";
import linea2vectores from "img/ejemplos/linea2vectores.png";
import linea3cogen from "img/ejemplos/linea3cogen.png";
import linea4panelfotovoltaico from "img/ejemplos/linea4panelfotovoltaico.png";
import linea4paneltermico from "img/ejemplos/linea4paneltermico.png";
import ejemplo1gasconsumo from "img/ejemplos/ejemplo1gasconsumo.png";
import ejemplo1gasdemanda from "img/ejemplos/ejemplo1gasdemanda.png";
import ejemplo2bdcconsumo from "img/ejemplos/ejemplo2bdcconsumo.png";
import ejemplo2bdcdemanda from "img/ejemplos/ejemplo2bdcdemanda.png";
import ejemplo3cogenconsumo from "img/ejemplos/ejemplo3cogenconsumo.png";
import ejemplo3cogendemanda from "img/ejemplos/ejemplo3cogendemanda.png";

function scrollToId(id) {
  document.getElementById(id).scrollIntoView(true);
  window.scrollBy(0, -40); // Adjust scrolling with a negative value here
}

const LinkId = (props) => (
  <a onClick={(_) => scrollToId(props.to)}>{props.children}</a>
);

const ScrollToIndex = (_) => (
  <LinkId to="Indice">
    <small>
      (Volver al índice <span className="fa fa-chevron-up" />)
    </small>
  </LinkId>
);

// Página de ayuda
const HelpPage = (props) => (
  <div>
    <NavBar match={props.match} />
    <div className="container-fluid">
      <div className="page-header">
        <h1>VisorEPBD</h1>

        <p className="lead">
          <em>VisorEPBD</em> es una aplicación web de ayuda a la{" "}
          <strong>
            evaluación de la eficiencia energética de los edificios
          </strong>{" "}
          usando el procedimiento de la norma ISO UNE-EN 52000-1 y destinado a
          la{" "}
          <strong>aplicación del Documento Básico de Ahorro de Energía</strong>{" "}
          (DB-HE) del <strong>Código Técnico de la Edificación</strong> (CTE).
        </p>

        <p>
          La aplicación{" "}
          <a href="https://github.com/energiacte/cteepbd">CteEPBD</a>{" "}
          proporciona una implementación alternativa del procedimiento para su
          uso desde la consola.
        </p>
      </div>

      <div className="card card-body bg-light" id="Indice">
        <h3>Índice</h3>
        <ul>
          <li>
            <LinkId to="Interfaz">
              <b>
                Interfaz de <i>VisorEPBD</i>
              </b>
            </LinkId>
            <ul>
              <li>
                <LinkId to="Interfaz1">
                  Organización general y menú de navegación
                </LinkId>
              </li>
              <li>
                <LinkId to="Interfaz3">
                  Sección <i>Inicio</i>
                </LinkId>
              </li>
              <li>
                <LinkId to="Interfaz4">
                  Sección <i>Factores de paso</i>
                </LinkId>
              </li>
              <li>
                <LinkId to="Interfaz5">
                  Sección <i>Ayuda</i>
                </LinkId>
              </li>
              <li>
                <LinkId to="Interfaz6">
                  Sección <i>Créditos</i>
                </LinkId>
              </li>
            </ul>
          </li>
          <li>
            <LinkId to="Evaluacion">
              <b>
                Evaluación de la eficiencia energética con <i>VisorEPBD</i>
              </b>
            </LinkId>
            <ul>
              <li>
                <LinkId to="Evaluacion1">
                  Etapas de evaluación de la eficiencia energética
                </LinkId>
              </li>
              <li>
                <LinkId to="Evaluacion2">
                  Proceso de cálculo del <i>VisorEPBD</i>
                </LinkId>
              </li>
            </ul>
          </li>
          <li>
            <LinkId to="Uso">
              <b>
                Uso de <i>VisorEPBD</i> como herramienta de ayuda al diseño
              </b>
            </LinkId>
            <ul>
              <li>
                <LinkId to="Uso1">Predimensionado de soluciones</LinkId>
              </li>
              <li>
                <LinkId to="Uso2">
                  Introducción de sistemas en <i>VisorEPBD</i>
                </LinkId>
              </li>
              <li>
                <LinkId to="Uso3">
                  Estimación de la de la energía final a partir de la demanda
                </LinkId>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <hr />

      <div className="row">
        <div className="col">
          <a id="Interfaz" />
          <h2 className="help-header">
            Interfaz de la herramienta <i>VisorEPBD</i>
          </h2>

          <a id="Interfaz1" />
          <h3>
            Organización general y menú de navegación <ScrollToIndex />
          </h3>

          <img
            className="img-fluid offset-md-2"
            width="60%"
            src={interfaz_general}
          />
          <p>
            La pantalla de la aplicación se organiza mediante un menú y un
            espacio que se modifica en función de la sección que se encuentre
            activada.
          </p>
          <p>
            El menú permite acceder a las secciones: <i>Inicio</i>,{" "}
            <i>Factores de paso</i>, <i>Ayuda</i> y <i>Créditos</i>, que se
            describen a continuación.
          </p>

          <a id="Interfaz3" />
          <h3>
            Sección <i>Inicio</i> <ScrollToIndex />
          </h3>

          <p>
            Esta es la sección principal de trabajo, en la que se opera con los
            datos de entrada y los parámetros generales, a excepción de los
            factores de paso, que disponen de una sección propia.
          </p>

          <h4>Parámetros generales</h4>

          <img
            className="img-fluid offset-md-2"
            width="60%"
            src={interfaz_parametrosgenerales}
          />
          <p>
            Esta pestaña permite definir y modificar los parámetros generales de
            cálculo:
            <ul>
              <li>
                el <b>factor de exportación</b> (
                <i>
                  k<sub>exp</sub>
                </i>
                ) , adimensional y con valores entre 0.0 y 1.0;
              </li>
              <li>
                el <b>área de referencia</b> (
                <i>
                  Area<sub>ref</sub>
                </i>
                ) , en m²;
              </li>
              <li>
                la <b>demanda anual de ACS</b> (
                <i>
                  D<sub>ACS,an</sub>
                </i>
                ), en kWh/a;
              </li>
              <li>
                la <b>localización</b>, a efectos de determinar los factores de
                paso reglamentarios;
              </li>
              <li>
                el <b>nombre del proyecto</b>, que se usará como nombre del
                archivo de datos, en caso de guardar la información en disco.
              </li>
            </ul>
          </p>
          <p>
            El botón &quot;
            <b>
              <span className="fa fa-download" />
              &quot; Guardar datos
            </b>{" "}
            permite descargar en un archivo los datos de los componentes
            energéticos que se muestran en la aplicación, para poder
            recuperarlos en otro momento usando el botón &quot;
            <b>
              <span className="fa fa-upload" /> Cargar datos
            </b>
            &quot;.
          </p>

          <h4>Diagrama de indicadores</h4>

          <img
            className="img-fluid offset-md-2"
            width="60%"
            src={interfaz_indicadores}
          />
          <p>
            El diagrama muestra los valores y resultados de:
            <ul>
              <li>
                el{" "}
                <b>
                  factor de exportación{" "}
                  <i>
                    k<sub>exp</sub>
                  </i>{" "}
                  usado;
                </b>
              </li>
              <li>
                el <b>consumo de energía primaria</b>, incluyendo:
                <ul>
                  <li>
                    la <b>fracción de energía primaria de origen renovable</b>{" "}
                    (RER);
                  </li>
                  <li>
                    el{" "}
                    <b>
                      consumo de energía primaria total (
                      <i>
                        C<sub>ep,tot</sub>
                      </i>
                      )
                    </b>
                    ;
                  </li>
                  <li>
                    el{" "}
                    <b>
                      consumo de energía primaria no renovable (
                      <i>
                        C<sub>ep,nren</sub>
                      </i>
                      )
                    </b>{" "}
                    ;
                  </li>
                  <li>
                    el{" "}
                    <b>
                      consumo de energía primaria renovable (
                      <i>
                        C<sub>ep,ren</sub>
                      </i>
                      )
                    </b>
                    ;
                  </li>
                </ul>
              </li>
              <li>
                las{" "}
                <b>
                  emisiones de CO<sub>2</sub>
                </b>
                ;
              </li>
              <li>
                el{" "}
                <b>
                  porcentaje de la demanda de ACS procedente de fuentes
                  renovables
                </b>
                , calculada para el perímetro próximo .
              </li>
            </ul>
          </p>

          <h4>Pestaña de desglose por servicios</h4>

          <img
            className="img-fluid offset-md-2"
            width="60%"
            src={interfaz_pestanhaservicios}
          />
          <p>
            Esta pestaña de resultados incluye una representación gráfica,
            desagregada por servicios, del consumo de energía final, la energía
            primaria total, la energía primaria de origen renovable y las
            emisiones de CO2.
          </p>

          <h4>Pestaña de desglose por vectores energéticos</h4>

          <img
            className="img-fluid offset-md-2"
            width="60%"
            src={interfaz_pestanhavectores}
          />
          <p>
            Esta pestaña de resultados incluye, para cada vector energético
            disponible, una representación gráfica de la energía final consumida
            por servicios, la energía final suministrada por origen, la energía
            final exportada por destino, la energía primaria total por
            servicios, la energía primaria de origen renovable por servicios y
            las emisiones de CO2 por servicios.
          </p>

          <h4>Pestaña de componentes energéticos</h4>

          <img
            className="img-fluid offset-md-2"
            width="60%"
            src={interfaz_pestanhacomponentes}
          />
          <p>
            Esta parte de la interfaz incluye una tabla con información sobre
            los <b>componentes de consumo y producción de energía</b> del
            edificio.
          </p>
          <p>
            Aunque estos datos se obtendrán generalmente de una aplicación de
            cálculo energético (como la{" "}
            <i>Herramienta Unificada LIDER/CALENER</i>
            ), se dispone de una botonera con acciones que permite añadir,
            eliminar o modificar componentes energéticos.
          </p>

          <p>
            La tabla muestra en columnas la siguiente información sobre cada
            componente energético:
          </p>
          <ul>
            <li>
              (Activación): permite activar o desactivar la línea en el cálculo;
            </li>
            <li>
              <b>Tipo</b>: define si se trata de un componente de tipo{" "}
              <tt>CONSUMO</tt> o <tt>PRODUCCION</tt>;
            </li>
            <li>
              <b>Subtipo</b>: define el origen de la energía producida (
              <tt>INSITU</tt> o <tt>COGENERACION</tt>,) o el uso de la energía
              consumida (<tt>EPB</tt> para usos EPB, o <tt>NEPB</tt> para usos
              no EPB);
            </li>
            <li>
              <b>Servicio</b>: servicio al que se refiere el componente
              energético (puede tomar un valor entre: <tt>CAL</tt>, <tt>REF</tt>
              , <tt>ACS</tt>, <tt>VEN</tt>, <tt>ILU</tt>, <tt>HU</tt>,{" "}
              <tt>DHU</tt> o <tt>NDEF</tt>, referidos, respectivamente, a los
              servicios de calefacción, refrigeración, agua caliente sanitaria,
              ventilación, iluminación, humidificación, deshumidificación o
              cualquiera de los servicios definidos;
            </li>
            <li>
              <b>Vector energético</b>: vector energético del componente (puede
              tomar un valor entre los siguientes: <tt>BIOCARBURANTE</tt>,{" "}
              <tt>BIOMASA</tt>, <tt>BIOMASADENSIFICADA</tt>, <tt>CARBON</tt>,{" "}
              <tt>ELECTRICIDAD</tt>, <tt>FUELOIL</tt>, <tt>GASNATURAL</tt>,{" "}
              <tt>GASOLEO</tt>, <tt>GLP</tt>, <tt>MEDIOAMBIENTE</tt>,{" "}
              <tt>RED1</tt>, <tt>RED2</tt>, donde <tt>RED1</tt> y <tt>RED2</tt>{" "}
              son vectores genéricos para redes de distrito, con factores de
              paso definibles por el usuario, y <tt>MEDIOAMBIENTE</tt> es
              energía térmica extraída del medioambiente);
            </li>
            <li>
              <b>kWh/a</b>: muestra la suma de los valores mensuales de energía
              final del componente energético;
            </li>
            <li>
              <b>kWh/m²·a</b>: muestra suma de los valores mensuales de energía
              final del componente, repercutida por el área de referencia;
            </li>
            <li>
              <b>Valores</b>: muestra un histograma de los valores mensuales de
              energía final del componente;
            </li>
            <li>
              <b>Comentario</b>: muestra un comentario descriptivo del
              componente energético.
            </li>
          </ul>
          <p>
            Las líneas de tipo <tt>CONSUMO</tt> se muestran en color azul y las
            de tipo <tt>PRODUCCION</tt> en color negro, y se resalta la línea
            seleccionada.
          </p>
          <p>
            La tabla de componentes energéticos dispone además de tres botones
            de acciones:
            <b>
              <span className="fa fa-plus" /> Añadir
            </b>
            ,{" "}
            <b>
              <span className="fa fa-minus" /> Borrar
            </b>{" "}
            y{" "}
            <b>
              <span className="fa fa-edit" /> Editar
            </b>
            , que permiten, respectivamente, añadir un nuevo componente, borrar
            el componente seleccionado y editar el componente seleccionado.
          </p>

          <h4>
            Editor del componente energético seleccionado (botón{" "}
            <b>
              <span className="fa fa-edit" /> Editar
            </b>
            )
          </h4>

          <p>
            <img
              className="img-fluid offset-md-2"
              width="60%"
              src={interfaz_editor}
            />
          </p>
          <p className="card card-body alert-danger">
            NOTA: El interés de este apartado es exploratorio, al permitir
            modificar los datos de entrada.
          </p>

          <p>
            El panel de edición muestra una ventana que permite modificar los
            datos del componente energético actualmente seleccionado.
          </p>
          <p>
            Se pueden cambiar el <b>vector energético</b>, el <b>tipo</b> de
            valores (<tt>CONSUMO</tt> o <tt>PRODUCCION</tt>), el <b>subtipo</b>{" "}
            (<tt>COGENERACION</tt> o <tt>INSITU</tt>, para líneas de tipo{" "}
            <tt>PRODUCCION</tt>, y <tt>EPB</tt> o <tt>NEPB</tt>, para líneas de
            tipo <tt>CONSUMO</tt>) y el <b>servicio</b> al que se destina la
            energía.
          </p>
          <p>
            El desplegable <b>Curva</b> permite modificar la forma de la línea
            de valores del componente energético (que se muestra a su derecha),
            manteniendo la forma actual o estableciendo una forma distinta
            (constante, creciente, decreciente, cóncava, convexa), manteniendo
            el valor de energía (final) total del componente. El interés de este
            control reside en el uso del programa para el diseño, donde puede
            resultar útil partir de un valor total anual y una distribución
            mensual con una forma genérica.
          </p>
          <p>
            La entrada <b>Valores</b> permite modificar los valores de energía
            final de cada paso de cálculo (valores mensuales) editando una
            cadena de valores numéricos separados por comas.
          </p>
          <p>
            El botón deslizante y la entrada de <b>Energía total</b> permite
            escalar los valores de cada paso de cálculo (valores mensuales) del
            componente energético, manteniendo su forma. Permite actuar moviendo
            el deslizador lateral o introduciendo un valor o una expresión
            matemática simple (+-*/), debiendo presionar la tecla ENTER para
            aceptar el valor introducido.
          </p>

          <p>
            <img
              className="img-fluid offset-md-2"
              width="60%"
              src={interfaz_entradavalorexpresion}
            />
          </p>

          <p>
            La casilla de entrada de comentario permite introducir o modificar
            un comentario descriptivo del componente energético.
          </p>

          <p>
            <img
              className="img-fluid offset-md-2"
              width="60%"
              src={interfaz_comentario}
            />
          </p>

          <a id="Interfaz4" />
          <h3>
            Sección <i>Factores de paso</i> <ScrollToIndex />
          </h3>

          <img
            className="img-fluid offset-md-2"
            width="60%"
            src={interfaz_factorespaso}
          />
          <p>
            En esta sección se definen y muestran los factores de paso para el
            cálculo.
          </p>
          <p>
            El apartado <b>Localización</b> permite elegir la localización del
            edificio (Península, Canarias, Baleares o Ceuta y Melilla), que
            determina los factores de paso reglamentarios.
          </p>
          <p>
            El apartado <b>Factores definidos por el usuario</b> permite
            introducir los factores que no están determinados de forma
            reglamentaria, sino que deben ser aportados y justificados por el
            usuario.
          </p>
          <p>
            El apartado <b>Factores definidos reglamentariamente</b> muestra los
            valores resultantes de la localización definida anteriormente.
          </p>

          <a id="Interfaz5" />
          <h3>
            Sección <i>Ayuda</i> <ScrollToIndex />
          </h3>

          <p>
            Contiene esta información de ayuda sobre el funcionamiento del
            programa y su proceso de cálculo.
          </p>

          <a id="Interfaz6" />
          <h3>
            Sección <i>Créditos</i> <ScrollToIndex />
          </h3>

          <img
            className="img-fluid offset-md-2"
            width="60%"
            src={interfaz_creditos}
          />
          <p>
            En esta sección se muestran los créditos del programa y la licencia
            con la que se distribuye.
          </p>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col">
          <a id="Evaluacion" />
          <h2 className="help-header">
            Evaluación de la eficiencia energética con VisorEPBD
          </h2>

          <a id="Evaluacion1" />
          <h3>
            Etapas de evaluación de la eficiencia energética <ScrollToIndex />
          </h3>

          <p>
            <i>VisorEPBD</i> se basa en el procedimiento de evaluación de la
            eficiencia energética detallado en la norma <i>FprEN ISO 52000-1</i>{" "}
            para la obtención de indicadores de eficiencia energética.
          </p>

          <div className="card card-body alert-info">
            <p>
              La futura norma{" "}
              <a href="https://standards.cen.eu/dyn/www/f?p=204:110:0::::FSP_PROJECT,FSP_LANG_ID:39126,25&cs=19F7F3818E534259C716B5367760F1291">
                FprEN ISO 52000-1
              </a>{" "}
              (ISO/FDIS 52000-1:2016) está en fase de aprobación y posiblemente
              será aprobada en el año 2017. Su contenido, en relación al cálculo
              de los balances energéticos, es sustancialmente igual al de la
              vigente{" "}
              <a href="https://standards.cen.eu/dyn/www/f?p=204:110:0::::FSP_PROJECT:27654&cs=1AF4D76BF8CF676FF1309B6875F21B1EB">
                EN 15603:2008
              </a>{" "}
              (y su propuesta de actualización EN 15603:2014).
            </p>
          </div>

          <p>
            El procedimiento parte de la <b>energía consumida</b> y la{" "}
            <b>
              energía producida <i>in situ</i>
            </b>
            , define los balances energéticos e indicadores de eficiencia,
            además de describir otras salidas de resultados.
          </p>

          <p>Los pasos del procedimiento de evaluación son los siguientes:</p>

          <ol style={{ listStyleType: "lower-alpha" }}>
            <li>
              Definición de las cargas internas y condiciones operacionales del
              edificio y sus espacios;
            </li>
            <li>Definición de las cargas externas (clima) del edificio;</li>
            <li>Zonificación del edificio;</li>
            <li>
              Cálculo de las <strong>necesidades de energía final</strong> de
              los servicios en cada intervalo de cálculo, considerando la
              energía auxiliar, la{" "}
              <strong>contribución de las fuentes de energía renovables</strong>{" "}
              y la pérdidas térmicas recuperables;
            </li>
            <li>
              Consideración de las interacciones entre procesos (repetición o
              iteración);
            </li>
            <li>
              Cálculo de la{" "}
              <strong>
                producción <em>in situ</em> de electricidad
              </strong>{" "}
              (con paneles fotovoltaicos, cogeneración u otros sistemas);
            </li>
            <li style={{ color: "navy" }}>
              Cálculo de la{" "}
              <b>composición de la energía suministrada y exportada</b> en cada
              intervalo de cálculo;
            </li>
            <li style={{ color: "navy" }}>
              <b>Ponderación de la energía suministrada y exportada</b> (como
              energía primaria o emisiones) en cada intervalo de cálculo,
              teniendo en cuenta o no la inclusión de la energía exportada en la
              evaluación del rendimiento energético del edificio;
            </li>
            <li style={{ color: "navy" }}>
              <b>Agregación de los resultados</b> a lo largo del periodo de
              cálculo y obtención de los{" "}
              <b>indicadores de eficiencia energética</b>;
            </li>
            <li>
              Obtención de la energía suministrada o ponderada por servicio o
              parte del edificio;
            </li>
            <li>
              Obtención de indicadores parciales de rendimiento (eficiencias de
              subsistemas, factores de carga, etc);
            </li>
            <li>Elaboración de informes de cálculo.</li>
          </ol>

          <p>
            De forma general, dicho procedimiento se puede estructurar en tres
            fases:
          </p>

          <ol>
            <li>
              <b>Obtención de datos de entrada</b> (pasos <i>a</i> a <i>f</i>):
              a partir de modelización energética con procedimientos de
              simulación o de mediciones
            </li>
            <li style={{ color: "navy" }}>
              <b>Cálculo de la eficiencia energética y de los indicadores</b>{" "}
              (pasos <i>g</i> a <i>i</i>): esta es la etapa que resuelve{" "}
              <i>VisorEPBD</i>
            </li>
            <li>
              <b>Elaboración de los resultados</b> (pasos <i>j</i> a <i>l</i>):
              para la comunicación de resultados, incluyendo indicadores
              globales o parciales.
            </li>
          </ol>

          <a id="Evaluacion2" />
          <h3>
            Proceso de cálculo del <i>VisorEPBD</i> <ScrollToIndex />
          </h3>

          <h4>Entradas externas</h4>

          <p>VisorEPBD se alimenta de entradas externas que consisten en:</p>

          <ul>
            <li>
              <strong>Parámetros generales</strong> (factor de exportación,
              factores de paso, duración del intervalo de cálculo y del paso de
              cálculo);
            </li>
            <li>
              Valores de <strong>consumo</strong> y <strong>producción</strong>{" "}
              de <strong>energía final</strong> en cada intervalo de cálculo,
              por vector energético, obtenidos mediante procedimientos de
              simulación energético o de mediciones.
            </li>
          </ul>

          <div className="card card-body alert-info">
            <p>
              <b>IMPORTANTE</b>: Cuando se desee realizar una evaluación
              reglamentaria los parámetros generales vendrán fijados por
              documentos reglamentarios (<i>CTE DB-HE</i>,{" "}
              <i>Certificación energética</i>), y las condiciones de simulación
              o de obtención de los datos de consumo y producción serán
              obtenidos en las condiciones que fijen dichos documentos.
            </p>
            <p>
              En el contexto reglamentario del <i>CTE DB-HE</i> solamente se
              consideran los consumos de los siguientes usos (EPB):{" "}
              <i>
                calefacción, refrigeración, ventilación, ACS y, en uso
                terciario, iluminación
              </i>
              , y la producción de energía <i>in situ</i>.
            </p>
            <p>
              Los factores de paso oficiales pueden consultarse en el Documento
              reconocido del RITE{" "}
              <a href="http://www.minetad.gob.es/energia/desarrollo/EficienciaEnergetica/RITE/Reconocidos/Reconocidos/Otros%20documentos/Factores_emision_CO2.pdf">
                Factores de emisión de CO2 y coeficientes de paso a energía
                primaria de diferentes fuentes de energía final consumidas en el
                sector de edificios en España
              </a>{" "}
              incluye los factores de paso de energía final a energía primaria y
              emisiones.
            </p>
          </div>

          <h4>Etapas del proceso</h4>

          <p>
            Una vez realizada la entrada de datos, <i>VisorEPBD</i> realiza un
            proceso interno de cálculo que consta de las siguientes etapas:
          </p>

          <img className="img-fluid offset-md-2" src={esquema_0pasos} />

          <h4>Cálculo del balance de energía final suministrada y exportada</h4>

          <p>
            En esta etapa <i>VisorEPBD</i> obtiene, a partir de los datos de
            energía final consumida y producida <i>in situ</i> para cada
            intervalo de cálculo, un balance de la energía suministrada (por las
            redes de suministro o el medioambiente) al edificio (energía
            importada al edificio) y la energía exportada por el edificio en
            cada intervalo de cálculo.
          </p>

          <div className="card card-body alert-info">
            <p>
              El <b>intervalo de cálculo</b> determina la granularidad de los
              datos de entrada (p.e. mensual) para el proceso de evaluación de
              la eficiencia energética y no necesariamente se correponde con la
              que se ha empleado para su obtención o para la simulación
              energética (p.e. horaria). El <b>paso de cálculo</b> suele ser,
              casi siempre, anual.
            </p>
          </div>

          <img
            className="img-fluid offset-md-2 col-lg-8"
            src={esquema_1balance}
          />

          <h4>Ponderación de la energía suministrada y exportada</h4>

          <p>
            En esta etapa <i>VisorEPBD</i> convierte, mediante la ponderación
            con los <i>factores de paso</i>, la energía final a{" "}
            <b>energía primaria</b>, emisiones, costes, etc, para cada intervalo
            de cálculo.
          </p>

          <p>
            La energía exportada se pondera de dos modos, uno que tiene en
            cuenta los recursos utilizados para generarla (<b>paso A</b>) y otro
            que incluye también el impacto de la exportación de dicha energía,
            como recursos evitados a la red (<b>paso B</b>).
          </p>

          <p>
            En la consideración del <i>paso B</i> interviene otro parámetro
            global, el <b>factor de exportación</b>,{" "}
            <b>
              k<sub>exp</sub>
            </b>
            , que determina la fracción de la energía finalmente exportada que
            se tiene en cuenta para evaluar el impacto en la red.
          </p>

          <img
            className="img-fluid offset-md-2 col-lg-8"
            src={esquema_2ponderacion}
          />

          <div className="card card-body alert-info">
            <p>
              En el contexto reglamentario del <i>CTE DB-HE</i> la ponderación
              utilizada está orientada a la obtención de <b>energía primaria</b>{" "}
              y, en la <i>Certificación energética</i>, también de las{" "}
              <b>
                emisiones de CO<sub>2e</sub>
              </b>
              .
            </p>

            <p>
              En el caso en el que el factor de exportación,{" "}
              <i>
                k<sub>exp</sub>
              </i>
              , sea igual a cero, los valores obtenidos en los pasos A y B
              coinciden.
            </p>
          </div>

          <h4>Agregación y obtención de indicadores</h4>

          <p>
            La <b>eficiencia energética</b> se define como{" "}
            <i>
              la diferencia entre la energía importada y la exportada por el
              sistema
            </i>
            , realizando el <i>VisorEPBD</i> este balance teniendo en cuenta los
            dos pasos anteriores, el <i>paso A</i>, considerando en la
            eficiencia energética los recursos empleados, y el <i>paso B</i>,
            teniendo en cuenta también el impacto de la energía exportada en la
            red.
          </p>

          <p>
            Los indicadores (como el consumo de energía primaria) pueden, a su
            vez, descomponerse en la fracción procedente de fuentes renovables y
            la procedente de fuentes no renovables.
          </p>

          <img
            className="img-fluid offset-md-2 col-lg-8"
            src={interfaz_pestanhacomponentes}
          />
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col">
          <a id="Uso" />
          <h2 className="help-header">
            Uso de <i>VisorEPBD</i> como herramienta de ayuda al diseño
          </h2>

          <a id="Uso1" />
          <h3>
            Predimensionado de soluciones <ScrollToIndex />
          </h3>

          <p>
            Además de la evaluación energética de un edificio o proyecto
            particular, <i>VisorEPBD</i> puede usarse como herramienta de ayuda
            al diseño, con datos de demanda energética para evaluar el impacto
            de:
          </p>
          <ul>
            <li>el uso de sistemas con diferentes rendimientos</li>
            <li>cambios en los vectores energéticos suministrados</li>
            <li>
              la producción <i>in situ</i> de energía renovable
            </li>
          </ul>

          <a id="Uso2" />
          <h3>
            Introducción de sistemas en <i>VisorEPBD</i> <ScrollToIndex />
          </h3>

          <h4>Introducción de sistemas de un único vector energético</h4>

          <p>
            Los sistemas alimentados por un único vector energético (combustible
            o electricidad) se aparecen en el <i>VisorEPBD</i> como una única
            línea de valores de consumo del vector energético y, dependiendo del
            servicio producido, se tratará de un consumo de tipo EPB o no EPB.
          </p>
          <p>
            La siguiente figura muestra la línea de valores en la interfaz de{" "}
            <i>VisorEPBD</i> correspondiente a la producción de un servicio EPB
            por un sistema alimentado con un único vector energético.
          </p>

          <img
            className="img-fluid col-lg-12"
            src={linea1vector}
            alt="Línea de valores correspondiente a un sistema de producción de ACS usando una caldera alimentada por gas natural."
          />

          <p>
            Esta línea figuraría del siguiente modo en un archivo de{" "}
            <i>VisorEPBD</i>:
          </p>
          <pre>
            GASNATURAL, CONSUMO, EPB, 1886.32, 1702.37, 1901.76, 1824.69,
            1901.93, 1824.97, 1902.28, 1886.36, 1840.89, 1885.9, 1840.88, 1886.2
            # ACS, Caldera ind. gas n_gen=0.85 n_d+e+c=0.88
          </pre>
          <p>
            La interfaz de <i>VisorEPBD</i> permite consultar los valores
            individuales de consumo de cada intervalo de cálculo y modificarlos
            de forma global, pero actualmente es necesario acudir a la edición
            manual de la línea correspondiente del archivo de valores para hacer
            la edición individual de valores.
          </p>

          <h4>
            Introducción de sistemas con aportación de energía del medioambiente
            (bombas de calor)
          </h4>

          <p>
            Algunos sistemas, como las bombas de calor, obtienen energía térmica
            procedente del medioambiente que el edificio consume para
            proporcionar servicios.
          </p>
          <p>
            Por tanto, esa energía puede entenderse bien como una producción{" "}
            <i>in situ</i> del vector <tt>MEDIOAMBIENTE</tt> o de un consumo del
            edificio de dicho vector. Dado que <i>VisorEPBD</i> realiza un
            suministro de la red para aquella energía consumida y no producida{" "}
            <i>in situ</i>, es posible omitir la producción de energía si el
            factor de paso del suministro de ese vector desde la red (ficticia)
            es igual al de su producción (Este criterio es el que se ha adoptado
            en los ejemplos, y por ello no se refleja la producción de energía
            del vector <tt>MEDIOAMBIENTE</tt>.).
          </p>
          <p>
            De ese modo, una bomba de calor que aporte calor al edificio (por
            ejemplo, para el servicio de calefacción o de ACS) se reflejaría en
            el <i>VisorEPBD</i> mediante dos líneas de valores de consumo, una
            del vector energético <tt>MEDIOAMBIENTE</tt> y otra del combustible
            o electricidad que use el sistema. En el caso de que el equipo
            operase en el modo de enfriamiento no se realiza aportación del
            vector <tt>MEDIOAMBIENTE</tt>, sino que se vierte calor del edificio
            al medioambiente, y únicamente figuraría en <i>VisorEPBD</i> el
            consumo de otro vector energético.
          </p>
          <p>
            La siguiente figura muestra las líneas de valores en la interfaz de{" "}
            <i>VisorEPBD</i> correspondientes a la producción de calefacción y
            refrigeración (servicios EPB) por una bomba de calor, alimentada con
            los vectores energéticos <tt>ELECTRICIDAD</tt> y{" "}
            <tt>MEDIOAMBIENTE</tt> en modo calefacción y <tt>ELECTRICIDAD</tt>{" "}
            en el modo refrigeración.
          </p>

          <img
            className="img-fluid col-lg-12"
            src={linea2vectores}
            alt="Líneas de valores correspondientes a una bomba de calor eléctrica para calefacción y refrigeración."
          />

          <p>
            Las líneas del archivo de <i>VisorEPBD</i> correspondientes son:
          </p>
          <pre>
            ELECTRICIDAD, CONSUMO, EPB, 4663.17, 3068.75, 2511.55, 1397.64,
            682.09, 0.0, 0.0, 0.0, 0.0, 380.84, 2550.76, 4482.84 # CALEFACCIÓN,
            BdC ind. aire-agua n_gen=3.0 n_d+e+c=0.95
            <br />
            MEDIOAMBIENTE, CONSUMO, EPB, 9326.34, 6137.5, 5023.1, 2795.28,
            1364.18, 0.0, 0.0, 0.0, 0.0, 761.68, 5101.52, 8965.67 # CALEFACCIÓN,
            BdC ind. aire-agua n_gen=3.0 n_d+e+c=0.95
            <br />
            ELECTRICIDAD, CONSUMO, EPB, 0.0, 0.0, 0.0, 0.0, 0.0, 710.32,
            1894.66, 2156.5, 1217.76, 0.0, 0.0, 0.0 # REFRIGERACIÓN, BdC ind.
            aire-agua n_gen=2.5 n_d+e+c=0.95
          </pre>

          <h4>Introducción de sistemas de cogeneración</h4>

          <p>
            Los sistemas de cogeneración suponen el consumo de un vector
            energético (un combustible, normalmente) para producir energía
            térmica y, simultáneamente, electricidad.
          </p>
          <p>
            Estos sistemas se reflejan en el <i>VisorEPBD</i> mediante dos
            líneas de valores, una de consumo de combustible y otra de
            producción de electricidad.
          </p>
          <p>
            La producción de electricidad usa el vector <tt>ELECTRICIDAD</tt> o
            sus variantes, y, a diferencia de otras producciones <i>in situ</i>,
            cuyo origen es del tipo <tt>INSITU</tt>, su origen es del tipo{" "}
            <tt>COGENERACION</tt>.
          </p>
          <p>
            La energía térmica producida en la cogeneración no figura
            directamente en las líneas de valores puesto que no es un suministro
            al edificio, aunque se emplee en la producción de un servicio o se
            vierta al medioambiente.
          </p>
          <p>
            La siguiente figura muestra las líneas de valores en la interfaz de{" "}
            <i>VisorEPBD</i> correspondientes al servicio de calefacción (EPB)
            con un equipo al que se le suministra el vector energético{" "}
            <tt>GASNATURAL</tt>, con cogeneración de <tt>ELECTRICIDAD</tt>.
          </p>

          <img
            className="img-fluid col-lg-12"
            src={linea3cogen}
            alt="Líneas de valores correspondientes a un equipo de cogeneración alimentado por gas natural."
          />

          <p>
            Las líneas del archivo de <i>VisorEPBD</i> correspondientes son:
          </p>
          <pre>
            GASNATURAL, CONSUMO, EPB, 26848.55, 17668.57, 14460.44, 8047.03,
            3927.19, 0.0, 0.0, 0.0, 0.0, 2192.71, 14686.2, 25810.26 #
            CALEFACCIÓN, Cogeneración GN cen. n_th=0.55 n_el=0.25 n_d+e+c=0.90
            <br />
            ELECTRICIDAD, PRODUCCION, COGENERACION, 6712.14, 4417.14, 3615.11,
            2011.76, 981.8, 0.0, 0.0, 0.0, 0.0, 548.18, 3671.55, 6452.57 #
            CALEFACCIÓN, Cogeneración GN cen. n_th=0.55 n_el=0.25 n_d+e+c=0.90
          </pre>

          <h4>
            Introducción de producción de energía in situ (térmica y eléctrica)
          </h4>

          <p>
            Los sistemas de producción de energía <i>in situ</i>, aparecen en{" "}
            <i>VisorEPBD</i> como líneas del tipo <tt>PRODUCCION</tt> en lugar
            del tipo <tt>CONSUMO</tt>, según su origen sea la cogeneración y
            otro origen, tendrán subtipo <tt>COGENERACION</tt> o <tt>INSITU</tt>
            .
          </p>
          <p>
            Las <b>producciones de energía térmica</b> (en principio, no
            exportables), pueden, con el uso de factores de paso adecuados,
            representarse solamente mediante su consumo, sustituyendo la
            producción por un suministro de una red virtual de suministro cuyos
            factores de paso son iguales a los que resultarían de la producción
            por el medioambiente. Este caso, se mostró en el ejemplo de
            introducción de una bomba de calor, correspondería también al de la
            siguiente figura, de uso de paneles solares térmicos, representado
            también en <i>VisorEPBD</i> como un consumo, dejando implícita la
            producción necesaria para dicho consumo.
          </p>

          <img
            className="img-fluid col-lg-12"
            src={linea4paneltermico}
            alt="Línea de valores correspondiente a la introducción de paneles solares térmicos para el servicio de ACS."
          />

          <p>
            La línea del archivo de <i>VisorEPBD</i> correspondiente es:
          </p>
          <pre>
            MEDIOAMBIENTE, CONSUMO, EPB, 1410.97, 1273.37, 1422.52, 1364.87,
            1422.64, 1365.08, 1422.9, 1411.0, 1376.98, 1410.65, 1376.97, 1410.88
            # ACS, Paneles solares térmicos
          </pre>
          <p>
            En relación a la <b>producción de energía eléctrica</b>, la
            siguiente figura muestra la introducción de paneles solares
            fotovoltaicos. Esta se representa como una producción del vector{" "}
            <tt>ELECTRICIDAD</tt>, que podrá ser consumida por los diversos
            servicios del edificio que precisen consumo de electricidad, o
            exportada a la red.
          </p>
          <p>
            A diferencia de lo que ocurre con la energía térmica procedente del
            medioambiente, cuando esta no se considere exportable, no es posible
            omitir la definición explícita de la producción <i>in situ</i> de
            energía eléctrica, dado que los consumos de electricidad que se
            abastezcan con suministros desde la red se consideran con
            ponderaciones (factores de paso a energía primaria o emisiones)
            distintas a las de la producción de electricidad <i>in situ</i>.
          </p>

          <div className="card card-body alert-info">
            <p>
              {" "}
              Cuando no se considere una red &quot;real&quot; de vector{" "}
              <tt>MEDIOAMBIENTE</tt> de la que importar energía térmica, es
              posible definir una red virtual cuyo suministro tenga la misma
              ponderación que la producción <i>in situ</i> del vector{" "}
              <tt>MEDIOAMBIENTE</tt> y, por tanto, equivalente en términos
              energéticos. Al mismo tiempo, si se considera nula (ponderar a 0)
              la energía exportable, basta con un suministro que atienda
              estrictamente los consumos.
            </p>
            <p>
              En <i>VisorEPBD</i> se han definido dos vectores energéticos
              genéricos <tt>RED1</tt> y <tt>RED2</tt> que permiten, entre otras
              posibilidades, modelar redes de calor o frío.
            </p>
          </div>

          <img
            className="img-fluid col-lg-12"
            src={linea4panelfotovoltaico}
            alt="Línea de valores correspondiente a la producción de electricidad con paneles solares fotovoltaicos."
          />

          <p>
            La línea del archivo <i>VisorEPBD</i> correspondiente es:
          </p>
          <pre>
            MEDIOAMBIENTE, CONSUMO, EPB, 1410.97, 1273.37, 1422.52, 1364.87,
            1422.64, 1365.08, 1422.9, 1411.0, 1376.98, 1410.65, 1376.97, 1410.88
            # ACS, Paneles solares térmicos
          </pre>

          <a id="Uso3" />
          <h3>
            Estimación de la de la energía final a partir de la demanda{" "}
            <ScrollToIndex />
          </h3>
          <h4>Demanda y rendimientos</h4>

          <p>
            Aunque para evaluar un edificio concreto es posible obtener datos de
            energía final mediante medición o simulación energética, resulta
            interesante poder evaluar distintas alternativas de diseño en fases
            previas de diseño y, específicamente, la{" "}
            <b>
              estimación de los consumos de energía final a partir de datos de
              demanda
            </b>{" "}
            y el <b>rendimiento medio de los sistemas</b>.
          </p>
          <p>
            Aunque el rendimiento global de los sistemas se descompone
            habitualmente en tres factores: rendimiento en la generación (&eta;
            <sub>gen</sub>), rendimiento en la distribución (&eta;<sub>dis</sub>
            ), rendimiento en la emisión (&eta;<sub>em</sub>) y rendimiento en
            el control o regulación (&eta;<sub>con</sub>), para los ejemplos de
            este documento se ha considerado suficiente diferenciar dos
            factores, el rendimiento en generación (&eta;<sub>gen</sub>) y el
            combinado de distribución, emisión y control (&eta;<sub>d+e+c</sub>{" "}
            = &eta;
            <sub>dis</sub>·&eta;<sub>em</sub>·&eta;<sub>con</sub>).
          </p>
          <p>
            Así, calculamos el consumo de energía final teniendo en cuenta el
            principio de conservación de la energía (la demanda total se
            abastece mediante las aportaciones procedentes de distintos vectores
            energéticos) y la relación del consumo, C, con la demanda, D, y los
            rendimientos, &eta;:
          </p>
          <p>
            C<sub>ef</sub> = D / (&eta;<sub>gen</sub>·&eta;<sub>dis</sub>·&eta;
            <sub>em</sub>·&eta;<sub>con</sub>).
          </p>
          <p>
            Dado que <i>VisorEPBD</i> permite duplicar líneas de valores y
            escalar dichos valores, podemos con este modelo simplificado evaluar
            distintas alternativas de diseño ligadas a introducción de distintos
            sistemas. A continuación se describen las operaciones necesarias
            para introducir algunos sistemas tipo.
          </p>

          <h4>Ejemplo de caldera de gas natural para calefacción</h4>

          <p>
            A partir de la línea de valores de demanda obtenida, por ejemplo,
            por simulación con sistemas ideales, a la que habremos asignado el
            vector <tt>RED1</tt>:
          </p>

          <img
            className="img-fluid col-lg-12"
            src={ejemplo1gasdemanda}
            alt="Demanda asociada al servicio de calefacción."
          />

          <p>
            El consumo de energía final, de vector <tt>GASNATURAL</tt>, se
            obtiene considerando un rendimiento en generación del 95\% (&eta;
            <sub>gen</sub>=0.95) y del 81\% en distribución emisión y control
            (&eta;<sub>d+e+c</sub>=0.81), que corresponde a escalar los valores
            de demanda por el factor (1 / &eta;<sub>gen</sub>·&eta;
            <sub>d+e+c</sub>
            =1/(0.95· 0.81))
          </p>

          <img
            className="img-fluid col-lg-12"
            src={ejemplo1gasconsumo}
            alt="Consumo obtenido a partir de la demanda de calefacción."
          />

          <p>El consumo total de gas natural es:</p>
          <p>
            C<sub>GASNATURAL</sub> = D / (&eta;<sub>gen</sub>·&eta;
            <sub>d+e+c</sub>) = 24.79 / (0.95· 0.81) = 32.22~kWh/(m^2 an)
          </p>

          <h4>Ejemlo de bomba de calor para calefacción y refrigeración</h4>

          <p>
            Partimos también de la línea de valores de demanda de calefacción y
            refrigeración:
          </p>

          <img
            className="img-fluid col-lg-12"
            src={ejemplo2bdcdemanda}
            alt="Demandas asociadas al servicio de calefacción y refrigeración."
          />

          <p>
            El consumo de energía final está compuesto por consumos de los
            vectores <tt>ELECTRICIDAD</tt> y <tt>MEDIOAMBIENTE</tt>, que se
            obtienen considerando un rendimiento eléctrico en generación de
            calor del 300\% (&eta;<sub>gen</sub>=COP=3.00) y del 250\% en
            refrigeración (&eta;<sub>gen,el</sub>=EER=2.50), así como del 83\%
            en distribución emisión y control (&eta;<sub>d+e+c</sub>=0.83). El
            rendimiento para el vector medioambiente en calefacción es, por
            conservación de la energía (&eta;<sub>gen,ma</sub> = COP / (COP -
            1), no existiendo aportación de energía por el mediambiente en el
            modo de refrigeración.
          </p>

          <img
            className="img-fluid col-lg-12"
            src={ejemplo2bdcconsumo}
            alt="Consumos obtenidos a partir de las demandas de calefacción y refrigeración."
          />

          <p>
            Así, obtenemos los consumos en modo calefacción escalando la demanda
            de calefacción para obtener un consumo del vector{" "}
            <tt>ELECTRICIDAD</tt> y del vector <tt>MEDIOAMBIENTE</tt>:
          </p>
          <p>
            C<sub>ELECTRICIDAD, cal</sub> = D / (COP·&eta;<sub>d+e+c</sub>)=
            9.96~kWh/(m^2 an)
          </p>
          <p>
            C<sub>MEDIOAMBIENTE, cal</sub> = D (COP - 1) / (COP·&eta;
            <sub>d+e+c</sub>)= 19.91~kWh/(m^2 an)
          </p>
          <p>
            y la demanda de refrigeración para obtener el consumo del vector{" "}
            <tt>ELECTRICIDAD</tt>:
          </p>
          <p>
            C<sub>ELECTRICIDAD, cal</sub> = D / (EER·&eta;<sub>d+e+c</sub>)=
            7.12~kWh/(m^2 an)
          </p>

          <h4>
            Ejemplo de cogeneración con gas natural para calefacción y
            producción de electricidad
          </h4>

          <p>
            Partimos de la línea de valores de demanda de calefacción,
            suponiendo que dimensionamos la cogeneración para atender dicho
            servicio:
          </p>

          <img
            className="img-fluid col-lg-12"
            src={ejemplo3cogendemanda}
            alt="Demanda asociada al servicio de calefacción."
          />

          <p>
            El consumo de energía final está compuesto por un consumo del vector{" "}
            <tt>GASNATURAL</tt> y una producción de <tt>ELECTRICIDAD</tt> con
            origen <tt>COGENERACION</tt>, que se obtienen considerando un
            rendimiento térmico en generación de calor del 55\% (&eta;
            <sub>gen,th</sub>=0.55) y del 25\% eléctrico (&eta;<sub>gen,el</sub>
            =0.25), así como del 83\% en distribución emisión y control (&eta;
            <sub>d+e+c</sub>=0.83).
          </p>

          <img
            className="img-fluid col-lg-12"
            src={ejemplo3cogenconsumo}
            alt="Consumo y producción obtenidos a partir de la demanda de calefacción."
          />

          <p>
            Así, obtenemos el consumo de gas (vector <tt>GASNATURAL</tt>) que
            alimenta el equipo de cogeneración escalando la demanda de
            calefacción:
          </p>
          <p>
            C<sub>GASNATURAL</sub> = D / (&eta;<sub>gen,th</sub>·&eta;
            <sub>d+e+c</sub>)= 24.79/(0.55· 0.83) = 54.30~kWh/(m^2 an)
          </p>
          <p>
            La producción eléctrica se obtiene escalando el consumo de{" "}
            <tt>GASNATURAL</tt>:
          </p>
          <p>
            P<sub>ELECTRICIDAD</sub> = C<sub>GASNATURAL</sub> * &eta;
            <sub>gen,el</sub>)= 54.30· 0.25 = 13.58~kWh/(m^2 an)
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default HelpPage;
