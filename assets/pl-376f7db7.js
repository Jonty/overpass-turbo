const e={"nav.run":"Uruchom","nav.run_tt":"uruchom tę kwerendę na Overpass API","nav.rerender_tt":"parse the MapCSS and rerender the map","nav.share":"Udostępnij","nav.share_tt":"Link do tej kwerendy","nav.export":"Eksport","nav.export_tt":"różne narzędzia do eksportu","nav.save":"Zapisz","nav.save_tt":"zapisz tę kwerendę","nav.load":"Załaduj","nav.load_tt":"załaduj zapisaną kwerendę lub przykład","nav.wizard":"Kreator","nav.wizard_tt":"kreator kwerend","nav.settings":"Ustawienia","nav.settings_tt":"różne ustawienia","nav.help":"Pomoc","nav.help_tt":"pomoc, informacje","nav.logout":"Wyloguj się","nav.logout_tt":"wyloguj się z aktualnie zsynchronizowanego konta OSM","tabs.map":"Mapa","tabs.map_tt":"widok mapy","tabs.data":"Dane","tabs.data_tt":"widok danych","map_controlls.zoom_to_data":"przybliż widok do danych","map_controlls.localize_user":"zlokalizuj mnie!","map_controlls.localize_user_disabled":"wyłączone, ponieważ overpass turbo nie załadowano protokołem https://","map_controlls.select_bbox":"ręcznie zaznacz bbox","map_controlls.select_bbox_disabled":"wyłączone, ponieważ obecna kwerenda nie wymaga bboxa","map_controlls.toggle_wide_map":"przełącz szeroki widok mapy","map_controlls.toggle_data":"przełącz nakładkę z danymi","map_controlls.suggest_zoom_to_data":"kliknij, aby wyświetlić dane","settings.title":"Ustawienia","settings.section.general":"Główne ustawienia","settings.ui_lang":"Język interfejsu","settings.server":"Serwer","settings.disable_autorepair":"Wyłącz ostrzeżenie / komunikat o automatycznej naprawie, kiedy Overpass API nie zwróci danych nadających się do wyświetlenia.","settings.section.editor":"Edytor","settings.enable_rich_editor":"Włącz zaawansowany edytor kodu","settings.enable_rich_editor_expl":"wyłącz tę opcję na urządzeniach mobilnych; wymaga odświeżenia strony","settings.editor_width":"Szerokość edytora","settings.editor_width_expl":'np. "400px"; wartość domyślna, jeśli puste',"settings.section.map":"Mapa","settings.tile_server":"Serwer kafelków mapy","settings.tile_opacity":"Przezroczystość kafelków mapy","settings.tile_opacity_expl":"przezroczystość tła: 0=przezroczyste … 1=widoczne","settings.show_crosshairs":"Pokaż kursor na środku mapy","settings.disable_poiomatic":"Nie wyświetlaj małych obiektów jako POI.","settings.show_data_stats":"Pokaż statystyki dotyczące załadowanych i wyświetlonych danych.","settings.section.sharing":"Udostępnianie","settings.include_map_state":"Dołącz aktualny widok mapy w udostępnianych linkach","settings.compression":"Kompresja","settings.section.export":"Eksport","settings.export_image_scale":"Umieść skalę na eksportowanych obrazach.","settings.export_image_attr":"Umieść atrybucję na eksportowanych obrazach.","save.title":"Zapisz","save.enter_name":"Wprowadź nazwę kwerendy","load.title":"Załaduj","load.delete_query":"skasuj tę kwerendę","load.saved_queries-local":"Zapisane kwerendy (lokalne)","load.saved_queries-osm":"Zapisane kwerendy (osm.org)","load.saved_queries-osm-loading":"Ładowanie zapisanych kwerend z osm.org...","load.saved_queries-osm-error":"Wystąpił błąd podczas ładowania zapisanych kwerend z osm.org :(","load.examples":"Przykłady","load.no_saved_query":"nie ma zapisanych kwerend","export.title":"Eksport","export.download-error":"Eksport – Błąd","export.copy_to_clipboard":"Kopiuj ten tekst do schowka","export.copy_to_clipboard_success":"Eksport – Skopiowano do schowka","export.copy_to_clipboard_success-message":'<span class="export-copy_to_clipboard-content"></span> zostało skopiowane do schowka',"export.section.map":"Mapa","export.as_png":'jako <a id="export-image" href="">obraz PNG</a>',"export.as_interactive_map":'jako <a id="export-interactive-map" href="">mapa interaktywna</a>',"export.current_map_view":'obecny <a id="export-map-state" href="">widok mapy</a>',"export.map_view_expl":"bbox, center itp.","export.section.data":"Dane","export.generic_download_copy":'<div class="field-label is-normal"><span class="format"></span></div><div class="field-body"><span class="buttons has-addons"><a class="export button is-small is-link is-outlined" title="zapisuje wyeksportowane dane jako plik">pobierz</a><a class="copy button is-small is-link is-outlined" title="kopiuje zawartość eksportu do schowka">kopiuj</a></span></div>',"export.raw_data":"surowe dane OSM","export.raw_interpreter":'surowe dane bezpośrednio z <a id="export-overpass-api" href="" target="_blank" class="external">Overpass API</a>',"export.save_geoJSON_gist":'zapisz GeoJSON do <a id="export-geoJSON-gist" href="" class="external">gist</a>',"export.section.query":"Kwerenda","export.format_text":'<abbr title="Do bezpośredniego użycia z interfejsem Overpassa, ma rozszerzone skróty i nie zawiera dodatkowych funkcji overpass turbo, takich jak MapCSS.">niezależne zapytanie</abbr>',"export.format_text_raw":'<abbr title="Niezmienione zapytanie overpass turbo – tak jak w edytorze kodu">surowe zapytanie</abbr>',"export.format_text_wiki":'<abbr title="Do używania w wiki OSM jako przykładowy szablon OverpassTurbo">osm wiki</abbr>',"export.format_text_umap":'<abbr title="Do użycia z umap.openstreetmap.fr">umap</abbr> remote data url',"export.to_xml":'konwertuj do <a id="export-convert-xml" href="" target="_blank" class="external">Overpass-XML</a>',"export.to_ql":'konwertuj do (<a id="export-convert-compact" href="" target="_blank" class="external">kompaktowego</a>) <a id="export-convert-ql" href="" target="_blank" class="external">OverpassQL</a>',"export.editors":"załaduj dane do edytora OSM:","export.geoJSON.title":"Eksport – GeoJSON","export.geoJSON.expl":"Obecnie wyświetlone dane w formacie GeoJSON:","export.geoJSON.no_data":"Brak dostępnych danych GeoJSON! Uruchom najpierw kwerendę.","export.geoJSON_gist.title":"Zapisano jako gist","export.geoJSON_gist.gist":"Gist:","export.geoJSON_gist.geojsonio":"Edytuj w geojson.io:","export.geoJSON_gist.geojsonio_link":"geojson.io","export.GPX.title":"Eksport – GPX","export.GPX.expl":"Obecnie wyświetlone dane w formacie GPX:","export.GPX.no_data":"Brak dostępnych danych GPX! Uruchom najpierw kwerendę.","export.KML.title":"Eksport – KML","export.KML.expl":"Obecnie wyświetlone dane w formacie KML:","export.KML.no_data":"Brak dostępnych danych KML! Uruchom najpierw kwerendę.","export.raw.title":"Eksport – surowe dane","export.raw.no_data":"Brak dostępnych danych! Uruchom najpierw kwerendę.","export.map_view.title":"Aktualny widok mapy","export.map_view.permalink":"Link do udostępnienia","export.map_view.permalink_osm":"do osm.org","export.map_view.center":"Środek","export.map_view.center_expl":"szer., dł.","export.map_view.bounds":"Granice","export.map_view.bounds_selection":"Granice (ręcznie zaznaczony bbox)","export.map_view.bounds_expl":"południe, zachód, północ, wschód","export.map_view.zoom":"Poziom przybliżenia","export.image.title":"Eksport – obraz","export.image.alt":"wyeksportowana mapa","export.image.download":"Pobieranie","export.image.attribution_missing":"Upewnij się, czy rozpowszechniany obraz zawiera prawidłową informację o źródle!","share.title":"Udostępnij","share.header":"Link do udostępnienia","share.copy_this_link":'Skopiuj ten <a href="" id="share_link_a">link</a>, żeby udostępnić bieżący kod:',"share.options":"Opcje","share.incl_map_state":"dołącz obecny widok mapy","share.run_immediately":"uruchom tę kwerendę od razu po załadowaniu","help.title":"Pomoc","help.section.introduction":"Wprowadzenie","help.intro.0":'To jest <i>overpass turbo</i>, internetowa aplikacja służąca do filtrowania danych <a href="http://www.openstreetmap.org">OpenStreetMap</a>.',"help.intro.1":'Poprzez overpass turbo możesz uruchamiać kwerendy <a href="http://wiki.openstreetmap.org/wiki/Overpass_API">Overpass API</a> i analizować zwrócone dane OSM na interaktywnej mapie.',"help.intro.1b":'Do twojej dyspozycji jest zintegrowany <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard">Kreator</a>, dzięki któremu tworzenie kwerend jest bardzo proste.',"help.intro.2":'Więcej informacji na temat <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo">overpass turbo</a> i jak pisać <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">kwerendy Overpass</a>, można znaleźć na wiki OSM.',"help.section.queries":"Kwerendy Overpass","help.queries.expl":'Overpass API pozwala wykonywać kwerendy na danych OSM według zadanych kryteriów wyszukiwania. W tym celu posługuje się specjalnie zaprojektowanym <a href="http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL">językiem kwerend</a>.',"help.intro.shortcuts":"Oprócz zwykłej składni Overpass API overpass turbo oferuje następujące przydatne skróty:","help.intro.shortcuts.bbox":"współrzędne graniczne aktualnego widoku mapy","help.intro.shortcuts.center":"współrzędne środka mapy","help.intro.shortcuts.date":'wstawia stempel czasowy ISO 8601 cofnięty o pewien okres (np. "24 hours")',"help.intro.shortcuts.style":'definiuje <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/MapCSS">arkusz stylów MapCSS</a>',"help.intro.shortcuts.custom":"Dowolne skróty można definiować, umieszczając <i>{{skrót=wartość}}</i> w treści skryptu.","help.intro.shortcuts.more":'Więcej skrótów, dodatkowe informacje o nich i przykłady ich użycia na <a href="http://wiki.openstreetmap.org/wiki/Overpass_turbo/Extended_Overpass_Queries">OSM wiki</a>.',"help.section.ide":"Edytor","help.ide.share.title":"Udostępnianie","help.ide.share.expl":"Możesz wysłać komuś link do kwerendy, nad którą aktualnie pracujesz. Opcję tę umożliwia narzędzie <i>Udostępnij</i> pokazujące link, który możesz wysłać znajomemu lub zamieścić w sieci (zauważ, że inni będą pracowali na własnej kopii kwerendy).","help.ide.save_load.title":"Zapisz i załaduj","help.ide.save_load.expl":"Możesz także zapisywać i ładować kwerendy. Kilka przykładowych kwerend zostało zapisanych domyślnie. Przejrzyj je, jeśli chcesz zapoznać się pokrótce z możliwościami overpass turbo.","help.ide.keyboard.title":"Skróty klawiszowe:","help.ide.keyboard.run":"Uruchom bieżącą kwerendę.","help.ide.keyboard.wizard":"Uruchom kreator kwerend.","help.ide.keyboard.load_save":"Załaduj (otwórz) / Zapisz kwerendę.","help.ide.keyboard.help":"Otwiera to okno pomocy.","help.section.key":"Legenda mapy","help.key.example":"różne obiekty na mapie","help.key.description":"Linie są wyświetlane jako grube niebieskie linie, wielokąty jako żółte obszary z cienkim niebieskim konturem, POI (węzły z tagami) jako żółte koła z cienkim niebieskim konturem. Koła z czerwonym wypełnieniem to wielokąty lub linie, które są za małe, aby je wyświetlić normalnie. Różowe linie lub kontury oznaczają, że obiekt jest członem przynajmniej jednej (załadowanej) relacji. Przerywane linie oznaczają, że linia lub obszar mają niekompletną geometrię (najczęściej dlatego, że niektóre z ich węzłów nie zostały załadowane).","help.section.export":"Eksport","help.export":'Narzędzie <i>Eksportuj</i> pozwala wykonać różne operacje na kwerendzie lub danych przez nią zwracanych.<br />Opcje z tym symbolem:<span class="ui-icon ui-icon-extlink" style="display:inline-block;"></span> polegają na lub odnoszą się do zewnętrznych narzędzi (online).',"help.export.query_data.title":"Kwerenda / Dane","help.export.query_data.expl":"Tutaj znajduje się kilka rzeczy, które można wykonać na tekście kwerendy lub danych, takich jak konwersja kwerendy między różnymi językami lub eksport danych w formacie GeoJSON. Bardzo przydatną opcją jest możliwość wysłania kwerendy do edytora JOSM.","help.export.map.title":"Mapa","help.export.map.expl":"Konwertuj obecny widok mapy do statycznego obrazu PNG lub (pełnoekranowej) interaktywnej mapy itd.","help.section.about":"O projekcie","help.about.maintained":"<i>overpass turbo</i> jest rozwijany przez: Martin Raifer (tyr.asd w domenie gmail.com).","help.about.feedback.title":"Zgłoszenia błędów, prośby","help.about.feedback":'Jeśli chcesz wyrazić opinię, zgłosić problemy lub poprosić o jakąś funkcję, użyj <a href="https://github.com/tyrasd/overpass-turbo/issues">systemu obsługi zgłoszeń</a> na GitHubie lub <a href="http://wiki.openstreetmap.org/wiki/Talk:Overpass_turbo">strony dyskusji</a> na wiki OSM.',"help.about.source.title":"Kod źródłowy","help.about.source":'<a href="https://github.com/tyrasd/overpass-turbo">Kod źródłowy</a> tej aplikacji jest udostępniony na <a href="LICENSE">licencji</a> MIT.',"help.section.attribution":"Atrybucja","help.attr.data_sources":"Źródła danych","help.attr.data":'Dane: &copy; autorzy <a href="http://openstreetmap.org/">OpenStreetMap</a>, <span style="font-size:smaller;"><a href="http://opendatacommons.org/licenses/odbl/1-0/">ODbL</a> (<a href="http://www.openstreetmap.org/copyright">Warunki</a>)</span>',"help.attr.mining":"Dane wyciągane za pomocą","help.attr.tiles":'Kafelki mapowe: &copy; autorzy <a href="http://openstreetmap.org/">OpenStreetMap</a>',"help.attr.search":"Wyszukiwanie obsługiwane przez","help.attr.software":"Software i biblioteki","help.attr.leaflet":"Mapa obsługiwana przez","help.attr.codemirror":"Edytor:","help.attr.other_libs":"Pozostałe biblioteki:","ffs.title":"Kreator kwerend","ffs.comments":"add query comments","ffs.placeholder":"szukaj","ffs.expl":'<a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">Kreator</a> pomaga tworzyć kwerendy Overpass. Oto kilka przykładów użycia:',"ffs.parse_error":"To wyrażenie wyszukiwania jest niezrozumiałe.","ffs.parse_error_expl":'W przypadku ciągów znaków zawierających spacje lub znaki specjalne należy użyć cudzysłowów, ponadto kolejne filtry wyszukiwania muszą być rozdzielone odpowiednimi operatorami logicznymi (<i>and</i> lub <i>or</i>). Więcej informacji można znaleźć w <a href="https://wiki.openstreetmap.org/wiki/Overpass_turbo/Wizard" target="_blank">dokumentacji</a>.',"ffs.typo":"Czy miałeś na myśli:","dialog.dismiss":"ignoruj","dialog.cancel":"anuluj","dialog.save":"zapisz","dialog.save-local":"zapisz (lokalnie)","dialog.save-osm":"zapisz na osm.org","dialog.delete":"usuń","dialog.close":"zamknij","dialog.done":"zrobione","dialog.abort":"przerwij","dialog.reset":"reset","dialog.repair_query":"napraw kwerendę","dialog.continue_anyway":"kontynuuj mimo wszystko","dialog.show_data":"pokaż dane","dialog.wizard_build":"stwórz kwerendę","dialog.wizard_run":"stwórz i uruchom kwerendę","dialog.delete_query.title":"Skasować kwerendę?","dialog.delete_query.expl":"Czy na pewno chcesz skasować następującą kwerendę","dialog.delete_query.expl-osm":"Na pewno chcesz usunąć tę zsynchronizowaną kwerendę?","error.query.title":"Błąd kwerendy","error.query.expl":"Podczas wykonwywania kwerendy Overpass wystąpił błąd. Oto treść komunikatu zwrócona przez Overpass API:","error.ajax.title":"Błąd AJAX-a","error.ajax.expl":"Podczas wykonywania kwerendy Overpass nastąpił błąd!","error.mapcss.title":"Błąd MapCSS","error.mapcss.expl":"Nieprawidłowy arkusz stylów MapCSS:","error.remote.title":"Błąd zdalnego sterowania","error.remote.incompat":"Błąd: niekompatybilna wersja zdalnego sterowania JOSM","error.remote.not_found":"Nie znaleziono zdalnego sterowania :( Upewnij się, że JOSM jest uruchomiony i poprawnie skonfigurowany.","error.nominatim.title":"Błąd Nominatima","error.nominatim.expl":"Nie można znaleźć obiektu o takiej nazwie:","warning.browser.title":"Twoja przeglądarka nie jest obsługiwana :(","warning.browser.expl.1":'Przeglądarka, której obecnie używasz, najpewniej nie jest w stanie obsłużyć dużej części tej aplikacji. <small>Musi ona wspierać <a href="http://en.wikipedia.org/wiki/Web_storage#localStorage">Web Storage API</a> oraz <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">Cross-origin resource sharing (CORS)</a>.</small>',"warning.browser.expl.2":"Aby ta strona działała na niektórych przeglądarkach (takich jak Firefox czy Chrome), może okazać się konieczne włączenie ciasteczek i/lub danych lokalnych.","warning.browser.expl.3":`Prosimy o aktualizację przeglądarki do nowszej wersji lub użycie innej przeglądarki o większych możliwościach! Najnowsze wersje <a href="http://www.opera.com">Opery</a>, <a href="http://www.google.com/intl/pl/chrome/browser/">Chrome'a</a> i <a href="http://www.mozilla.org/pl/firefox/">Firefoxa</a>zostały przetestowane pod kątem działania. W innym wypadku możesz wciąż użyć <a href="http://overpass-api.de/query_form.html">formularza kwerendy Overpass API</a>.`,"warning.incomplete.title":"Niekompletne dane","warning.incomplete.expl.1":"Ta kwerenda nie zwróciła węzłów. W OSM tylko węzły posiadają współrzędne geograficzne. Przykładowo, nie da się wyświetlić linii bez jej węzłów.","warning.incomplete.expl.2":'Jeśli to nie jest to, o co ci chodziło, <i>overpass turbo</i> może pomóc ci naprawić (automatycznie skompletować) kwerendę poprzez wybór opcji "napraw kwerendę" poniżej. W innym wypadku możesz kontynuować i przejść do danych.',"warning.incomplete.not_again":"nie pokazuj ponownie tej wiadomości","warning.incomplete.remote.expl.1":"Wygląda na to, że ta kwerenda nie zwróci danych OSM w formacie XML z metadanymi. Edytory takie jak JOSM wymagają danych w tym formacie.","warning.incomplete.remote.expl.2":'<i>overpass turbo</i> może pomóc ci poprawić kwerendę po wybraniu opcji "napraw kwerendę" poniżej.',"warning.share.long":"Uwaga: ten link do udostępnienia jest długi. Może on nie działać w pewnych warunkach.","warning.share.very_long":"Uwaga: ten link do udostępnienia jest bardzo długi. Najpewniej nie zadziała on w normalnych warunkach (przeglądarki, serwery). Używaj ostrożnie!","warning.huge_data.title":"Duża ilość danych","warning.huge_data.expl.1":"Ta kwerenda zwróciła dużą ilość danych (ok. {{amount_txt}}).","warning.huge_data.expl.2":"Twoja przeglądarka może mieć kłopoty z wyświetleniem danych. Czy na pewno chcesz kontynuować?","waiter.processing_query":"przetwarzanie kwerendy...","waiter.export_as_image":"eksportowanie jako obraz...","data_stats.loaded":"Załadowano","data_stats.displayed":"Wyświetlono","data_stats.nodes":"węzłów","data_stats.ways":"linii","data_stats.relations":"relacji","data_stats.areas":"obszarów","data_stats.pois":"poi","data_stats.lines":"linii","data_stats.polygons":"wielokątów","data_stats.request_duration":"Overpass request took","data_stats.lag":"Aktualność danych","data_stats.lag_areas":"Aktualność obszarów","data_stats.lag.expl":"za główną bazą OSM","popup.tags":"Tags","popup.metadata":"Metadata","popup.coordinates":"Coordinates","popup.node":"Node","popup.nodes":"Nodes","popup.way":"Way","popup.ways":"Ways","popup.relation":"Relation","popup.relations":"Relations","popup.incomplete_geometry":"Attention: incomplete geometry (e.g. some nodes missing)","map.intentionally_blank":"Celowo pozostawiono pustą mapę."};export{e as default};
