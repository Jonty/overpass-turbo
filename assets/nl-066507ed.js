const e={"nav.run":"Uitvoeren","nav.run_tt":"bevraag Overpass API","nav.rerender_tt":"parse de MapCSS en geef de kaart weer","nav.share":"Delen","nav.share_tt":"Permanent geldige doorverwijzing voor deze bevraging aanmaken","nav.export":"Exporteren","nav.export_tt":"meerdere gereedschappen om het verkregen resultaat te exporteren","nav.save":"Opslaan","nav.save_tt":"deze bevraging opslaan","nav.load":"Laden","nav.load_tt":"opgeslagen bevraging of voorbeeld laden","nav.wizard":"Assistent","nav.wizard_tt":"gereedschap dat helpt om bevragingen op te stellen","nav.settings":"Instellingen","nav.settings_tt":"allerlei instellingen","nav.help":"Hulp","nav.help_tt":"hulp en info over programma en data","nav.logout":"Afmelden","nav.logout_tt":"gesynchroniseerd osm-account afmelden","tabs.map":"Kaart","tabs.map_tt":"bekijk resultaat op kaartachtergrond","tabs.data":"Gegevens","tabs.data_tt":"bekijk gegevens","map_controlls.zoom_to_data":"inzoomen op gegevens","map_controlls.localize_user":"Waar bevind ik me?","map_controlls.localize_user_disabled":"uitgeschakeld omdat overpass turbo niet is geladen via https://","map_controlls.select_bbox":"gebied manueel selecteren","map_controlls.select_bbox_disabled":"uitgeschakeld, aangezien deze bevraging geen bbox (gebiedsbegrenzing) nodig heeft.","map_controlls.toggle_wide_map":"Brede/smalle weergave","map_controlls.toggle_data":"zet datalaag aan/uit","map_controlls.suggest_zoom_to_data":"klik hier om de gegevens te bekijken","settings.title":"Instellingen","settings.section.general":"Algemene instellingen","settings.ui_lang":"Taal voor gebruikersinterface","settings.server":"Server","settings.disable_autorepair":"Zet waarschuwing/automatisch herstellen uit wanneer de Overpass API geen zichtbare gegevens teruggeeft. ","settings.section.editor":"Bewerkingssoftware","settings.enable_rich_editor":"Uitgebreide codebewerker inschakelen","settings.enable_rich_editor_expl":"schakel dit uit op mobiele toestellen; vereist herladen van de pagina om effect te hebben","settings.editor_width":"Breedte van de editor","settings.editor_width_expl":'bv. "400px", laat blanco voor standaard',"settings.section.map":"Kaart","settings.tile_server":"Kaarttegelserver","settings.tile_opacity":"Doorzichtigheid van de tegels","settings.tile_opacity_expl":"doorzichtigheid van achtergrond-tegels: 0=doorzichtig ... 1=zichtbaar","settings.show_crosshairs":"Toon een kruis in het midden van de kaart","settings.disable_poiomatic":"Kleine objecten niet weergeven als POI","settings.show_data_stats":"Toon enkele statistieken over geladen en weergegeven data.","settings.section.sharing":"Delen van","settings.include_map_state":"Huidige kaartstatus aan gedeelde doorverwijzingen toevoegen","settings.compression":"Kompressie","settings.section.export":"Exporteren","settings.export_image_scale":"Toon schaalverdeling op geëxporteerde beelden","settings.export_image_attr":"Bronvermelding weergeven op geëxporteerde kaarten","save.title":"Opslaan","save.enter_name":"Voer een naam in voor deze bevraging","load.title":"Laden","load.delete_query":"verwijder deze bevraging","load.saved_queries-local":"Opgeslagen bevragingen (lokaal)","load.saved_queries-osm":"Opgeslagen bevragingen (osm.org)","load.saved_queries-osm-loading":"Bewaarde bevragingen laden van osm.org...","load.saved_queries-osm-error":"Een fout is opgetreden bij het laden van opgeslagen bevragingen vanaf osm.org :(","load.examples":"Voorbeelden","load.no_saved_query":"er werd nog geen bevraging opgeslagen","export.title":"Exporteren","export.download-error":"Export - Fout","export.copy_to_clipboard":"Kopieer deze tekst naar het klembord","export.copy_to_clipboard_success":"Export - Succesvol gekopieerd naar het klembord","export.copy_to_clipboard_success-message":'<span class="export-copy_to_clipboard-content"></span>is gekopieerd naar het klembord',"export.section.map":"Kaart","export.as_png":'als <a id="export-image" href="">png afbeelding</a>',"export.as_interactive_map":'als <a id="export-interactive-map" href="">Interactieve Kaart</a>',"export.current_map_view":'huidige <a id="export-map-state" href="">kaart weergave</a>',"export.map_view_expl":"bbox, midden, enz...","export.section.data":"Gegevens","export.generic_download_copy":'<div class="field-label is-normal"><span class="format"></span></div><div class="field-body"><span class="buttons has-addons"><a class="export button is-small is-link is-outlined" title="saves the exported data as a file">download</a><a class="copy button is-small is-link is-outlined" title="copies export output to clipboard">kopieer</a></span></div>',"export.raw_data":"ruwe OSM-gegevens","export.raw_interpreter":'ruwe gegevens rechtstreeks van <a id="export-overpass-api" href="" target="_blank" class="external">Overpass API</a>',"export.save_geoJSON_gist":'bewaar GeoJSON in <a id="export-geoJSON-gist" href="" class="external">gist</a>',"export.section.query":"Bevraging","export.format_text":`<abbr title="For direct use with the Overpass API, has expanded shortcuts and doesn't include additional overpass turbo features such as MapCSS.">alleenstaande bevraging</abbr>`,"export.format_text_raw":'<abbr title="Unaltered overpass turbo query – just as in the code editor">ruwe bevraging</abbr>',"export.format_text_wiki":'<abbr title="For usage in the OSM wiki as a OverpassTurboExample-Template">osm wiki</abbr>',"export.format_text_umap":'<abbr title="For usage with umap.openstreetmap.fr">umap</abbr>externe gegevens url',"export.to_xml":'omzetten naar <a id="export-convert-xml" href="" target="_blank" class="external">Overpass-XML</a>',"export.to_ql":'omzetten naar (<a id="export-convert-compact" href="" target="_blank" class="external">compact</a>) <a id="export-convert-ql" href="" target="_blank" class="external">OverpassQL</a>',"export.editors":"gegevens in een OSM-editor laden:","export.geoJSON.title":"Exporteer als GeoJSON","export.geoJSON.expl":"De getoonde data als GeoJSON:","export.geoJSON.no_data":"Geen GeoJSON gegevens beschikbaar! Voer a.u.b. eerst een bevraging uit.","export.geoJSON_gist.title":"Opgeslagen als gist","export.geoJSON_gist.gist":"Gist:","export.geoJSON_gist.geojsonio":"Bewerken met geojson.io","export.geoJSON_gist.geojsonio_link":"geojson.io","export.GPX.title":"Exporteren - GPX","export.GPX.expl":"De huidige getoonde gegevens als GPX:","export.GPX.no_data":"Geen GPX gegevens beschikbaar! Voer a.u.b. eerst een bevraging uit.","export.KML.title":"Exporteren - KML","export.KML.expl":"De huidige getoonde gegevens als KML:","export.KML.no_data":"Geen KML gegevens beschikbaar! Voer a.u.b. eerst een bevraging uit.","export.raw.title":"Exporteren - ruw","export.raw.no_data":"Geen ruwe gegevens beschikbaar! Voer a.u.b. eerst een bevraging uit.","export.map_view.title":"Huidige kaartweergave","export.map_view.permalink":"Permalink","export.map_view.permalink_osm":"naar osm.org","export.map_view.center":"Midden","export.map_view.center_expl":"breedte, lengte","export.map_view.bounds":"Grenzen","export.map_view.bounds_selection":"Grenzen (handmatig geselecteerde bbox)","export.map_view.bounds_expl":"zuid, west, noord, oost","export.map_view.zoom":"Zoom","export.image.title":"Exporteren - beeldbestand","export.image.alt":"de geëxporteerde kaart","export.image.download":"Download","export.image.attribution_missing":"Zorg voor het bijvoegen van de juiste attributies bij het verspreiden van deze afbeelding!","share.title":"Deel","share.header":"Permalink","share.copy_this_link":'Kopieer deze <a href="" id="share_link_a">doorverwijzing</a> om de huidige code te delen:',"share.options":"Opties","share.incl_map_state":"Huidige kaartstatus bijvoegen","share.run_immediately":"Deze bevraging meteen na het laden uitvoeren","help.title":"Hulp","help.section.introduction":"Inleiding","help.intro.0":'Dit is <i>overpass turbo</i>, een web-gebaseerd gegevens filter gereedschap voor <a href="http://www.openstreetmap.org">OpenStreetMap</a>.',"help.intro.1":'Met overpass turbo kan u <a href="http://wiki.openstreetmap.org/wiki/Overpass_API">Overpass API</a> bevragingen uitvoeren en de daaruit voortkomende OSM-gegevens interactief analyseren op een kaart.',"help.intro.1b":'Er is een geïntegreerde <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard">Wizard</a> die het samenstellen van bevragingen super makkelijk maakt.',"help.intro.2":'Meer informatie over <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo">overpass turbo</a> en hoe je  <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">Overpass bevragingen</a> schrijft, kan je in de OSM wiki vinden.',"help.section.queries":"Overpass bevragingen","help.queries.expl":'Overpass API allows to query for OSM data by your own search criteria. For this purpose, it has a specifically crafted <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">query language</a>.',"help.intro.shortcuts":"Naast de reguliere Overpass API bevragingen kan je de volgende handige snelkoppelingen gebruiken in overpass turbo:","help.intro.shortcuts.bbox":"bounding box coordinates of the current map view","help.intro.shortcuts.center":"map center coordinates","help.intro.shortcuts.date":"ISO 8601 date-time-string a certain time interval ago (e.g. “24 hours”)","help.intro.shortcuts.style":'defines a <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/MapCSS">MapCSS stylesheet</a>',"help.intro.shortcuts.custom":"Arbitrary shortcuts can be defined by putting <i>{{shortcut=value}}</i> somewhere in the script.","help.intro.shortcuts.more":'More overpass-turbo shortcuts, additional information about the above and usage examples can be found in the <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Extended_Overpass_Queries">OSM wiki</a>.',"help.section.ide":"IDE","help.ide.share.title":"Delen van","help.ide.share.expl":"It is possible to send a permalink with the query you are currently working on to someone else. This is found in the <i>Share</i> tool and shows you a link which you can send to a friend or post online. (Note that others will work on their own copy of the query.)","help.ide.save_load.title":"Opslaan en Laden","help.ide.save_load.expl":"You can also save and load your queries. For a start, there are a few example queries preloaded. Take a look at them for a short glimpse of what overpass can do.","help.ide.keyboard.title":"Toetsenbordsneltoetsen","help.ide.keyboard.run":"Huidige bevraging uitvoeren","help.ide.keyboard.wizard":"Start de bevragings-assistent","help.ide.keyboard.load_save":"Laden (open) / een bevraging opslaan","help.ide.keyboard.help":"Hulp weergeven","help.section.key":"Legende","help.key.example":"Allerlei kaart elementen","help.key.description":"Ways are shown as bold blue lines, Polygons as yellow areas with a thin blue outline, POIs (nodes with tags) as yellow circles with a thin blue outline. Circles with a red filling stand for polygons or ways that are too small to be displayed normally. Pink lines or outlines mean, that an object is part of at least one (loaded) relation. Dashed lines mean that a way or polygon has incomplete geometry (most likely because some of its nodes have not been loaded).","help.section.export":"Exporteren","help.export":'The <i>Export</i> tool holds a variety of options to do with the query and/or data loaded by the query.<br />Options with this symbol:<span class="ui-icon ui-icon-extlink" style="display:inline-block;"></span> rely on or refer to external (online) tools.',"help.export.query_data.title":"Bevraging / Gegevens","help.export.query_data.expl":"This holds some things you can do with the raw query or data, like converting the query between the various query languages or exporting the data as geoJSON. A very useful option is the possibility to send the query to JOSM.","help.export.map.title":"Kaart","help.export.map.expl":"Convert the current map-with-data view to a static png image, or a (fullscreen) interactive map, etc.","help.section.about":"Over","help.about.maintained":"<i>overpass turbo</i> wordt onderhouden door Martin Raifer (tyr.asd at gmail.com).","help.about.feedback.title":"Terugkoppeling, melding van problemen en voorstellen","help.about.feedback":'If you would like to give feedback, report issues or ask for a particular feature, please use the <a href="https://github.com/tyrasd/overpass-turbo/issues">issue tracker</a> on github or the <a href="http://wiki.openstreetmap.org/wiki/Talk:Overpass_turbo">discussion page</a> on the OSM-wiki.',"help.about.source.title":"Broncode","help.about.source":'De <a href="https://github.com/tyrasd/overpass-turbo">broncode</a> van deze applicatie is vrijgegeven onder de MIT <a href="LICENSE">licensie</a>.',"help.section.attribution":"Bronvermelding","help.attr.data_sources":"Databronnen","help.attr.data":'Gegevens &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a>-bijdragers, <span style="font-size:smaller;"><a href="http://opendatacommons.org/licenses/odbl/1-0/">ODbL</a> (<a href="http://www.openstreetmap.org/copyright">Voorwaarden</a>)</span>',"help.attr.mining":"Datamining door","help.attr.tiles":'Kaarttegels &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a>-bijdragers',"help.attr.search":"Search provided by","help.attr.software":"Software & bibliotheken","help.attr.leaflet":"Kaart aangemaakt met","help.attr.codemirror":"Editor powered by","help.attr.other_libs":"Andere bibliotheken:","ffs.title":"Bevragings-assistent","ffs.comments":"add query comments","ffs.placeholder":"Zoek","ffs.expl":'The <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">wizard</a> assists you with creating Overpass queries. Here are some usage examples:',"ffs.parse_error":"Sorry, this search cannot be understood.","ffs.parse_error_expl":'Note that you must use quotation marks with strings containing spaces or special characters and that multiple search filters must be separated by appropriate boolean operators (<i>and</i> or <i>or</i>). Read the <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">documentation</a> for more information.',"ffs.typo":"Bedoelde u:","dialog.dismiss":"afwijzen","dialog.cancel":"annuleren","dialog.save":"opslaan","dialog.save-local":"opslaan (lokaal)","dialog.save-osm":"opslaan op osm.org","dialog.delete":"verwijder","dialog.close":"sluiten","dialog.done":"klaar","dialog.abort":"afbreken","dialog.reset":"reset","dialog.repair_query":"repair query","dialog.continue_anyway":"toch doorgaan","dialog.show_data":"Gegevens weergeven","dialog.wizard_build":"Maak bevraging","dialog.wizard_run":"build and run query","dialog.delete_query.title":"Query verwijderen?","dialog.delete_query.expl":"Wenst u de onderstaand bevraging echt te verwijderen","dialog.delete_query.expl-osm":"Wilt u de onderstaande bevraging echt verwijderen","error.query.title":"Fout in de query","error.query.expl":"Een fout is opgetreden tijdens het uitvoeren van de overpassbevraging! Dit is wat overpass API heeft gevonden:","error.ajax.title":"Ajax foutmelding","error.ajax.expl":"An error occurred during the execution of the overpass query!","error.mapcss.title":"MapCSS-fout","error.mapcss.expl":"Ongeldige MapCSS stylesheet:","error.remote.title":"Afstandsbediening fout","error.remote.incompat":"Fout: incompatibele JOSM-versie voor doorgeven data","error.remote.not_found":"Afstandsbediening niet gevonden. :( Zorg dat JOSM al opgestart werd en dat hij correct geconfigureerd is.","error.nominatim.title":"Nominatim foutmelding","error.nominatim.expl":"Kan niks vinden met de volgende naam: ","warning.browser.title":"Uw browser wordt niet ondersteund :(","warning.browser.expl.1":'The browser you are currently using, is (most likely) not capable of running (significant parts of) this Application. <small>It must support <a href="http://en.wikipedia.org/wiki/Web_storage#localStorage">Web Storage API</a> and <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">cross origin resource sharing (CORS)</a>.</small>',"warning.browser.expl.2":'Note that you may have to enable cookies and/or "local Data" for this site on some browsers (such as Firefox and Chrome).',"warning.browser.expl.3":'Please upgrade to a more up-to-date version of your browser or switch to a more capable one! Recent versions of <a href="http://www.opera.com">Opera</a>, <a href="http://www.google.com/intl/de/chrome/browser/">Chrome</a> and <a href="http://www.mozilla.org/de/firefox/">Firefox</a> have been tested to work. Alternatively, you can still use the <a href="http://overpass-api.de/query_form.html">Overpass_API query form</a>.',"warning.incomplete.title":"Incomplete data","warning.incomplete.expl.1":"This query returned no nodes. In OSM, only nodes contain coordinates. For example, a way cannot be displayed without its nodes.","warning.incomplete.expl.2":'If this is not what you meant to get, <i>overpass turbo</i> can help you to repair (auto-complete) the query by choosing "repair query" below. Otherwise you can continue to the data.',"warning.incomplete.not_again":"Deze boodschap niet meer weergeven","warning.incomplete.remote.expl.1":"It looks like if this query will not return OSM data in XML format with metadata. Editors like JOSM require the data to be in that format, though.","warning.incomplete.remote.expl.2":'<i>overpass turbo</i> can help you to correct the query by choosing "repair query" below.',"warning.share.long":"Warning: This share-link is quite long. It may not work under certain circumstances","warning.share.very_long":"Waarschuwing: Deze doorverwijzing is bijzonder lang. In de meeste gevallen zal deze niet ondersteund worden in webbrowsers en servers.","warning.huge_data.title":"Grote hoeveelheden gegevens","warning.huge_data.expl.1":"Het resultaat van deze bevraging bevat erg veel gegevens (ongeveer {{amount_txt}}).","warning.huge_data.expl.2":"Your browser may have a hard time trying to render this. Do you really want to continue?","waiter.processing_query":"bevraging aan het verwerken...","waiter.export_as_image":"uitvoer als beeldbestand","data_stats.loaded":"Geladen","data_stats.displayed":"Getoond","data_stats.nodes":"knopen","data_stats.ways":"wegdelen","data_stats.relations":"relaties","data_stats.areas":"gebieden","data_stats.pois":"Interessepunten","data_stats.lines":"lijnen","data_stats.polygons":"polygonen","data_stats.request_duration":"Overpass request took","data_stats.lag":"Currentness of data","data_stats.lag_areas":"Currentness of areas","data_stats.lag.expl":"behind main OSM db","popup.tags":"Tags","popup.metadata":"Metadata","popup.coordinates":"Coordinates","popup.node":"Node","popup.nodes":"Nodes","popup.way":"Way","popup.ways":"Ways","popup.relation":"Relation","popup.relations":"Relations","popup.incomplete_geometry":"Attention: incomplete geometry (e.g. some nodes missing)","map.intentionally_blank":"Deze kaart is met opzet leeg gelaten."};export{e as default};
