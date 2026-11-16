/*
 * CM BCLinnk – Tambalan tampilan mobile (hanya berlaku di dalam aplikasi)
 * File ini disisipkan otomatis oleh aplikasi Android & iOS ke setiap halaman cm.bclinnk.com.
 */
(function () {
  var h = (window.location && window.location.hostname) || '';
  if (h && !/bclinnk\.com|bookandlink\.com/i.test(h)) return;
  if (window.__bclPatchLoaded) return;
  window.__bclPatchLoaded = true;

  var CSS = `
/* ============ TAMBALAN CSS MOBILE CM BCLinnk ============ */
@media (max-width: 767px) {
  /* 1. Rapatkan baris atas header: hamburger + logo di baris pertama */
  header.main-header > .row:first-of-type {
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: center !important;
    padding: 8px 10px !important;
    margin: 0 !important;
  }
  /* Kolom kiri: hamburger + logo berdampingan */
  header.main-header > .row:first-of-type > .col-xs-4 {
    width: 100% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: flex-start !important;
    padding: 0 4px 6px 4px !important;
    float: none !important;
  }
  header.main-header > .row:first-of-type > .col-xs-4 > nav.navbar {
    width: auto !important;
    min-height: 0 !important;
    margin: 0 10px 0 0 !important;
    display: inline-flex !important;
    align-items: center !important;
  }
  header.main-header > .row:first-of-type > .col-xs-4 > nav.navbar .sidebar-toggle {
    padding: 8px 10px !important;
    margin: 0 !important;
  }
  /* Perbaiki logo BCLinnk yang terpotong (aslinya terkunci width:130px overflow:hidden) */
  header.main-header .logo {
    width: auto !important;
    max-width: 180px !important;
    height: auto !important;
    overflow: visible !important;
    float: none !important;
    padding: 0 !important;
    margin: 0 !important;
    display: inline-flex !important;
    align-items: center !important;
  }
  header.main-header .logo .logo-lg {
    display: inline-flex !important;
    align-items: center !important;
  }
  header.main-header .logo img {
    width: auto !important;
    max-width: 155px !important;
    max-height: 36px !important;
    height: auto !important;
    object-fit: contain !important;
    margin: 0 !important;
  }

  /* 2. Kolom tombol kanan atas: full width di baris kedua & tampilkan 4 tombol yang hilang */
  header.main-header > .row:first-of-type > .header-button {
    width: 100% !important;
    float: none !important;
    padding: 4px 2px 2px 2px !important;
    margin: 0 !important;
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 4px !important;
    text-align: left !important;
    position: relative !important;
  }
  /* Tampilkan kembali 4 tombol notifikasi/status yang disembunyikan oleh .hidden-xs */
  header.main-header .header-button > .btn-group.hidden-xs {
    display: inline-block !important;
  }
  /* Perkecil sedikit padding tombol header agar 7 tombol muat rapi 1 baris di layar HP */
  header.main-header .header-button > .btn-group > .btn,
  header.main-header .header-button > .dropdown > .btn {
    padding: 5px 7px !important;
    font-size: 12px !important;
    line-height: 1.2 !important;
  }
  header.main-header .header-button .badge {
    padding: 2px 5px !important;
    font-size: 10px !important;
  }

  /* 3. Agar popup dropdown notifikasi tidak keluar batas layar HP */
  header.main-header .header-button > .btn-group,
  header.main-header .header-button > .dropdown {
    position: static !important;
  }
  header.main-header .header-button .dropdown-menu {
    left: 4px !important;
    right: 4px !important;
    width: auto !important;
    max-width: calc(100vw - 20px) !important;
  }

  /* 4. Rapikan baris biru pemilih property di bawahnya */
  header.main-header > .row.visible-xs {
    margin: 0 !important;
    padding: 8px 10px !important;
    display: flex !important;
    align-items: center !important;
  }

  /* 5. Property Settings -> Features & Services (ul.features li aslinya dikunci width: 600px) */
  ul.features {
    padding-left: 8px !important;
    padding-right: 4px !important;
    margin: 0 !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
  ul.features > li {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    padding-left: 44px !important;
    padding-right: 4px !important;
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
  }
  ul.features > li > div {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
  }
  ul.features input[type="text"],
  .divbox input[type="text"] {
    max-width: 100% !important;
    box-sizing: border-box !important;
  }
  .divbox input[type="text"][style*="360px"] {
    width: 100% !important;
    height: 30px !important;
    margin-top: 4px !important;
  }
  /* Peta di tab Location agar tidak keluar batas layar (aslinya width: 500px) */
  #mapCanvas {
    width: 100% !important;
    max-width: 100% !important;
  }

  /* 6. Settings -> Rooms & Rates (#droppable-rooms): turunkan tombol ke bawah judul kamar */
  #droppable-rooms .panel-heading {
    flex-wrap: wrap !important;
    padding: 10px 12px !important;
    height: auto !important;
  }
  #droppable-rooms .panel-heading .panel-title {
    flex: 1 1 calc(100% - 36px) !important;
    margin-left: 8px !important;
    line-height: 1.4 !important;
  }
  #droppable-rooms .panel-heading .custom_buttons {
    position: static !important;
    width: 100% !important;
    height: auto !important;
    margin: 8px 0 0 0 !important;
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 6px !important;
    float: none !important;
  }
  #droppable-rooms .panel-heading .custom_buttons > a {
    margin-right: 0 !important;
  }
  /* Sub-item Rateplan di dalam Room */
  #droppable-rooms .sortable-rateplans > li > div {
    display: flex !important;
    flex-direction: column !important;
    gap: 6px !important;
    padding: 4px 0 !important;
  }
  #droppable-rooms .sortable-rateplans > li > div > div.pull-right {
    position: static !important;
    float: none !important;
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 4px !important;
    width: 100% !important;
  }

  /* 7. Settings -> Booking Policy (#policity_val_info & .acceptc1) */
  #policity_val_info .table-responsive {
    border: 0 !important;
    overflow-x: auto !important;
  }
  table.bkplcy,
  table.bkplcy > tbody,
  table.bkplcy > tbody > tr,
  table.bkplcy > tbody > tr > td {
    display: block !important;
    width: 100% !important;
    white-space: normal !important;
    box-sizing: border-box !important;
  }
  table.bkplcy > tbody > tr > td:empty {
    display: none !important;
  }
  table.bkplcy > tbody > tr > td {
    padding: 4px 6px !important;
  }
  table.thrd {
    width: 100% !important;
  }
  table.thrd td label {
    white-space: normal !important;
    font-size: 12px !important;
  }
  table.acceptc1,
  table.acceptc1 > tbody,
  table.acceptc1 > tbody > tr,
  table.acceptc1 > tbody > tr > td {
    display: block !important;
    width: 100% !important;
    max-width: 100% !important;
    white-space: normal !important;
    box-sizing: border-box !important;
  }
  table.acceptc1 > tbody > tr {
    padding: 8px 0 !important;
    border-bottom: 1px dashed #e0e0e0 !important;
  }
  table.acceptc1 > tbody > tr > td {
    padding: 4px 0 !important;
  }
  table.acceptc1 input[type="text"],
  table.acceptc1 select:not(.Guest_checkin):not(.Guest_checkout),
  #policity_val_info textarea {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
  }

  /* 8. Channel Manager -> Monthly Deals (#monthly-deals) & Yearly Deals (#cm-yearly) */
  .sticky-top2,
  .sticky-top2.sticky-top {
    position: relative !important;
    top: 0 !important;
    z-index: 1 !important;
  }
  .main-sidebar,
  .left-side {
    z-index: 1050 !important;
  }
  .main-header {
    z-index: 1060 !important;
  }

  /* 8a. Monthly Deals: Rapikan tombol Bulk Update, tab atas, form Availability/Submit/Clear Selection, dan scroll tabel kalender */
  #monthly-deals ul#Updates,
  #cm-yearly ul#Updates {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 6px !important;
    border: none !important;
    background: transparent !important;
    margin-bottom: 10px !important;
  }
  #monthly-deals ul#Updates::before,
  #monthly-deals ul#Updates::after,
  #cm-yearly ul#Updates::before,
  #cm-yearly ul#Updates::after,
  #cm-yearly ul#myTab::before,
  #cm-yearly ul#myTab::after,
  #monthly-deals .sticky-top2 .filter_class > .row:nth-of-type(2)::before,
  #monthly-deals .sticky-top2 .filter_class > .row:nth-of-type(2)::after {
    display: none !important;
    content: none !important;
  }
  #monthly-deals ul#Updates > li,
  #cm-yearly ul#Updates > li {
    display: block !important;
    width: 100% !important;
    margin: 0 !important;
  }
  #monthly-deals ul#Updates > li > a,
  #cm-yearly ul#Updates > li > a {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    height: 100% !important;
    min-height: 38px !important;
    padding: 8px 8px !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    text-align: center !important;
    border-radius: 6px !important;
    border: 1px solid #d2d6de !important;
    margin: 0 !important;
  }
  #monthly-deals ul#Updates > li.active > a,
  #cm-yearly ul#Updates > li.active > a {
    background-color: #3c8dbc !important;
    color: #fff !important;
    border-color: #3c8dbc !important;
  }

  #monthly-deals .sticky-top2 .filter_class {
    padding: 10px !important;
    border-radius: 8px !important;
  }
  #monthly-deals .sticky-top2 .filter_class > .row:nth-of-type(2) {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
    margin: 0 !important;
  }
  #monthly-deals .sticky-top2 .filter_class > .row:nth-of-type(2) > div:not([class]) {
    display: contents !important;
  }
  #monthly-deals .sticky-top2 .filter_class > .row:nth-of-type(2) > .col-sm-5,
  #monthly-deals .sticky-top2 .filter_class > .row:nth-of-type(2) > .col-sm-4 {
    flex: 1 1 calc(50% - 4px) !important;
    max-width: calc(50% - 4px) !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  #monthly-deals .sticky-top2 .filter_class .form-group {
    margin-bottom: 0 !important;
  }
  #monthly-deals .sticky-top2 .filter_class #selection,
  #monthly-deals .sticky-top2 .filter_class #usr {
    width: 100% !important;
    height: 38px !important;
    margin: 0 !important;
    padding: 6px 10px !important;
    box-sizing: border-box !important;
    border-radius: 6px !important;
  }
  #monthly-deals .sticky-top2 .filter_class > .row:nth-of-type(2) > .col-sm-3,
  #monthly-deals .sticky-top2 .filter_class > .row:nth-of-type(2) > div:not([class]) > .col-sm-4 {
    flex: 1 1 calc(50% - 4px) !important;
    max-width: calc(50% - 4px) !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  #monthly-deals .sticky-top2 .filter_class .submit_values,
  #monthly-deals .sticky-top2 .filter_class .reset_dates {
    width: 100% !important;
    height: 38px !important;
    margin: 0 !important;
    padding: 6px 10px !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    border-radius: 6px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  #monthly-deals .sticky-top2 .filter_class > .row:nth-of-type(2) > div:not([class]) > .col-sm-8 {
    flex: 1 1 100% !important;
    max-width: 100% !important;
    padding: 4px 2px 0 2px !important;
    margin: 0 !important;
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: center !important;
    gap: 6px 8px !important;
    font-size: 12px !important;
  }
  #monthly-deals .sticky-top2 .filter_class .select_day {
    margin: 0 2px 0 4px !important;
  }

  /* Perbaiki tabel kalender Monthly Deals agar bisa digeser mentok sampai ujung kanan */
  #monthly-deals #myTabContent {
    width: 100% !important;
    max-width: 100% !important;
    overflow-x: hidden !important;
  }
  #monthly-deals #myTabContent > table,
  #monthly-deals #myTabContent > table > tbody,
  #monthly-deals #myTabContent > table > tbody > tr {
    display: flex !important;
    width: 100% !important;
    max-width: 100% !important;
  }
  #monthly-deals #myTabContent > table > tbody > tr > td:first-child {
    flex: 0 0 125px !important;
    width: 125px !important;
    max-width: 125px !important;
    overflow: hidden !important;
  }
  #monthly-deals table.left_table {
    width: 125px !important;
    max-width: 125px !important;
  }
  #monthly-deals table.left_table .dynamic_height2 td,
  #monthly-deals table.left_table td {
    width: auto !important;
    max-width: 125px !important;
    white-space: normal !important;
    word-break: break-word !important;
  }
  #monthly-deals table.left_table > tbody > tr:first-child > td > .col-sm-12 {
    padding: 0 4px !important;
  }
  #monthly-deals table.left_table #monthselection {
    padding: 4px 4px !important;
    font-size: 11.5px !important;
    height: 32px !important;
  }
  #monthly-deals #myTabContent > table > tbody > tr > td:nth-child(2) {
    flex: 1 1 calc(100% - 125px) !important;
    width: calc(100% - 125px) !important;
    max-width: calc(100% - 125px) !important;
    min-width: 0 !important;
    overflow: hidden !important;
  }
  #monthly-deals #tableContainer.dhx_cal_data {
    width: 100% !important;
    max-width: 100% !important;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch !important;
    touch-action: pan-x pan-y !important;
    box-sizing: border-box !important;
  }

  /* 8b. Yearly Deals (#cm-yearly): Rapikan 6 sub-tab (#myTab) dan tabel kontrol Seasons/Dates/Update (table.seldest1) */
  #cm-yearly ul#myTab {
    display: grid !important;
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    gap: 6px !important;
    padding: 8px !important;
    background: #f4f6f9 !important;
    border: 1px solid #dce1e7 !important;
    border-radius: 8px !important;
    margin-bottom: 12px !important;
  }
  #cm-yearly ul#myTab > li {
    display: block !important;
    width: 100% !important;
    margin: 0 !important;
  }
  #cm-yearly ul#myTab > li > a {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 8px 4px !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    text-align: center !important;
    border-radius: 6px !important;
    background: #fff !important;
    color: #444 !important;
    border: 1px solid #dce1e7 !important;
    margin: 0 !important;
  }
  #cm-yearly ul#myTab > li.active > a {
    background: #3c8dbc !important;
    color: #fff !important;
    border-color: #3c8dbc !important;
  }

  #cm-yearly .table-responsive:has(> table.seldest1) {
    border: none !important;
    overflow-x: visible !important;
    margin-bottom: 8px !important;
  }
  #cm-yearly table.seldest1:not(#All table.seldest1),
  #cm-yearly table.seldest1:not(#All table.seldest1) > tbody {
    display: block !important;
    width: 100% !important;
  }
  #cm-yearly table.seldest1:not(#All table.seldest1) > tbody > tr:first-child {
    display: none !important;
  }
  #cm-yearly table.seldest1:not(#All table.seldest1) > tbody > tr:nth-child(2) {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
    background: #f8f9fa !important;
    border: 1px solid #dce1e7 !important;
    border-radius: 8px !important;
    padding: 10px !important;
  }
  #cm-yearly table.seldest1:not(#All table.seldest1) > tbody > tr:nth-child(2) > td {
    display: block !important;
    background: #fff !important;
    border: 1px solid #e5e7eb !important;
    border-radius: 6px !important;
    padding: 10px !important;
    box-sizing: border-box !important;
  }
  #cm-yearly table.seldest1:not(#All table.seldest1) > tbody > tr:nth-child(2) > td:nth-child(1),
  #cm-yearly table.seldest1:not(#All table.seldest1) > tbody > tr:nth-child(2) > td:nth-child(2) {
    flex: 1 1 100% !important;
    width: 100% !important;
  }
  #cm-yearly table.seldest1:not(#All table.seldest1) > tbody > tr:nth-child(2) > td:nth-child(3) {
    flex: 0 0 105px !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
  }
  #cm-yearly table.seldest1:not(#All table.seldest1) > tbody > tr:nth-child(2) > td:nth-child(4) {
    flex: 1 1 calc(100% - 115px) !important;
  }
  .bcl-seldest-label {
    font-size: 12px !important;
    font-weight: 700 !important;
    color: #1f2937 !important;
    margin-bottom: 6px !important;
    padding-bottom: 4px !important;
    border-bottom: 1px solid #f0f0f0 !important;
  }
  #cm-yearly table.seldest1 td select {
    width: 100% !important;
    height: 34px !important;
    padding: 4px 8px !important;
    border: 1px solid #ccc !important;
    border-radius: 4px !important;
    margin-bottom: 4px !important;
  }
  #cm-yearly table.seldest1 td input[type="text"] {
    width: 100% !important;
    height: 34px !important;
    padding: 4px 8px !important;
    border: 1px solid #ccc !important;
    border-radius: 4px !important;
    box-sizing: border-box !important;
    margin-bottom: 6px !important;
  }
  #cm-yearly table.seldest1 td input[type="button"] {
    width: 100% !important;
    height: 34px !important;
    border-radius: 5px !important;
    font-weight: 600 !important;
    font-size: 12px !important;
  }
  #cm-yearly table.seldest1 td:nth-child(3) input[type="button"] {
    background: #6b7280 !important;
    color: #fff !important;
    border: none !important;
  }
  #cm-yearly table.seldest1 td br + br {
    display: none !important;
  }
  #cm-yearly table.seldest1 td a {
    display: inline-block !important;
    margin: 2px 0 6px 0 !important;
    font-weight: 600 !important;
    font-size: 12px !important;
  }
  #cm-yearly table.seldest1 td .d-flex {
    width: 100% !important;
  }
  #cm-yearly #tableContainer.viewport {
    width: calc(100vw - 95px) !important;
    max-width: calc(100vw - 95px) !important;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch !important;
  }

  /* 9. Channel Manager -> Control Panel (tab Settings, Mapping, Assignments, dll.) */
  .tab-pane .user .table-responsive > div[style*="width:50%"],
  .tab-pane .user .table-responsive > table[style*="width:50%"],
  .tab-pane #user {
    width: 100% !important;
    max-width: 100% !important;
  }
  .tab-pane .user .table-responsive > div[style*="width:50%"] button {
    white-space: normal !important;
    width: 100% !important;
    padding: 8px 12px !important;
  }
  .tab-pane #user td {
    white-space: normal !important;
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
    vertical-align: middle !important;
  }
  .tab-pane #user td a[style*="float: right"] {
    margin-right: 4px !important;
  }
  #ota_room td,
  #ota_map td,
  #ota_assign td {
    white-space: normal !important;
    word-break: break-word !important;
  }
  #iframeContainer {
    width: 100% !important;
    max-width: 100% !important;
  }

  /* 10. Channel Manager -> Connected Channels (#otas-list):
     Susun 4 kolom OTA menjadi grid 2 kolom per baris agar tidak terpotong */
  #otas-list > table.table,
  #otas-list > table.table > tbody {
    display: block !important;
    width: 100% !important;
    border: none !important;
  }
  #otas-list > table.table > tbody > tr {
    display: flex !important;
    flex-wrap: wrap !important;
    width: 100% !important;
    height: auto !important;
  }
  #otas-list > table.table > tbody > tr:first-child > td {
    flex: 1 1 100% !important;
    width: 100% !important;
    border: 1px solid #ddd !important;
  }
  #otas-list > table.table > tbody > tr:not(:first-child) > td {
    flex: 0 0 50% !important;
    max-width: 50% !important;
    box-sizing: border-box !important;
    border: 1px solid #eee !important;
    padding: 10px 6px !important;
  }
  #otas-list > table.table > tbody > tr > td img {
    max-width: 120px !important;
    max-height: 48px !important;
    width: auto !important;
    height: auto !important;
    object-fit: contain !important;
  }

  /* 11. Channel Manager -> Rate Multiplier:
     Form atas (Travel Agent / Rule / % / Save) & tabel daftar Rate Multiplier (#basicTable) */
  section.content .table-responsive:has(#externalsite) {
    border: none !important;
    overflow-x: visible !important;
  }
  section.content table:has(#externalsite),
  section.content table:has(#externalsite) > tbody {
    display: block !important;
    width: 100% !important;
  }
  section.content table:has(#externalsite) > thead {
    display: none !important;
  }
  section.content table:has(#externalsite) > tbody > tr:first-child {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
    align-items: center !important;
    background: #f8f9fa !important;
    padding: 10px !important;
    border: 1px solid #e0e0e0 !important;
    border-radius: 6px !important;
  }
  section.content table:has(#externalsite) > tbody > tr:first-child > td {
    display: flex !important;
    align-items: center !important;
    gap: 6px !important;
    padding: 0 !important;
  }
  section.content table:has(#externalsite) > tbody > tr:first-child > td:nth-child(1),
  section.content table:has(#externalsite) > tbody > tr:first-child > td:nth-child(2) {
    flex: 1 1 calc(50% - 4px) !important;
  }
  section.content table:has(#externalsite) > tbody > tr:first-child > td:nth-child(1) select,
  section.content table:has(#externalsite) > tbody > tr:first-child > td:nth-child(2) select {
    width: 100% !important;
    height: 34px !important;
    border: 1px solid #ccc !important;
    border-radius: 4px !important;
  }
  section.content table:has(#externalsite) > tbody > tr:first-child > td:nth-child(3) {
    flex: 1 1 60% !important;
  }
  section.content table:has(#externalsite) > tbody > tr:first-child > td:nth-child(3) input {
    width: 90px !important;
    height: 34px !important;
    padding: 4px 8px !important;
    border: 1px solid #ccc !important;
    border-radius: 4px !important;
  }
  section.content table:has(#externalsite) > tbody > tr:first-child > td:nth-child(4) {
    flex: 0 0 auto !important;
    margin-left: auto !important;
  }
  section.content table:has(#externalsite) > tbody > tr:first-child > td:nth-child(4) input[type="button"] {
    background: #2563eb !important;
    color: #fff !important;
    border: none !important;
    border-radius: 4px !important;
    padding: 7px 18px !important;
    font-weight: bold !important;
  }
  .table-container:has(#basicTable) {
    width: 100% !important;
    max-width: 100% !important;
  }
  #basicTable td {
    vertical-align: middle !important;
  }
  #basicTable td:nth-child(3) {
    white-space: nowrap !important;
  }
  #basicTable td:nth-child(3) a {
    display: inline-flex !important;
    align-items: center !important;
    vertical-align: middle !important;
    margin-right: 6px !important;
  }
  #basicTable td:nth-child(3) #ajax_update {
    float: none !important;
    display: inline-block !important;
    vertical-align: middle !important;
  }

  /* 12. Channel Manager -> OTA Rooms Allocation (table.room_status):
     Proporsi 5 kolom pas 100% layar agar kolom Action & tombol Update tidak terpotong */
  .table-responsive:has(table.room_status) {
    border: none !important;
    overflow-x: visible !important;
  }
  table.room_status {
    width: 100% !important;
    table-layout: fixed !important;
  }
  table.room_status th,
  table.room_status td {
    padding: 6px 4px !important;
    font-size: 11.5px !important;
    white-space: normal !important;
    word-break: normal !important;
    overflow-wrap: break-word !important;
    vertical-align: middle !important;
  }
  table.room_status td:nth-child(1) {
    overflow-wrap: anywhere !important;
  }
  table.room_status th:nth-child(1),
  table.room_status td:nth-child(1) {
    width: 19% !important;
  }
  table.room_status th:nth-child(2),
  table.room_status td:nth-child(2) {
    width: 25% !important;
  }
  table.room_status th:nth-child(3),
  table.room_status td:nth-child(3) {
    width: 18% !important;
  }
  table.room_status th:nth-child(4),
  table.room_status td:nth-child(4) {
    width: 19% !important;
    text-align: center !important;
  }
  table.room_status th:nth-child(5),
  table.room_status td:nth-child(5) {
    width: 19% !important;
    text-align: center !important;
  }
  table.room_status select.form-control {
    width: 100% !important;
    min-width: 0 !important;
    height: 30px !important;
    padding: 2px 4px !important;
    font-size: 12px !important;
  }
  table.room_status .button_update {
    width: 100% !important;
    padding: 5px 4px !important;
    font-size: 11px !important;
    white-space: nowrap !important;
  }

  /* 13. Channel Manager -> Connectivity Requests (#validate_input):
     Proporsi 3 kolom pas 100% layar agar kolom Action & tombol Send Request tidak terpotong */
  .table-responsive:has(#validate_input) {
    border: none !important;
    overflow-x: visible !important;
  }
  #validate_input {
    width: 100% !important;
    table-layout: fixed !important;
  }
  #validate_input th,
  #validate_input td {
    white-space: normal !important;
    vertical-align: middle !important;
    padding: 8px 6px !important;
  }
  #validate_input tr > th:nth-child(1) {
    width: 22% !important;
    font-size: 12.5px !important;
    overflow-wrap: break-word !important;
  }
  #validate_input tr > th:nth-child(2) {
    width: 48% !important;
  }
  #validate_input tr > th:nth-child(3) {
    width: 30% !important;
    text-align: center !important;
  }
  #validate_input tbody tr > th:nth-child(1) > label,
  #validate_input tbody tr > th:nth-child(3) > label {
    display: none !important;
  }
  #validate_input tbody tr > th:nth-child(2) .col-sm-6 {
    padding: 0 !important;
    width: 100% !important;
    margin-bottom: 6px !important;
  }
  #validate_input tbody tr > th:nth-child(2) .col-sm-6:last-child {
    margin-bottom: 0 !important;
  }
  #validate_input tbody tr > th:nth-child(2) label {
    font-size: 11.5px !important;
    margin-bottom: 3px !important;
    display: block !important;
    white-space: normal !important;
  }
  #validate_input tbody tr > th:nth-child(2) input.form-control {
    width: 100% !important;
    height: 32px !important;
    padding: 4px 8px !important;
    font-size: 12px !important;
    box-sizing: border-box !important;
  }
  #validate_input tbody tr > th:nth-child(3) .send_email {
    width: 100% !important;
    padding: 7px 6px !important;
    font-size: 11.5px !important;
    white-space: normal !important;
    line-height: 1.25 !important;
  }

  /* 14. Channel Manager -> Full Synchro Auto (#searchresult_tbl):
     Tampilkan seluruh 7 kolom (termasuk Message & Checked) pas 100% layar */
  .table-responsive:has(#searchresult_tbl .update_status) {
    border: none !important;
    overflow-x: visible !important;
  }
  #searchresult_tbl:has(.update_status) {
    width: 100% !important;
    table-layout: fixed !important;
  }
  #searchresult_tbl:has(.update_status) thead td::after,
  #searchresult_tbl:has(.update_status) thead th::after {
    display: none !important;
    content: none !important;
  }
  #searchresult_tbl:has(.update_status) thead td {
    padding: 6px 1px !important;
    font-size: 9.5px !important;
    white-space: normal !important;
    word-break: normal !important;
    overflow-wrap: break-word !important;
    vertical-align: middle !important;
    text-align: center !important;
    background-image: none !important;
  }
  #searchresult_tbl:has(.update_status) tbody td {
    padding: 5px 2px !important;
    font-size: 10px !important;
    white-space: normal !important;
    word-break: normal !important;
    overflow-wrap: break-word !important;
    vertical-align: middle !important;
  }
  #searchresult_tbl:has(.update_status) tr > *:nth-child(1) {
    width: 13% !important;
    text-align: center !important;
  }
  #searchresult_tbl:has(.update_status) tbody tr > td:nth-child(1) .checkbox {
    margin: 0 !important;
    display: inline-block !important;
  }
  #searchresult_tbl:has(.update_status) tr > *:nth-child(2) {
    width: 12% !important;
    text-align: center !important;
  }
  #searchresult_tbl:has(.update_status) tr > *:nth-child(3) {
    width: 19% !important;
  }
  #searchresult_tbl:has(.update_status) tr > *:nth-child(4) {
    width: 16% !important;
    text-align: center !important;
  }
  #searchresult_tbl:has(.update_status) tbody td:nth-child(4) {
    font-size: 9.5px !important;
    padding: 5px 1px !important;
  }
  #searchresult_tbl:has(.update_status) tr > *:nth-child(5) {
    width: 14% !important;
    text-align: center !important;
  }
  #searchresult_tbl:has(.update_status) tr > *:nth-child(6) {
    width: 13% !important;
    text-align: center !important;
  }
  #searchresult_tbl:has(.update_status) tr > *:nth-child(7) {
    width: 13% !important;
    text-align: center !important;
  }

  /* 15. Channel Manager -> Log Updates (halaman induk + iframe updating_log.php) */
  div:has(> iframe[name="last10updates"]) {
    padding: 4px !important;
    border: none !important;
  }
  body:has(#bcl-log-top) {
    margin: 0 !important;
    padding: 4px !important;
    background: #fff !important;
  }
  #bcl-log-top {
    width: 100% !important;
    box-sizing: border-box !important;
    border: 1px solid #d0d7de !important;
    border-radius: 6px !important;
    overflow: hidden !important;
    margin-bottom: 10px !important;
    background: #f8f9fa !important;
  }
  #bcl-log-top #pageheader {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background: #0088b5 !important;
    padding: 10px 12px !important;
    position: relative !important;
  }
  #bcl-log-top #pageheader > td {
    border: none !important;
    padding: 0 !important;
    background: transparent !important;
  }
  #bcl-log-top #pageheader > td:first-child {
    position: absolute !important;
    left: 8px !important;
  }
  #bcl-log-top #pageheader svg {
    display: none !important;
  }
  #bcl-log-top #pageheader > td:last-child::after {
    content: "UPDATING LOG";
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  #bcl-log-top #td_propertyId {
    display: block !important;
    width: 100% !important;
    box-sizing: border-box !important;
    padding: 10px 10px 4px 10px !important;
    border: none !important;
  }
  #bcl-log-top #td_propertyId select#propertyId {
    width: 100% !important;
    height: 36px !important;
    font-size: 13px !important;
    padding: 6px 10px !important;
    border: 1px solid #ccc !important;
    border-radius: 4px !important;
    box-sizing: border-box !important;
    margin-top: 4px !important;
  }
  #bcl-log-top tr.tr {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
    padding: 6px 10px 12px 10px !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
  #bcl-log-top tr.tr > td {
    border: none !important;
    padding: 0 !important;
    box-sizing: border-box !important;
  }
  #bcl-log-top tr.tr > td:nth-child(1) {
    flex: 1 1 100% !important;
    width: 100% !important;
  }
  #bcl-log-top tr.tr > td:nth-child(2),
  #bcl-log-top tr.tr > td:nth-child(3) {
    flex: 1 1 calc(50% - 4px) !important;
    width: calc(50% - 4px) !important;
  }
  #bcl-log-top tr.tr > td:nth-child(4) {
    flex: 1 1 calc(62% - 4px) !important;
    width: calc(62% - 4px) !important;
  }
  #bcl-log-top tr.tr > td:nth-child(5) {
    flex: 1 1 calc(38% - 4px) !important;
    width: calc(38% - 4px) !important;
    display: flex !important;
    align-items: flex-end !important;
  }
  #bcl-log-top .label.label-warning {
    font-size: 11.5px !important;
    padding: 3px 7px !important;
    display: inline-block !important;
    margin-bottom: 4px !important;
    border-radius: 3px !important;
  }
  #bcl-log-top .select,
  #bcl-log-top input#date {
    width: 100% !important;
    height: 36px !important;
    font-size: 13px !important;
    padding: 6px 10px !important;
    border: 1px solid #ccc !important;
    border-radius: 4px !important;
    box-sizing: border-box !important;
    color: #222 !important;
    background-color: #fff !important;
  }
  #bcl-log-top button#search {
    width: 100% !important;
    height: 36px !important;
    font-size: 13px !important;
    font-weight: 600 !important;
    color: #fff !important;
    background-color: #2e9e49 !important;
    border: none !important;
    border-radius: 4px !important;
    margin: 0 !important;
  }
  .bcl-log-table-wrap {
    width: 100% !important;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch !important;
    border: 1px solid #ddd !important;
    border-radius: 4px !important;
  }
  table.datagrid {
    width: 100% !important;
    margin-bottom: 0 !important;
  }
  table.datagrid thead th,
  table.datagrid thead th.th {
    font-size: 11px !important;
    padding: 8px 6px !important;
    white-space: nowrap !important;
    vertical-align: middle !important;
    background: #f1f5f9 !important;
    color: #1e293b !important;
  }
  table.datagrid thead th #serialnumbericon {
    font-size: 11px !important;
    font-family: inherit !important;
    color: #1e293b !important;
    font-weight: bold !important;
  }
  table.datagrid thead th #serialnumbericon::before {
    display: none !important;
  }
  table.datagrid tbody td {
    font-size: 11.5px !important;
    padding: 6px 6px !important;
    white-space: nowrap !important;
    vertical-align: middle !important;
  }

  /* 16. Front Office System -> Extras Only & DataTables lebar tanpa .table-responsive:
     Bungkus tabel dalam kontainer geser horizontal (.bcl-dt-scroll) */
  .bcl-dt-scroll {
    width: 100% !important;
    max-width: 100% !important;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch !important;
    display: block !important;
    border: 1px solid #ddd !important;
    margin-bottom: 10px !important;
  }
  .bcl-dt-scroll > table.dataTable {
    margin-bottom: 0 !important;
    width: max-content !important;
    min-width: 100% !important;
  }
  .bcl-dt-scroll > table.dataTable thead th::after,
  .bcl-dt-scroll > table.dataTable thead td::after {
    display: none !important;
    content: none !important;
  }
  .bcl-dt-scroll > table.dataTable th,
  .bcl-dt-scroll > table.dataTable td {
    white-space: nowrap !important;
    vertical-align: middle !important;
    padding: 8px 10px !important;
  }
  .bcl-dt-scroll > table.dataTable select.action_invoice {
    min-width: 130px !important;
  }

  /* 17. Front Office System -> Reports (.reports_menu):
     Susun 21 tombol laporan menjadi grid 2 kolom yang rapi dan ringkas */
  .reports_menu > .row {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 7px !important;
    margin: 0 !important;
    background: #f8fafc !important;
    padding: 10px !important;
    border: 1px solid #e2e8f0 !important;
    border-radius: 8px !important;
  }
  .reports_menu > .row::before,
  .reports_menu > .row::after {
    display: none !important;
  }
  .reports_menu > .row > .col-sm-2 {
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  .reports_menu > .row > .col-sm-2:first-child {
    grid-column: 1 / -1 !important;
  }
  .reports_menu > .row > .col-sm-2 > a.btn {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;
    min-height: 36px !important;
    padding: 6px 8px !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    line-height: 1.25 !important;
    white-space: normal !important;
    text-align: center !important;
    border-radius: 6px !important;
    box-shadow: 0 1px 2px rgba(0,0,0,0.06) !important;
  }

  /* 18. Front Office System -> Settings (fos/settings) */
  .col-sm-12 > label.checkbox-inline:has(> .toggle) {
    display: flex !important;
    align-items: center !important;
    gap: 12px !important;
    padding-left: 0 !important;
    margin-left: 0 !important;
    margin-bottom: 10px !important;
    line-height: 1.35 !important;
  }
  .col-sm-12 > label.checkbox-inline > .toggle {
    flex: 0 0 59px !important;
    margin: 0 !important;
  }
  .col-sm-12 > .row > .col-sm-10.checkbox-inline {
    padding-left: 15px !important;
    margin-top: 4px !important;
  }
  .col-xs-8:has(#link_access_password) {
    width: 100% !important;
    max-width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 8px !important;
    padding: 0 15px !important;
    box-sizing: border-box !important;
  }
  .col-xs-8:has(#link_access_password) > .col-xs-8 {
    width: 100% !important;
    padding: 0 !important;
  }
  .col-xs-8:has(#link_access_password) div[style*="display:flex"] {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
    width: 100% !important;
  }
  .col-xs-8:has(#link_access_password) .form-group {
    flex: 1 1 100% !important;
    width: 100% !important;
    margin-bottom: 0 !important;
  }
  #link_access_password {
    width: 100% !important;
    box-sizing: border-box !important;
  }
  #gen_access_password,
  #save_access_password {
    flex: 1 1 calc(50% - 4px) !important;
    white-space: normal !important;
    height: auto !important;
    min-height: 36px !important;
    padding: 6px 10px !important;
  }
  ul.direct_access_list {
    padding-left: 18px !important;
    margin: 0 !important;
  }
  ul.direct_access_list li {
    margin-bottom: 8px !important;
    word-break: normal !important;
    overflow-wrap: break-word !important;
  }
  ul.direct_access_list li a {
    word-break: break-all !important;
    overflow-wrap: anywhere !important;
  }
  ul.panel.sortable,
  ul.panel {
    padding: 8px !important;
    overflow: hidden !important;
  }
  .dragcss,
  .dragcss2 {
    margin: 6px 0 !important;
    padding: 10px 12px !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
  .dragcss::before,
  .dragcss2::before {
    margin-right: 10px !important;
    margin-left: 0 !important;
  }
  .dragcss2 {
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: center !important;
    gap: 6px !important;
  }
  .dragcss2 > a.modal_owner {
    float: none !important;
    margin-left: auto !important;
    white-space: normal !important;
    font-size: 11.5px !important;
    padding: 4px 8px !important;
  }
  ul.sortable3 > li > a.myeditable {
    margin-left: 8px !important;
  }
  #modal_owner_group_form .modal-dialog,
  #breakfast_period_form .modal-dialog {
    width: calc(100% - 24px) !important;
    max-width: 100% !important;
  }

  /* 19. Back Office System -> Journal (table.menu_top) */
  table.menu_top,
  table.menu_top > tbody {
    display: block !important;
    width: 100% !important;
    border-spacing: 0 !important;
    margin-top: 8px !important;
  }
  table.menu_top > tbody > tr:first-child {
    display: none !important;
  }
  table.menu_top > tbody > tr:not(:first-child) {
    display: grid !important;
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    gap: 6px !important;
    margin-bottom: 6px !important;
    width: 100% !important;
  }
  table.menu_top > tbody > tr > td {
    display: flex !important;
    width: 100% !important;
    padding: 0 !important;
  }
  table.menu_top > tbody > tr > td > .btn {
    width: 100% !important;
    min-height: 40px !important;
    margin: 0 !important;
    padding: 6px 6px !important;
    font-size: 11.5px !important;
    font-weight: 600 !important;
    line-height: 1.2 !important;
    white-space: normal !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 4px !important;
    text-align: center !important;
    border-radius: 6px !important;
  }
  table.menu_top > tbody > tr > td > .btn > .glyphicon {
    flex-shrink: 0 !important;
    top: 0 !important;
  }

  /* 20. Booking Engine -> Widgets (booking_engine/widgets) */
  code:has(> pre) {
    display: block !important;
    padding: 0 !important;
    background: transparent !important;
  }
  pre#version1,
  pre#version2,
  pre#formular,
  .col-sm-12 > code > pre {
    white-space: pre-wrap !important;
    word-break: break-all !important;
    overflow-wrap: anywhere !important;
    max-width: 100% !important;
    width: 100% !important;
    box-sizing: border-box !important;
    padding: 10px 12px !important;
    font-size: 11.5px !important;
    line-height: 1.45 !important;
    margin-bottom: 12px !important;
  }
  .col-sm-12 > code {
    display: block !important;
    white-space: normal !important;
    word-break: break-word !important;
    overflow-wrap: anywhere !important;
    padding: 10px 12px !important;
    border-radius: 4px !important;
    margin-bottom: 10px !important;
  }
  .col-sm-12 > code h3 {
    margin-top: 4px !important;
    font-size: 18px !important;
  }
  .col-sm-12 > code ul {
    padding-left: 18px !important;
    margin-bottom: 4px !important;
  }
  .col-sm-12 > a[href*="booking.bclinnk.com/widget"] {
    display: inline-block !important;
    max-width: 100% !important;
    word-break: break-all !important;
    overflow-wrap: anywhere !important;
  }
  .version1-modal .modal-dialog {
    width: calc(100% - 20px) !important;
    max-width: 100% !important;
    margin: 10px auto !important;
  }
  .version1-modal .version1-result {
    overflow-x: auto !important;
    max-width: 100% !important;
  }

  /* 21. Payment Processing -> Transactions (#payku-transaction) */
  #payku-transaction #summary-balance {
    padding: 18px 16px !important;
  }
  #payku-transaction #summary-balance .col-md-8.card-balance {
    padding: 0 !important;
  }
  #payku-transaction #summary-balance .col-md-4.text-right {
    padding: 12px 0 0 0 !important;
    text-align: left !important;
  }
  #payku-transaction #summary-balance .col-md-4.text-right .btn {
    width: 100% !important;
    padding: 9px 14px !important;
    font-weight: 600 !important;
    border-radius: 6px !important;
  }
  #payku-transaction #filter-container {
    margin-top: 8px !important;
    margin-bottom: 12px !important;
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 6px !important;
  }
  #payku-transaction #filter-container > br {
    display: none !important;
  }
  #payku-transaction #filter-container > a.transtype {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin: 0 !important;
    padding: 6px 10px !important;
    font-size: 12px !important;
    line-height: 1.25 !important;
    border-radius: 6px !important;
    background: #f4f6f9 !important;
    border: 1px solid #dce1e7 !important;
    color: #555 !important;
    white-space: nowrap !important;
  }
  #payku-transaction #filter-container > a.transtype.active {
    background: #e8f2fa !important;
    color: #3c8dbc !important;
    border: 1px solid #3c8dbc !important;
  }
  #payku-transaction #datesblock,
  #payku-transaction #datesblockPayout {
    flex: 1 1 100% !important;
    width: 100% !important;
    margin-top: 6px !important;
  }
  #payku-transaction #searchresult_tbl_wrapper .dt-buttons {
    float: none !important;
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 6px !important;
    justify-content: flex-start !important;
    width: 100% !important;
    margin: 0 0 10px 0 !important;
    padding: 4px 0 0 0 !important;
  }
  #payku-transaction #searchresult_tbl_wrapper .dt-buttons .dt-button {
    flex: 1 1 auto !important;
    margin: 0 !important;
    padding: 7px 10px !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    text-align: center !important;
  }
  #payku-transaction div#searchresult_tbl_filter {
    float: none !important;
    clear: both !important;
    width: 100% !important;
    margin: 0 0 10px 0 !important;
    text-align: left !important;
  }
  #payku-transaction div#searchresult_tbl_filter label {
    display: flex !important;
    align-items: center !important;
    gap: 8px !important;
    width: 100% !important;
    margin: 0 !important;
    font-weight: 600 !important;
  }
  #payku-transaction div#searchresult_tbl_filter input {
    flex: 1 1 auto !important;
    width: 100% !important;
    margin: 0 !important;
    box-sizing: border-box !important;
  }
  #payku-transaction #searchresult_tbl thead tr.thead_styles {
    display: none !important;
  }
  #payku-transaction #searchresult_tbl thead th {
    vertical-align: middle !important;
    white-space: nowrap !important;
    padding: 10px 24px 10px 10px !important;
    background-color: #eef5fb !important;
  }

  /* 22. Booking Engine -> Hot Deals (#be-hotdeals & modal Edit/Add #open_modal) */
  #be-hotdeals > .row:first-child {
    display: flex !important;
    flex-direction: column !important;
    gap: 10px !important;
    margin-bottom: 12px !important;
  }
  #be-hotdeals #add_special {
    width: 100% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 6px !important;
  }
  #be-hotdeals #update_submit {
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: center !important;
    gap: 6px !important;
  }
  #be-hotdeals #update_submit #submit_status {
    padding: 6px 14px !important;
  }
  #open_modal .modal-dialog,
  #open_modal_edit .modal-dialog,
  .modal-dialog {
    width: calc(100% - 20px) !important;
    max-width: 100% !important;
    margin: 10px auto !important;
  }
  .modal {
    z-index: 1070 !important;
  }
  .modal-backdrop {
    z-index: 1065 !important;
  }
  body.modal-open .content-wrapper {
    z-index: 1070 !important;
  }
  #open_modal .modal-content,
  #open_modal .modal-body {
    width: 100% !important;
    box-sizing: border-box !important;
    overflow-x: hidden !important;
  }
  #edit_specialdetails_form > div:first-child {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
    width: 100% !important;
  }
  #edit_specialdetails_form > div:first-child > .col-sm-8,
  #edit_specialdetails_form > div:first-child .col-md-8 {
    float: none !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
  }
  #edit_specialdetails_form > div:first-child .col-md-1 {
    display: none !important;
  }
  #edit_specialdetails_form > br {
    display: none !important;
  }
  #copy_specials2,
  #del_specialsdata {
    flex: 1 1 calc(50% - 4px) !important;
    white-space: normal !important;
    padding: 7px 8px !important;
    font-size: 12px !important;
  }
  #open_modal .form-horizontal .form-group {
    margin: 0 0 10px 0 !important;
    padding: 4px 0 !important;
  }
  #open_modal .form-horizontal .control-label {
    text-align: left !important;
    margin-bottom: 4px !important;
    padding: 0 !important;
    display: block !important;
    width: 100% !important;
  }
  #open_modal .form-horizontal .col-sm-8,
  #open_modal .form-horizontal .col-sm-3,
  #open_modal .form-horizontal .col-sm-2 {
    width: 100% !important;
    padding: 0 !important;
  }
  #open_modal .form-group select.form-control {
    width: 100% !important;
    max-width: 100% !important;
  }
  #open_modal table.table.mb30 {
    width: 100% !important;
    table-layout: fixed !important;
    margin-bottom: 8px !important;
  }
  #open_modal table.table.mb30 th,
  #open_modal table.table.mb30 td {
    padding: 6px 2px !important;
    text-align: center !important;
    font-size: 11.5px !important;
  }
  #open_modal #ValidSpecificDates input.hasDatepicker,
  #open_modal #esdisplay_date input.hasDatepicker {
    width: calc(50% - 14px) !important;
    max-width: 100% !important;
  }
  #open_modal #save_edit_details {
    width: 100% !important;
    margin: 8px 0 0 0 !important;
    padding: 9px 14px !important;
    font-weight: 600 !important;
  }
  #open_modal #show_pictures .col-sm-3 {
    display: inline-block !important;
    width: 48% !important;
    padding: 4px !important;
    box-sizing: border-box !important;
  }

  /* 23. OTA Content -> Messages OTA (#ota-messages & #frame) */
  #ota-messages > .row {
    margin: 8px 0 12px 0 !important;
  }
  #ota-messages .select_all_properties {
    display: inline-block !important;
    margin-top: 6px !important;
    font-weight: 600 !important;
  }
  body #frame {
    width: calc(100% - 20px) !important;
    min-width: 0 !important;
    max-width: 100% !important;
    height: auto !important;
    max-height: none !important;
    margin: 0 10px 24px 10px !important;
    display: flex !important;
    flex-direction: column !important;
    border: 1px solid #d2d6de !important;
    border-radius: 8px !important;
    overflow: hidden !important;
  }
  body #frame #sidepanel {
    float: none !important;
    order: 1 !important;
    width: 100% !important;
    min-width: 0 !important;
    max-width: 100% !important;
    height: auto !important;
    max-height: 340px !important;
    display: flex !important;
    flex-direction: column !important;
  }
  body #frame #sidepanel #search {
    display: block !important;
    width: 100% !important;
    position: relative !important;
  }
  body #frame #sidepanel #search input {
    width: 100% !important;
    box-sizing: border-box !important;
  }
  body #frame #sidepanel #contacts {
    height: auto !important;
    max-height: 280px !important;
    padding-bottom: 6px !important;
    overflow-y: auto !important;
  }
  body #frame #sidepanel #contacts ul li.contact {
    padding: 10px 12px !important;
    border-bottom: 1px solid rgba(255,255,255,0.08) !important;
  }
  body #frame #sidepanel #contacts ul li.contact .wrap {
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    width: 100% !important;
  }
  body #frame #sidepanel #contacts ul li.contact .wrap img {
    float: none !important;
    width: 36px !important;
    height: 36px !important;
    flex-shrink: 0 !important;
    margin-right: 0 !important;
  }
  body #frame #sidepanel #contacts ul li.contact .wrap .meta {
    display: block !important;
    padding: 0 !important;
    min-width: 0 !important;
    flex: 1 1 auto !important;
  }
  body #frame #sidepanel #contacts ul li.contact .wrap .meta .name {
    margin: 0 0 2px 0 !important;
    font-size: 13px !important;
    white-space: normal !important;
    word-break: break-word !important;
    line-height: 1.3 !important;
  }
  body #frame #sidepanel #contacts ul li.contact .wrap .meta .preview {
    margin: 0 !important;
    font-size: 12px !important;
    white-space: normal !important;
    word-break: break-word !important;
    line-height: 1.3 !important;
  }
  body #frame .content_message {
    float: none !important;
    order: 2 !important;
    width: 100% !important;
    min-width: 0 !important;
    max-width: 100% !important;
    height: auto !important;
    display: flex !important;
    flex-direction: column !important;
    border-top: 2px solid #2c3e50 !important;
  }
  body #frame .content_message:empty {
    display: none !important;
  }
  body #frame .content_message .contact-profile {
    height: auto !important;
    line-height: 1.35 !important;
    padding: 8px 10px !important;
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: center !important;
    gap: 8px !important;
  }
  body #frame .content_message .contact-profile img {
    float: none !important;
    margin: 0 !important;
    width: 34px !important;
    height: 34px !important;
  }
  body #frame .content_message .contact-profile p {
    float: none !important;
    padding: 0 !important;
    margin: 0 !important;
    font-weight: 600 !important;
  }
  body #frame .content_message .contact-profile > div {
    border-left: none !important;
    padding: 4px 0 0 0 !important;
    width: 100% !important;
    font-size: 12.5px !important;
  }
  body #frame .content_message .messages {
    height: auto !important;
    min-height: 160px !important;
    max-height: 360px !important;
    overflow-y: auto !important;
  }
  body #frame .content_message .messages ul li {
    margin: 8px 10px !important;
    width: calc(100% - 20px) !important;
  }
  body #frame .content_message .messages ul li p {
    max-width: calc(100% - 36px) !important;
    word-break: break-word !important;
    overflow-wrap: anywhere !important;
  }
  body #frame .content_message .message-input {
    height: auto !important;
    padding: 6px !important;
    background: #fff !important;
    border-top: 1px solid #d2d6de !important;
  }
  body #frame .content_message .message-input .wrap {
    display: flex !important;
    align-items: center !important;
    gap: 6px !important;
  }
  body #frame .content_message .message-input .wrap textarea.input_message {
    flex: 1 1 auto !important;
    width: auto !important;
    max-width: none !important;
    min-height: 40px !important;
    padding: 8px !important;
    border: 1px solid #d2d6de !important;
    border-radius: 4px !important;
  }
  body #frame .content_message .message-input .wrap .attachment {
    position: static !important;
    margin: 0 4px !important;
  }
  body #frame .content_message .message-input .wrap button {
    float: none !important;
    width: 44px !important;
    height: 40px !important;
    padding: 0 !important;
    border-radius: 4px !important;
    flex-shrink: 0 !important;
  }
  body #frame #sidepanel2 {
    float: none !important;
    order: 3 !important;
    width: 100% !important;
    min-width: 0 !important;
    max-width: 100% !important;
    height: auto !important;
    border-top: 1px solid #dcdcdc !important;
  }
  body #frame #sidepanel2:empty {
    display: none !important;
  }
  body #frame #sidepanel2 .right-box {
    position: static !important;
    width: 100% !important;
    padding: 12px !important;
    box-sizing: border-box !important;
  }
  body #frame #sidepanel2 .right-box .private_comment {
    height: 90px !important;
  }
  body #frame #sidepanel2 .right-box .submit_message {
    float: none !important;
    display: block !important;
    width: 100% !important;
    text-align: center !important;
  }

  /* 24. Account -> Details (#account-details: Device History, User Activities, Edit Details) */
  #account-details .nav-tabs {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 6px !important;
    border-bottom: none !important;
    margin-bottom: 10px !important;
  }
  #account-details .nav-tabs > li {
    float: none !important;
    margin: 0 !important;
  }
  #account-details .nav-tabs > li > a {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
    padding: 8px 6px !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    border-radius: 6px !important;
    border: 1px solid #d2d6de !important;
    background: #f4f6f9 !important;
    color: #444 !important;
    margin: 0 !important;
  }
  #account-details .nav-tabs > li.active > a {
    background: #3c8dbc !important;
    color: #fff !important;
    border-color: #3c8dbc !important;
  }
  #account-details .tab-content {
    padding: 12px 10px !important;
  }
  #table-device-history_wrapper .dataTables_length,
  #table-device-history_wrapper .dataTables_filter {
    text-align: left !important;
    width: 100% !important;
    margin-bottom: 8px !important;
  }
  #table-device-history_wrapper .dataTables_filter label {
    display: flex !important;
    align-items: center !important;
    gap: 8px !important;
    width: 100% !important;
  }
  #table-device-history_wrapper .dataTables_filter input {
    flex: 1 1 auto !important;
    width: 100% !important;
    margin: 0 !important;
  }
  #table-device-history {
    width: 100% !important;
    table-layout: fixed !important;
  }
  #table-device-history th:first-child,
  #table-device-history td:first-child {
    width: 100px !important;
    white-space: normal !important;
    word-break: break-word !important;
    font-size: 11.5px !important;
    vertical-align: middle !important;
  }
  #table-device-history th:nth-child(2),
  #table-device-history td:nth-child(2) {
    width: calc(100% - 100px) !important;
    white-space: normal !important;
    word-break: break-all !important;
    overflow-wrap: anywhere !important;
    font-size: 11.5px !important;
    line-height: 1.35 !important;
    vertical-align: middle !important;
  }
  #user_activities .dt-buttons {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 6px !important;
    margin-bottom: 10px !important;
  }
  #user_activities .dt-buttons .dt-button {
    margin: 0 !important;
    padding: 6px 10px !important;
    font-size: 12px !important;
  }
  #edit_details .checkboxes {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 6px !important;
  }
  #edit_details .checkboxes > div[style*="width:45%"] {
    width: calc(50% - 3px) !important;
    float: none !important;
    display: flex !important;
    align-items: center !important;
    gap: 6px !important;
  }
  #edit_details .checkboxes > div[style*="width:45%"] input,
  #edit_details .checkboxes > div[style*="width:45%"] span {
    float: none !important;
    width: auto !important;
    margin: 0 !important;
  }
}

/* 25. Halaman Login SSO BCLinnk (sso.bclinnk.com) -> Banner Carousel Modul Merah Gradien */
#bcl-login-showcase {
  width: 100%;
  margin: 14px 0 4px 0;
  padding: 11px 0 10px 0;
  border-radius: 14px;
  background: linear-gradient(135deg, #8b1116 0%, #bf2126 52%, #e05156 100%);
  box-shadow: 0 8px 20px -6px rgba(191, 33, 38, 0.45);
  color: #ffffff;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
}
#bcl-login-showcase .bcl-showcase-title {
  text-align: center;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: #ffffff;
  margin: 0 12px 9px 12px;
  line-height: 1.3;
}
#bcl-login-showcase .bcl-marquee-viewport {
  width: 100%;
  overflow: hidden;
  position: relative;
  -webkit-mask-image: linear-gradient(to right, transparent 0%, #000000 8%, #000000 92%, transparent 100%);
  mask-image: linear-gradient(to right, transparent 0%, #000000 8%, #000000 92%, transparent 100%);
}
#bcl-login-showcase .bcl-marquee-track {
  display: flex !important;
  flex-wrap: nowrap !important;
  width: max-content !important;
  will-change: transform;
  animation: bclShowcaseMarquee 20s linear infinite;
}
#bcl-login-showcase .bcl-marquee-viewport:hover .bcl-marquee-track,
#bcl-login-showcase .bcl-marquee-viewport:active .bcl-marquee-track {
  animation-play-state: paused;
}
@keyframes bclShowcaseMarquee {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}
#bcl-login-showcase .bcl-mod-item {
  flex: 0 0 auto;
  width: auto;
  min-width: 102px;
  padding: 2px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
}
#bcl-login-showcase .bcl-mod-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  box-sizing: border-box;
}
#bcl-login-showcase .bcl-mod-icon svg {
  width: 21px;
  height: 21px;
  display: block;
}
#bcl-login-showcase .bcl-mod-name {
  font-size: 10.5px;
  font-weight: 700;
  line-height: 1.15;
  color: #ffffff;
  white-space: nowrap;
}
#bcl-login-showcase .bcl-mod-sub {
  font-size: 8.5px;
  font-weight: 400;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.86);
  margin-top: 2px;
  max-width: 114px;
  white-space: normal;
}
@media (max-width: 767px) {
  #login-section .min-h-screen {
    padding-top: 44px !important;
    padding-bottom: 24px !important;
    justify-content: flex-start !important;
  }
  #login-section:has(#bcl-login-showcase) h1 {
    margin-top: 12px !important;
  }
}
`;

  function ensureStyle() {
    var root = document.documentElement;
    if (!root) return;
    root.classList.add('bcl-app');
    var s = document.getElementById('bcl-app-patch');
    if (!s) {
      s = document.createElement('style');
      s.id = 'bcl-app-patch';
      (document.head || root).appendChild(s);
    }
    if (s.textContent !== CSS) {
      s.textContent = CSS;
    }
  }

  function injectLoginShowcase() {
    var host = (window.location && window.location.hostname) || '';
    var path = (window.location && window.location.pathname) || '';
    if (host.indexOf('sso.bclinnk.com') === -1 || path.indexOf('/auth/login') === -1) return;
    if (document.getElementById('bcl-login-showcase')) return;

    var emailInput = document.querySelector('#login-section input[name="email"]');
    var form = emailInput ? emailInput.closest('form') : null;
    var parent = form ? form.parentElement : null;
    if (!parent) return;

    var modules = [
      {
        name: 'Channel Manager',
        sub: 'OTA & Rate Sync',
        svg: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'
      },
      {
        name: 'FOS',
        sub: 'Advance Hospitality Management System',
        svg: '<path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5Z"/><path d="M9 15.5c1.5 1.3 4.5 1.3 6 0"/>'
      },
      {
        name: 'Booking Engine',
        sub: 'Direct Booking',
        svg: '<circle cx="11" cy="11" r="7"/><path d="M12 12l7.5 7.5"/><path d="M11 8v3l2.2 1.2"/>'
      },
      {
        name: 'Payment',
        sub: 'Payment Processing',
        svg: '<rect x="2.5" y="5.5" width="19" height="13" rx="2"/><path d="M2.5 10h19"/><path d="M15 14h3"/>'
      },
      {
        name: 'Guest CRM',
        sub: 'Reviews & Automation',
        svg: '<path d="M9 12l2.2 2.2L16.5 9"/><rect x="3.5" y="4.5" width="17" height="15" rx="2"/>'
      },
      {
        name: 'Reservation System',
        sub: 'Booking Management',
        svg: '<rect x="3" y="4.5" width="18" height="16.5" rx="2"/><path d="M16 2.5v4"/><path d="M8 2.5v4"/><path d="M3 9.5h18"/>'
      }
    ];

    function buildItemsHtml() {
      var out = '';
      for (var i = 0; i < modules.length; i++) {
        var m = modules[i];
        out += '<div class="bcl-mod-item">' +
          '<div class="bcl-mod-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' + m.svg + '</svg></div>' +
          '<div class="bcl-mod-name">' + m.name + '</div>' +
          '<div class="bcl-mod-sub">' + m.sub + '</div>' +
        '</div>';
      }
      return out;
    }

    var box = document.createElement('div');
    box.id = 'bcl-login-showcase';
    var trackHtml = buildItemsHtml();
    box.innerHTML =
      '<div class="bcl-showcase-title">The all in one hospitality software</div>' +
      '<div class="bcl-marquee-viewport">' +
        '<div class="bcl-marquee-track">' + trackHtml + trackHtml + '</div>' +
      '</div>';

    var h1 = parent.querySelector('h1');
    parent.insertBefore(box, h1 || form);
  }

  function domFixes() {
    injectLoginShowcase();
    // Matikan fungsi scroll listener berat pada Monthly Deals di layar HP
    if (window.innerWidth <= 767 && typeof window.AncorControlMatches2 === 'function') {
      window.AncorControlMatches2 = function () {};
      var st = document.querySelector('.sticky-top2');
      if (st) {
        st.classList.remove('sticky-top');
        st.style.top = '0px';
      }
    }
    // Bersihkan spasi &nbsp; di kolom pertama Full Synchro Auto agar rata tengah rapi
    if (window.innerWidth <= 767) {
      var th1 = document.querySelector('#searchresult_tbl:has(.update_status) thead td:first-child');
      if (th1 && th1.textContent.indexOf('\u00a0') !== -1) {
        th1.textContent = th1.textContent.replace(/\u00a0+/g, '').trim();
      }
      var tds = document.querySelectorAll('#searchresult_tbl:has(.update_status) tbody td:first-child');
      for (var i = 0; i < tds.length; i++) {
        var nodes = tds[i].childNodes;
        for (var j = 0; j < nodes.length; j++) {
          if (nodes[j].nodeType === 3 && nodes[j].textContent.indexOf('\u00a0') !== -1) {
            nodes[j].textContent = '';
          }
        }
      }

      // Restrukturisasi form filter Log Updates (updating_log.php) agar terpisah dari tabel 14 kolom
      var logTbl = document.querySelector('table.datagrid');
      if (logTbl && !document.getElementById('bcl-log-top')) {
        var topTbl = document.createElement('table');
        topTbl.id = 'bcl-log-top';
        var topTbody = document.createElement('tbody');
        topTbl.appendChild(topTbody);

        var r1 = document.getElementById('pageheader');
        var tdProp = document.getElementById('td_propertyId');
        var r2 = tdProp ? tdProp.closest('tr') : null;
        var roomSel = document.getElementById('room_Id');
        var r3 = roomSel ? roomSel.closest('tr') : null;

        if (r1) topTbody.appendChild(r1);
        if (r2) topTbody.appendChild(r2);
        if (r3) topTbody.appendChild(r3);

        logTbl.parentNode.insertBefore(topTbl, logTbl);

        if (!logTbl.parentElement.classList.contains('bcl-log-table-wrap')) {
          var wrap = document.createElement('div');
          wrap.className = 'bcl-log-table-wrap';
          logTbl.parentNode.insertBefore(wrap, logTbl);
          wrap.appendChild(logTbl);
        }
      }

      // Bungkus DataTables yang tidak memiliki .table-responsive (mis. FOS -> Extras Only) agar tabelnya bisa digeser ke kanan/kiri
      var dts = document.querySelectorAll('.dataTables_wrapper > table.dataTable');
      for (var k = 0; k < dts.length; k++) {
        var dt = dts[k];
        if (dt.querySelector('.update_status')) continue;
        if (dt.closest('.table-responsive') || dt.closest('.bcl-dt-scroll')) continue;
        var dtWrap = document.createElement('div');
        dtWrap.className = 'bcl-dt-scroll';
        dt.parentNode.insertBefore(dtWrap, dt);
        dtWrap.appendChild(dt);
      }

      // Tambahkan label judul kolom ke dalam sel table.seldest1 pada Yearly Deals
      var seldests = document.querySelectorAll('#cm-yearly table.seldest1');
      for (var s = 0; s < seldests.length; s++) {
        var stbl = seldests[s];
        if (stbl.closest('#All')) continue;
        var trs = stbl.querySelectorAll('tbody > tr');
        if (trs.length >= 2) {
          var ths = trs[0].querySelectorAll('th');
          var sTds = trs[1].querySelectorAll('td');
          for (var c = 0; c < sTds.length; c++) {
            if (ths[c] && !sTds[c].querySelector('.bcl-seldest-label')) {
              var lbl = document.createElement('div');
              lbl.className = 'bcl-seldest-label';
              lbl.textContent = ths[c].textContent.trim();
              sTds[c].insertBefore(lbl, sTds[c].firstChild);
            }
          }
        }
      }
    }
  }

  var observerAttached = false;
  var pending = false;

  function attachObserver() {
    if (observerAttached) return;
    var target = document.documentElement || document;
    if (!target) return;
    observerAttached = true;
    new MutationObserver(function () {
      if (pending) return;
      pending = true;
      requestAnimationFrame(function () { pending = false; run(); });
    }).observe(target, { childList: true, subtree: true });
  }

  function run() {
    ensureStyle();
    attachObserver();
    try { domFixes(); } catch (e) { /* abaikan */ }
  }

  run();
  document.addEventListener('DOMContentLoaded', run);
  window.addEventListener('load', run);
})();
