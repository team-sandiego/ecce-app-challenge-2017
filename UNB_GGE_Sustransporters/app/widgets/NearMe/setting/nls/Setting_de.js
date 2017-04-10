// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/NearMe/setting/nls/strings":{units:{miles:{displayText:"Meilen",acronym:"mi"},kilometers:{displayText:"Kilometer",acronym:"km"},feet:{displayText:"Fu\u00df",acronym:"ft"},meters:{displayText:"Meter",acronym:"m"}},searchSourceSetting:{searchSourceSettingTabTitle:"Konfiguration der Suchquellen",searchSourceSettingTitle:"Konfiguration der Suchquellen",searchSourceSettingTitleHintText:"F\u00fcgen Sie Geokodierungsservices oder Feature-Layer als Suchquellen hinzu, und konfigurieren Sie sie. Anhand dieser angegebenen Quellen wird bestimmt, welche Elemente im Suchfeld durchsucht werden k\u00f6nnen.",
addSearchSourceLabel:"Suchquelle hinzuf\u00fcgen",featureLayerLabel:"Feature-Layer",geocoderLabel:"Geocoder",nameTitle:"Name",generalSettingLabel:"Allgemeine Einstellung",allPlaceholderLabel:"Platzhaltertext f\u00fcr die Suche in allen Quellen:",allPlaceholderHintText:"Hinweis: Geben Sie den Platzhaltertext f\u00fcr die Suche in allen Layern und Geocodern ein.",generalSettingCheckboxLabel:"Pop-up f\u00fcr das gefundene Feature oder die gefundene Position anzeigen",countryCode:"L\u00e4nder- oder Regionscode(s)",
countryCodeEg:"z. B. ",countryCodeHint:"Wenn dieser Wert leer gelassen wird, werden alle L\u00e4nder und Regionen durchsucht.",questionMark:"?",searchInCurrentMapExtent:"Nur in der aktuellen Kartenausdehnung suchen",zoomScale:"Zoom-Ma\u00dfstab",locatorUrl:"Geocoder-URL",locatorName:"Geocoder-Name",locatorExample:"Beispiel",locatorWarning:"Diese Version des Geokodierungsservice wird nicht unterst\u00fctzt. Das Widget unterst\u00fctzt Geokodierungsservices der Version 10.0 und h\u00f6her.",locatorTips:"Es sind keine Vorschl\u00e4ge verf\u00fcgbar, da der Geokodierungsservice die Vorschlagsfunktion nicht unterst\u00fctzt.",
layerSource:"Layer-Quelle",setLayerSource:"Layer-Quelle festlegen",setGeocoderURL:"Geocoder-URL festlegen",searchLayerTips:"Es sind keine Vorschl\u00e4ge verf\u00fcgbar, da der Feature-Service die Paginierungsfunktion nicht unterst\u00fctzt.",placeholder:"Platzhaltertext",searchFields:"Suchfelder",displayField:"Anzeigefeld",exactMatch:"Exakte \u00dcbereinstimmung",maxSuggestions:"Maximale Anzahl von Vorschl\u00e4gen",maxResults:"Maximale Anzahl von Ergebnissen",enableLocalSearch:"Lokale Suche aktivieren",
minScale:"Min. Ma\u00dfstab",minScaleHint:"Wenn der Kartenma\u00dfstab gr\u00f6\u00dfer ist als dieser Ma\u00dfstab, wird die lokale Suche angewendet.",radius:"Radius",radiusHint:"Erm\u00f6glicht die Festlegung des Radius einer Fl\u00e4che um den aktuellen Kartenmittelpunkt, der dazu dient, die Rangfolge von Geokodierungskandidaten zu optimieren. Die Kandidaten, die der Position am n\u00e4chsten liegen, werden auf diese Weise zuerst ausgegeben.",meters:"Meter",setSearchFields:"Suchfelder festlegen",
set:"Festlegen",fieldName:"Name",invalidUrlTip:"Die URL ${URL} ist ung\u00fcltig oder es kann nicht darauf zugegriffen werden."},searchSetting:{searchSettingTabTitle:"Sucheinstellungen",defaultBufferDistanceLabel:"Standardpufferabstand festlegen",maxResultCountLabel:"Anzahl der Ergebnisse beschr\u00e4nken",maxResultCountHintLabel:"Hinweis: Legen Sie die maximale Anzahl der angezeigten Ergebnisse fest. Mit dem Wert 1 wird das n\u00e4chstgelegene Feature zur\u00fcckgegeben.",maxBufferDistanceLabel:"Maximalen Pufferabstand festlegen",
bufferDistanceUnitLabel:"Pufferabstandseinheiten",defaultBufferHintLabel:"Hinweis: Standardwert f\u00fcr den Pufferschieberegler festlegen",maxBufferHintLabel:"Hinweis: Maximalwert f\u00fcr den Pufferschieberegler festlegen",bufferUnitLabel:"Hinweis: Definiert die Einheit f\u00fcr die Erstellung des Puffers",selectGraphicLocationSymbol:"Symbol f\u00fcr Adresse oder Position",graphicLocationSymbolHintText:"Hinweis: Symbol f\u00fcr gesuchte Adresse oder aktivierte Position",fontColorLabel:"Schriftfarbe f\u00fcr Suchergebnisse ausw\u00e4hlen",
fontColorHintText:"Hinweis: Schriftfarbe f\u00fcr Suchergebnisse",zoomToSelectedFeature:"Auf das ausgew\u00e4hlte Feature zoomen",zoomToSelectedFeatureHintText:"Hinweis: Es wird auf das ausgew\u00e4hlte Feature statt auf den Puffer gezoomt.",intersectSearchLocation:"Sich schneidende(s) Polygon(e) zur\u00fcckgeben",intersectSearchLocationHintText:"Hinweis: Es werden  Polygone zur\u00fcckgegeben, die die gesuchte Position enthalten, anstatt Polygone innerhalb des Puffers.",bufferVisibilityLabel:"Puffersichtbarkeit festlegen",
bufferVisibilityHintText:"Hinweis: Der Puffer wird auf der Karte angezeigt.",bufferColorLabel:"Puffersymbol festlegen",bufferColorHintText:"Hinweis: W\u00e4hlen Sie die Farbe und die Transparenz des Puffers aus.",searchLayerResultLabel:"Nur ausgew\u00e4hlte Layer-Ergebnisse darstellen",searchLayerResultHint:"Hinweis: Nur der ausgew\u00e4hlte Layer in den Suchergebnissen wird auf der Karte dargestellt.",showToolToSelectLabel:'Schaltfl\u00e4che "Position festlegen"',showToolToSelectHintText:"Hinweis: Stellt eine Schaltfl\u00e4che zum Festlegen der Position auf der Karte bereit, statt die Position bei jedem Klicken auf die Karte festzulegen.",
geoDesicParamLabel:"Geod\u00e4tischen Puffer verwenden",geoDesicParamHintText:"Hinweis: Verwenden Sie den geod\u00e4tischen Puffer statt des euklidischen Puffers (planar)."},layerSelector:{selectLayerLabel:"Such-Layer(s) ausw\u00e4hlen",layerSelectionHint:'Hinweis: Verwenden Sie die Schaltfl\u00e4che "Festlegen", um Layer auszuw\u00e4hlen.',addLayerButton:"Festlegen"},routeSetting:{routeSettingTabTitle:"Wegbeschreibungseinstellungen",routeServiceUrl:"Routing-Service",buttonSet:"Festlegen",routeServiceUrlHintText:'Hinweis: Klicken Sie auf "Festlegen", um einen Routing-Service zu durchsuchen und auszuw\u00e4hlen.',
directionLengthUnit:"L\u00e4ngeneinheiten f\u00fcr Wegbeschreibung",unitsForRouteHintText:"Hinweis: Wird zum Anzeigen von Einheiten f\u00fcr die Route verwendet",selectRouteSymbol:"Symbol zum Anzeigen der Route ausw\u00e4hlen",routeSymbolHintText:"Hinweis: Wird zum Anzeigen des Liniensymbols der Route verwendet",routingDisabledMsg:"Um Wegbeschreibungen zu aktivieren, m\u00fcssen Sie sicherstellen, dass Routen im ArcGIS Online-Element aktiviert sind."},networkServiceChooser:{arcgislabel:"Aus ArcGIS Online hinzuf\u00fcgen",
serviceURLabel:"Service-URL hinzuf\u00fcgen",routeURL:"Routen-URL",validateRouteURL:"\u00dcberpr\u00fcfen",exampleText:"Beispiel",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"Geben Sie einen g\u00fcltigen Routen-Service an.",rateLimitExceeded:"Daten\u00fcbertragungsrate \u00fcberschritten. Versuchen Sie es sp\u00e4ter erneut.",errorInvokingService:"Falscher Benutzername oder falsches Kennwort."},
errorStrings:{bufferErrorString:"Geben Sie einen g\u00fcltigen numerischen Wert ein.",selectLayerErrorString:"W\u00e4hlen Sie den/die zu durchsuchenden Layer aus.",invalidDefaultValue:"Der Standardpufferabstand darf nicht leer sein. Geben Sie den Pufferabstand an.",invalidMaximumValue:"Der maximale Pufferabstand darf nicht leer sein. Geben Sie den Pufferabstand an.",defaultValueLessThanMax:"Geben Sie den Standardpufferabstand innerhalb der maximalen Grenzwerte an.",defaultBufferValueGreaterThanOne:"Standard-Pufferabstand kann nicht weniger als 1 sein.",
maximumBufferValueGreaterThanOne:"Geben Sie f\u00fcr den maximalen Pufferabstand einen Wert gr\u00f6\u00dfer als 1 an.",invalidMaximumResultCountValue:"Geben Sie einen g\u00fcltigen Wert f\u00fcr maximale Ergebnisanzahl an.",invalidSearchSources:"Ung\u00fcltige Suchquelleneinstellungen"},symbolPickerPreviewText:"Vorschau:",_localized:{}}});