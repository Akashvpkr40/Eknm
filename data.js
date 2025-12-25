const books = [
  {
    "name_ml": "മൂലധനം",
    "name_en": "Mooladhanam",
    "author": "ഡിസി ബുക്കുകൾ",
    "stockNumber": 1,
    "price": 150.0,
    "image": "D:\\EKNM Site\\books\\mooladhanam.png",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാവ് തെയ്യം പുരാവൃത്തം",
    "name_en": "Kaav theyyam puraavrittham",
    "author": "സാഹിതി പുസ്തകങ്ങൾ",
    "stockNumber": 2,
    "price": 75.0,
    "image": "books/2.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കന്യാധനം",
    "name_en": "Kanyaadhanam",
    "author": "കാലിക്കറ്റ് സർവകലാശാല",
    "stockNumber": 3,
    "price": 22.0,
    "image": "books/3.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കലപ്പ",
    "name_en": "Kalappa",
    "author": "എച്ച്&സി പബ്ലിഷിംഗ്",
    "stockNumber": 4,
    "price": 25.0,
    "image": "D:\\EKNM Site\\books\\kalappa.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തിരഞ്ഞെടുത്ത  കുട്ടിക്കഥകൾ",
    "name_en": "Thiranjeduttha kuttikkathakal",
    "author": "ലൈറ്റ് ബുക്കുകൾ",
    "stockNumber": 5,
    "price": 12.0,
    "image": "books/5.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുഞ്ഞുണ്ണിയുടെ കവിതകൾ",
    "name_en": "Kunjunniyude kavitakal",
    "author": "കറൻ്റ് ബുക്കുകൾ",
    "stockNumber": 6,
    "price": 9.0,
    "image": "books/6.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉറങ്ങാത്ത നാളുകൾ",
    "name_en": "Urangatha naalukal",
    "author": "ദേശീയ പുസ്തകങ്ങൾ",
    "stockNumber": 7,
    "price": 9.5,
    "image": "books/7.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഫെഡറിക് ഏംഗൽസ്",
    "name_en": "Phèdarik emgaൽs",
    "author": "സോവിയറ്റ് യൂണിയൻ",
    "stockNumber": 8,
    "price": 5.0,
    "image": "books/8.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരിക്കൽ ഒരിടത്ത്",
    "name_en": "Òrikkaൽ òritatt",
    "author": "എച്ച് ആൻഡ് സി ബുക്കുകൾ",
    "stockNumber": 9,
    "price": 10.0,
    "image": "books/9.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചിദംബര സ്മരണ",
    "name_en": "Chidambara smarana",
    "author": "ഡിസി ബുക്സ്",
    "stockNumber": 10,
    "price": 80.0,
    "image": "D:\\EKNM Site\\books\\chidambara smarana.jpeg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഈസോപിൻ്റേ കഥ",
    "name_en": "Eesopiൻre katha",
    "author": "സുര ബുക്സ്",
    "stockNumber": 11,
    "price": 25.0,
    "image": "books/11.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിജയ വീഥി",
    "name_en": "Vijaya veethi",
    "author": "കറൻ്റ് ബുക്കുകൾ",
    "stockNumber": 12,
    "price": 45.0,
    "image": "books/12.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഡോ.കുട്ടൻ കുറുക്കൻ എം.ഡി.",
    "name_en": "Do.kuttaൻ kurukkaൻ èm.di.",
    "author": "സുര ബുക്സ്",
    "stockNumber": 13,
    "price": 40.0,
    "image": "books/13.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സുന്ദര വനത്തിലെ അത്ഭുതം",
    "name_en": "Sundara vanattilè atbhutam",
    "author": "സുര ബുക്സ്",
    "stockNumber": 14,
    "price": 40.0,
    "image": "books/14.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉണർവോലും ചിന്തകൾ",
    "name_en": "Unaർvolum chintakaൾ",
    "author": "സുര ബുക്സ്",
    "stockNumber": 15,
    "price": 50.0,
    "image": "books/15.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗാന്ധിജി",
    "name_en": "Gaandhiji",
    "author": "സുര ബുക്സ്",
    "stockNumber": 16,
    "price": 40.0,
    "image": "books/16.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുയൽ വളർത്തൽ",
    "name_en": "Muyaൽ valaർttaൽ",
    "author": "ഡിസി ബുക്കുകൾ",
    "stockNumber": 17,
    "price": 50.0,
    "image": "books/17.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബഷീർ",
    "name_en": "Basheeർ",
    "author": "ഡിസി ബുക്സ്",
    "stockNumber": 18,
    "price": 50.0,
    "image": "books/18.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നളിനി",
    "name_en": "Nalini",
    "author": "ഡിസി ബുക്കുകൾ",
    "stockNumber": 19,
    "price": 50.0,
    "image": "books/19.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അമേരിക്ക ഒബാമ വരെ",
    "name_en": "Amerikka òbaama varè",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 20,
    "price": 10.0,
    "image": "books/20.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലണ്ടൻ നോട്ട്ബുക്ക്",
    "name_en": "Lantaൻ nottbukk",
    "author": "ഡിസി ബുക്കുകൾ",
    "stockNumber": 21,
    "price": 50.0,
    "image": "books/21.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പി എസ് സി",
    "name_en": "Pi ès si",
    "author": "സുര ബുക്സ്",
    "stockNumber": 22,
    "price": 70.0,
    "image": "books/22.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അഗ്നിച്ചിറകുകൾ",
    "name_en": "Agnichchirakukaൾ",
    "author": "ഡിസി ബുക്സ്",
    "stockNumber": 23,
    "price": 110.0,
    "image": "books/23.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാൾ മാർക്ക്സ് മൂലധനം",
    "name_en": "Kaaൾ maaർkks mooladhanam",
    "author": "ഡിസി ബുക്കുകൾ",
    "stockNumber": 24,
    "price": 150.0,
    "image": "D:\\EKNM Site\\books\\mooladhanam.png",
    "stock": "In Stock"
  },
  {
    "name_ml": "നീർമാതളം പൂത്തകാലം",
    "name_en": "Neeർmaatalam poottakaalam",
    "author": "ഡിസി ബുക്സ്",
    "stockNumber": 25,
    "price": 120.0,
    "image": "books/25.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒന്നാം പാടം",
    "name_en": "Ònnaam paatam",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 26,
    "price": 75.0,
    "image": "books/26.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അജയ്യമായ ആത്മചൈതന്യം",
    "name_en": "Ajayyamaaya aatmachaitanyam",
    "author": "ഡിസി ബുക്സ്",
    "stockNumber": 27,
    "price": 90.0,
    "image": "books/27.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബാല്യകലാസ്മരണകൾ",
    "name_en": "Baalyakalaasmaranakaൾ",
    "author": "ഡിസി ബുക്സ്",
    "stockNumber": 28,
    "price": 80.0,
    "image": "books/28.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കയ്യൂരിൻ്റെ കഥ",
    "name_en": "Kayyooriൻrè katha",
    "author": "ചിന്ത പബ്ലിഷേഴ്സ്",
    "stockNumber": 29,
    "price": 65.0,
    "image": "books/29.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചിദംബര സ്മരണ",
    "name_en": "Chidambara smarana",
    "author": "ഡിസി ബുക്സ്",
    "stockNumber": 30,
    "price": 80.0,
    "image": "books/30.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മറഡോണ",
    "name_en": "Maradona",
    "author": "ചിന്ത പബ്ലിഷേഴ്സ്",
    "stockNumber": 31,
    "price": 80.0,
    "image": "books/31.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "യാ ഇലാഹി ബഷീർ",
    "name_en": "Yaa ilaahi basheeർ",
    "author": "ഡിസി ബുക്സ്",
    "stockNumber": 32,
    "price": 65.0,
    "image": "books/32.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "101 ചിന്തകൾ",
    "name_en": "101 chintakaൾ",
    "author": "എച്ച് & സി ബുക്കുകൾ",
    "stockNumber": 33,
    "price": 10.0,
    "image": "books/33.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുടുംബ വിജ്ഞാപനം",
    "name_en": "Kutumba vij~naapanam",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 34,
    "price": 10.0,
    "image": "books/34.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അറിഞ്ഞിരിക്കേണ്ട കോടതി നിയമങ്ങൾ",
    "name_en": "Ari~n~nirikkenta kotati niyama~n~naൾ",
    "author": "എച്ച് ആൻഡ് സി ബുക്സ്",
    "stockNumber": 35,
    "price": 10.0,
    "image": "books/35.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാബൂളിവാല",
    "name_en": "Kaaboolivaala",
    "author": "എച്ച് & സി ബുക്കുകൾ",
    "stockNumber": 36,
    "price": 10.0,
    "image": "books/36.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാബൂളിവാല",
    "name_en": "Kaaboolivaala",
    "author": "എച്ച് & സി ബുക്കുകൾ",
    "stockNumber": 37,
    "price": 10.0,
    "image": "books/37.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാബൂളിവാല",
    "name_en": "Kaaboolivaala",
    "author": "എച്ച് & സി ബുക്കുകൾ",
    "stockNumber": 38,
    "price": 10.0,
    "image": "books/38.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കമ്പ്യൂട്ടർ മുതൽ ഇൻ്റർനെറ്റ് വരെ",
    "name_en": "Kampyoottaർ mutaൽ iൻraർnèrr varè",
    "author": "അനാമിക",
    "stockNumber": 39,
    "price": 50.0,
    "image": "books/39.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അനശ്വര സ്മരണകൾ",
    "name_en": "Anashvara smaranakaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 40,
    "price": 30.0,
    "image": "books/40.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്‌പോക്കൺ ഹിന്ദി",
    "name_en": "S‌pokkaൺ hindi",
    "author": "ഷാരോൺ ബുക്‌സ്",
    "stockNumber": 41,
    "price": 10.0,
    "image": "books/41.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അറീഞ്ഞിരിക്കേണ്ട കാര്യങ്ങൾ",
    "name_en": "Aree~n~nirikkenta kaarya~n~naൾ",
    "author": "എച്ച് ആൻഡ് സി ബുക്കുകൾ",
    "stockNumber": 42,
    "price": 10.0,
    "image": "books/42.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇലമുളച്ചികൽ",
    "name_en": "Ilamulachchikaൽ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 43,
    "price": 50.0,
    "image": "books/43.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനസ്സിനകത്തൊരു മുറി",
    "name_en": "Manassinakattòru muri",
    "author": "എച്ച്&സി ബുക്സ്",
    "stockNumber": 44,
    "price": 55.0,
    "image": "books/44.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മധുരം",
    "name_en": "Madhuram",
    "author": "എച്ച്&സി ബുക്സ്",
    "stockNumber": 45,
    "price": 30.0,
    "image": "books/45.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിശബ്ദതയുടെ സൗക്യം",
    "name_en": "Nishabdatayutè saൗkyam",
    "author": "എച്ച്&സി ബുക്സ്",
    "stockNumber": 46,
    "price": 60.0,
    "image": "books/46.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആരുടെയോ ഒരു നഗരം",
    "name_en": "Aarutèyo òru nagaram",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 47,
    "price": 45.0,
    "image": "books/47.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചിന്തയുടെ ചില്ലകൾ",
    "name_en": "Chintayutè chillakaൾ",
    "author": "എച്ച് ആൻഡ് സി ബുക്കുകൾ",
    "stockNumber": 48,
    "price": 50.0,
    "image": "books/48.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു ചെറിയ ജീവിതത്തിൻ്റെ ശിരോരേഖകൾ",
    "name_en": "Òru chèriya jeevitattiൻrè shirorekhakaൾ",
    "author": "എച്ച് ആൻഡ് സി ബുക്കുകൾ",
    "stockNumber": 49,
    "price": 45.0,
    "image": "books/49.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മൃത സഞ്ജീവനി",
    "name_en": "Mrrita sa~njeevani",
    "author": "ഏർളി ബേർഡ്",
    "stockNumber": 50,
    "price": 42.0,
    "image": "books/50.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജന്തു കഥ പാട്ടുകൾ",
    "name_en": "Jantu katha paattukaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 51,
    "price": 40.0,
    "image": "books/51.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റെഡ് അലർട്ട്",
    "name_en": "Rèd alaർtt",
    "author": "എച്ച് & സി ബുക്കുകൾ",
    "stockNumber": 52,
    "price": 40.0,
    "image": "books/52.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാംബൂക്കൽ",
    "name_en": "Maambookkaൽ",
    "author": "എച്ച് & സി ബുക്കുകൾ",
    "stockNumber": 53,
    "price": 30.0,
    "image": "books/53.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒറ്റവരി കഥകൾ",
    "name_en": "Òrravari kathakaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 54,
    "price": 30.0,
    "image": "books/54.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിജ്ഞാന ലോകം",
    "name_en": "Vij~naana lokam",
    "author": "ശാലു ബുക്സ്",
    "stockNumber": 55,
    "price": 10.0,
    "image": "books/55.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജീവി വർഗങ്ങളുടെ ഉത്ഭവം",
    "name_en": "Jeevi vaർga~n~nalutè utbhavam",
    "author": "ഡിസി ബുക്സ്",
    "stockNumber": 56,
    "price": 30.0,
    "image": "books/56.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പച്ചക്കറി കൃഷി",
    "name_en": "Pachchakkari krrishi",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 57,
    "price": 50.0,
    "image": "books/57.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കണ്ണീർ പെരുമഴ",
    "name_en": "Kanneeർ pèrumazha",
    "author": "തുളുനാട്",
    "stockNumber": 58,
    "price": 30.0,
    "image": "books/58.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ടിൻ്റു മോൻ ഫലിതങ്ങൽ",
    "name_en": "Tiൻru moൻ phalita~n~naൽ",
    "author": "എച്ച് ആൻഡ് സി ബുക്കുകൾ",
    "stockNumber": 59,
    "price": 10.0,
    "image": "books/59.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജനപ്രിയ സിനിമകളുടെ രാജശിൽപികൾ",
    "name_en": "Janapriya sinimakalutè raajashiൽpikaൾ",
    "author": "എച്ച്&സി ബുക്സ്",
    "stockNumber": 60,
    "price": 40.0,
    "image": "books/60.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നവീന പാച്ചകം",
    "name_en": "Naveena paachchakam",
    "author": "എച്ച് ആൻഡ് സി ബുക്കുകൾ",
    "stockNumber": 61,
    "price": 10.0,
    "image": "books/61.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഖുർആൻ കഥകൾ കുറ്റിക്കൽ",
    "name_en": "Khuർaaൻ kathakaൾ kurrikkaൽ",
    "author": "എൻ.മൂസക്കുട്ടി",
    "stockNumber": 62,
    "price": 10.0,
    "image": "books/62.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹെലൻ കെല്ലർ",
    "name_en": "Hèlaൻ kèllaർ",
    "author": "ഹന്ന.ജി",
    "stockNumber": 63,
    "price": 10.0,
    "image": "books/63.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദേവി മഹാത്മ്യ കഥകൾ",
    "name_en": "Devi mahaatmya kathakaൾ",
    "author": "എ.ബി.വി.കാവിൽപ്പാട്",
    "stockNumber": 64,
    "price": 10.0,
    "image": "books/64.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചാച്ചാജി കഥകൾ",
    "name_en": "Chaachchaaji kathakaൾ",
    "author": "സവ്യസാചി",
    "stockNumber": 65,
    "price": 10.0,
    "image": "books/65.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചാച്ചാജി കഥകൾ",
    "name_en": "Chaachchaaji kathakaൾ",
    "author": "സവ്യസാചി",
    "stockNumber": 66,
    "price": 10.0,
    "image": "books/66.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗാന്ധിജി നമ്മുടെ രാഷ്ട്രപിതാവ്",
    "name_en": "Gaandhiji nammutè raashtrapitaav",
    "author": "പി.ടി.മുരുകച്ചൻ",
    "stockNumber": 67,
    "price": 10.0,
    "image": "books/67.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗാന്ധിജി നമ്മുടെ രാഷ്ട്രപിതാവ്",
    "name_en": "Gaandhiji nammutè raashtrapitaav",
    "author": "പി.ടി.മുരുകച്ചൻ",
    "stockNumber": 68,
    "price": 10.0,
    "image": "books/68.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹസ്തരേഖ ശാസ്ത്രം",
    "name_en": "Hastarekha shaastram",
    "author": "ജെ.ജെ.കുട്ടി",
    "stockNumber": 69,
    "price": 10.0,
    "image": "books/69.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ കേരളം",
    "name_en": "Èൻrè keralam",
    "author": "രാജേഷ് പാലയാട്",
    "stockNumber": 70,
    "price": 12.0,
    "image": "books/70.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടം കഥകളും കുസൃതി ചോത്യങ്ങളും",
    "name_en": "Katam kathakalum kusrriti chotya~n~nalum",
    "author": "രാമ ദാസ്",
    "stockNumber": 71,
    "price": 12.0,
    "image": "books/71.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "111 ബാല കഥകൾ",
    "name_en": "111 baala kathakaൾ",
    "author": "ജോർജ് ഇമ്മട്ടി",
    "stockNumber": 72,
    "price": 10.0,
    "image": "books/72.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രാമായണ കഥ കുട്ടികൾക്ക്",
    "name_en": "Raamaayana katha kuttikaൾkk",
    "author": "കുഞ്ഞി കുട്ടൻ ഇലയത്ത്",
    "stockNumber": 73,
    "price": 10.0,
    "image": "books/73.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തയ്യൽ പഠനം ഇനി വീട്ടിൽ",
    "name_en": "Tayyaൽ pathanam ini veettiൽ",
    "author": "ജയകുമാരി .എസ്",
    "stockNumber": 74,
    "price": 10.0,
    "image": "books/74.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശ്രീ അയ്യപ്പൻ കഥകൾ",
    "name_en": "Shree ayyappaൻ kathakaൾ",
    "author": "എ.ബി.വി. കാവിൽപ്പാട്",
    "stockNumber": 75,
    "price": 10.0,
    "image": "books/75.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സസ്യഭക്ഷണം",
    "name_en": "Sasyabhakshanam",
    "author": "ഷൈമ.എം. ശങ്കര്",
    "stockNumber": 76,
    "price": 10.0,
    "image": "books/76.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നീങ്ങളുടെ സ്വപ്ന വീട് കെട്ടുമ്പോൾ സൂക്ഷിചാൽ ദുഖിക്കേണ്ട",
    "name_en": "Nee~n~nalutè svapna veet kèttumpoൾ sookshichaaൽ dukhikkenta",
    "author": "എച്ച്&സി ബുക്സ്",
    "stockNumber": 77,
    "price": 10.0,
    "image": "books/77.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പരിസ്ഥി ക്വിസ്",
    "name_en": "Paristhi kvis",
    "author": "ഷീല.എസ്.ഷാജി",
    "stockNumber": 78,
    "price": 12.0,
    "image": "books/78.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഫയർ ഫൈറ്റിംഗ് & സേഫ്റ്റി മാനേജ്മെൻ്റ്",
    "name_en": "Phayaർ phairrimg & sephrri maanejmèൻr",
    "author": "ജോബി തായങ്കേരി",
    "stockNumber": 79,
    "price": 25.0,
    "image": "books/79.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തെന്നാലി രാമൻ കഥകൾ",
    "name_en": "Tènnaali raamaൻ kathakaൾ",
    "author": "ജോർജ് ഇമ്മട്ടി",
    "stockNumber": 80,
    "price": 10.0,
    "image": "books/80.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചാച്ചാജി കഥകൾ",
    "name_en": "Chaachchaaji kathakaൾ",
    "author": "സവ്യ സാച്ചി (എച്ച്&സി)",
    "stockNumber": 81,
    "price": 10.0,
    "image": "books/81.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വംശനാശം നെരിടുന്ന ജന്തുക്കൾ",
    "name_en": "Vamshanaasham nèritunna jantukkaൾ",
    "author": "ഷിജു ആർ നങ്ങ്യാർ കുളങ്ങര",
    "stockNumber": 82,
    "price": 10.0,
    "image": "books/82.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കണ്ണീർ പെരുമഴ",
    "name_en": "Kanneeർ pèrumazha",
    "author": "ഷാജഹാൻ തൃക്കരിപ്പൂർ",
    "stockNumber": 83,
    "price": 30.0,
    "image": "books/83.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കണ്ണീർ പെരുമഴ",
    "name_en": "Kanneeർ pèrumazha",
    "author": "ഷാജഹാൻ തൃക്കരിപ്പൂർ",
    "stockNumber": 84,
    "price": 30.0,
    "image": "books/84.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദൈവമേ കൈതൊഴം",
    "name_en": "Daivame kaitòzham",
    "author": "പന്തളം കേരള വർമ്മ",
    "stockNumber": 85,
    "price": 30.0,
    "image": "books/85.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പരമഹംസർ പറഞ്ഞ കഥകൾ",
    "name_en": "Paramahamsaർ para~n~na kathakaൾ",
    "author": "പ്രൊഫ.ഗീതാലയം ഗീതാ കൃഷ്ണൻ",
    "stockNumber": 86,
    "price": 65.0,
    "image": "books/86.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്ത്രീയും നിയമവും",
    "name_en": "Streeyum niyamavum",
    "author": "കെൽസ",
    "stockNumber": 87,
    "price": 10.0,
    "image": "books/87.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശാസ്ത്രപരീക്ഷണങ്ങൾ",
    "name_en": "Shaastrapareekshana~n~naൾ",
    "author": "എൻ.സുധാകരൻ",
    "stockNumber": 88,
    "price": 10.0,
    "image": "books/88.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പഠന പ്രൊജക്റ്റുകൾ എന്ത്? എന്തിന്?",
    "name_en": "Pathana pròjakrrukaൾ ènt? èntin?",
    "author": "ബിറ്റർ.സി.മുക്കോലക്കൽ",
    "stockNumber": 89,
    "price": 10.0,
    "image": "books/89.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇംഗ്ലീഷ് -ഇംഗ്ലീഷ് മലയാളം നിഘണ്ടു",
    "name_en": "Imgleesh -imgleesh malayaalam nighantu",
    "author": "എച്ച് ആൻഡ് സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 90,
    "price": 20.0,
    "image": "books/90.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭാഷാ സഹായി (ഹിന്ദി -മലയാളം)",
    "name_en": "Bhaashaa sahaayi (hindi -malayaalam)",
    "author": "എച്ച് ആൻഡ് സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 91,
    "price": 5.0,
    "image": "books/91.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇൻ്റർനെറ്റ്",
    "name_en": "Iൻraർnèrr",
    "author": "ജോൺസൺ വേലുപാടം (എച്ച്&സി)",
    "stockNumber": 92,
    "price": 10.0,
    "image": "books/92.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗാന്ധിജി-നമ്മുടെ രാഷ്ട്ര പിതാവ്",
    "name_en": "Gaandhiji-nammutè raashtra pitaav",
    "author": "എച്ച്&സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 93,
    "price": 10.0,
    "image": "books/93.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്ത്യയിലെ ഉത്സവങ്ങൾ",
    "name_en": "Intyayilè utsava~n~naൾ",
    "author": "എച്ച്&സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 94,
    "price": 10.0,
    "image": "books/94.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്ത്യയിലെ ഉത്സവങ്ങൾ",
    "name_en": "Intyayilè utsava~n~naൾ",
    "author": "എച്ച്&സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 95,
    "price": 10.0,
    "image": "books/95.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലോക പ്രസിദ്ധ വ്യക്തിത്വങ്ങൾ",
    "name_en": "Loka prasiddha vyaktitva~n~naൾ",
    "author": "എച്ച്&സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 96,
    "price": 10.0,
    "image": "books/96.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നമ്മുടെ സാഹിത്യ നായകർ",
    "name_en": "Nammutè saahitya naayakaർ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 97,
    "price": 10.0,
    "image": "books/97.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുസൃതി കണക്കുകൾ",
    "name_en": "Kusrriti kanakkukaൾ",
    "author": "എൻ.മൂസ കുട്ടി (എച്ച്&സി)",
    "stockNumber": 98,
    "price": 10.0,
    "image": "books/98.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു രഹസ്യാന്വേഷണ ഡയറി കുറിപ്പുകൾ",
    "name_en": "Òru rahasyaanveshana dayari kurippukaൾ",
    "author": "വി.ആർ.ഹർഷൻ (എച്ച്&സി)",
    "stockNumber": 99,
    "price": 10.0,
    "image": "books/99.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പഞ്ചതന്ത്രം കഥകൾ",
    "name_en": "Pa~nchatantram kathakaൾ",
    "author": "എച്ച്&സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 100,
    "price": 11.0,
    "image": "books/100.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉണ്ണിക്കഥകളും കവിതകളും",
    "name_en": "Unnikkathakalum kavitakalum",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 101,
    "price": "10",
    "image": "books/101.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഈസോപ്പു കഥകൾ",
    "name_en": "Eesoppu kathakaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 102,
    "price": "10",
    "image": "books/102.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അറബിക് കഥകൾ",
    "name_en": "Arabik kathakaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 103,
    "price": "10",
    "image": "books/103.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കണ്ടഹാറീലെ മാതള നാരങ്ങകൾ",
    "name_en": "Kantahaareelè maatala naara~n~nakaൾ",
    "author": "സാര ബഗ് വെയർ",
    "stockNumber": 104,
    "price": "50",
    "image": "books/104.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലാൽ ബാഗിൻ്റെ ഓർമ്മയ്ക്",
    "name_en": "Laaൽ baagiൻrè oർmmayk",
    "author": "കെ.വി. കുന്നപ്പൻ",
    "stockNumber": 105,
    "price": "40",
    "image": "books/105.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉപ്പു തോട്ട് കർപ്പൂരം വരെ",
    "name_en": "Uppu tott kaർppooram varè",
    "author": "പ്രൊഫ.എസ്.ശിവദാസ്",
    "stockNumber": 106,
    "price": "35",
    "image": "books/106.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മൂന്ന് ചോറുരുലകൾ",
    "name_en": "Moonn chorurulakaൾ",
    "author": "ജ്യോതിസ് ശ്രീ ആർ.എസ്.",
    "stockNumber": 107,
    "price": "30",
    "image": "books/107.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മൃഗ ശാല കഥ",
    "name_en": "Mrriga shaala katha",
    "author": "എഡ്വേർഡ് ആൽബി (വിവ മുരളി)",
    "stockNumber": 108,
    "price": "30",
    "image": "books/108.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എന്ത്? എങ്ങെനെ? ഏന്ത് കൊണ്ട്?",
    "name_en": "Ènt? è~n~nènè? ent kònt?",
    "author": "ജോർജ് ഇമ്മട്ടി",
    "stockNumber": 109,
    "price": "5",
    "image": "books/109.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കഥ: ടി.വി.കൊച്ചു ബാവ",
    "name_en": "Katha: ti.vi.kòchchu baava",
    "author": "ടി.വി.കൊച്ചു ബാവ",
    "stockNumber": 110,
    "price": "55",
    "image": "books/110.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുഞ്ഞിക്കഥകൾ",
    "name_en": "Ku~n~nikkathakaൾ",
    "author": "ഗിരീഷ്.സി.കെ",
    "stockNumber": 111,
    "price": "12",
    "image": "books/111.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നവീന പാചകം",
    "name_en": "Naveena paachakam",
    "author": "എച്ച്&സി",
    "stockNumber": 112,
    "price": "10",
    "image": "books/112.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എനിക്കും ജീവിക്കണം",
    "name_en": "Ènikkum jeevikkanam",
    "author": "പി.കേശവ ദേവ്",
    "stockNumber": 113,
    "price": "55",
    "image": "books/113.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നമ്മുടെ പാമ്പുകൾ",
    "name_en": "Nammutè paampukaൾ",
    "author": "P.P.K.പൊതുവാൾ",
    "stockNumber": 114,
    "price": "20",
    "image": "books/114.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രകൃതി പാഠം",
    "name_en": "Prakrriti paatham",
    "author": "ദേശാഭിമാനി അക്ഷരമുറ്റം",
    "stockNumber": 115,
    "price": "60",
    "image": "books/115.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്വാതന്ത്ര്യ സമര ക്വിസ്",
    "name_en": "Svaatantrya samara kvis",
    "author": "ഡോ.സുമലത",
    "stockNumber": 116,
    "price": "12",
    "image": "books/116.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാർക്‌സിസം: ഒരു പാടപുസ്തകം",
    "name_en": "Maaർk‌sisam: òru paatapustakam",
    "author": "ഇ.എം.എസ് നമ്പൂതിരിപ്പാട്",
    "stockNumber": 117,
    "price": "75",
    "image": "books/117.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വാന പ്രസ്ഥം",
    "name_en": "Vaana prastham",
    "author": "എം.ടി. വാസുദേവൻ നായർ",
    "stockNumber": 118,
    "price": "22",
    "image": "books/118.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാനശക്തി",
    "name_en": "Maanashakti",
    "author": "എൻ.കുമാരനാശൻ",
    "stockNumber": 119,
    "price": "35",
    "image": "books/119.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പിറക്കത്ത കുഞ്ഞിൻ്റെ ശ്രാദ്ധം",
    "name_en": "Pirakkatta ku~n~niൻrè shraaddham",
    "author": "വിവ. കെ.പി. ഉണ്ണി",
    "stockNumber": 120,
    "price": "50",
    "image": "books/120.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജീവിതത്തിൻ്റെ ആൽക്കമി",
    "name_en": "Jeevitattiൻrè aaൽkkami",
    "author": "എ.വി സന്തോഷ് കുമാർ",
    "stockNumber": 121,
    "price": "35",
    "image": "books/121.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "യുക്തി ചിന്ത",
    "name_en": "Yukti chinta",
    "author": "രാജഗോപാൽ വാഗതനം",
    "stockNumber": 122,
    "price": "60",
    "image": "books/122.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അടിത്തട്ടിലെ ആരവങ്ങൽ",
    "name_en": "Atittattilè aarava~n~naൽ",
    "author": "പി.വി.കെ.പനയാൽ",
    "stockNumber": 123,
    "price": "45",
    "image": "books/123.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കതിവന്നൂർ വീരൻ",
    "name_en": "Kativannooർ veeraൻ",
    "author": "എ.കെ.കുഞ്ഞിരാമൻ പണിക്കർ",
    "stockNumber": 124,
    "price": "40",
    "image": "books/124.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ടിൻ്റു മോൻ ജോക്ക്സ്",
    "name_en": "Tiൻru moൻ jokks",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 125,
    "price": "10",
    "image": "books/125.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ടിൻ്റു മോൻ ജോക്ക്സ്",
    "name_en": "Tiൻru moൻ jokks",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 126,
    "price": "10",
    "image": "books/126.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിങ്ങൽകൂം ബ്യൂട്ടിഷ്യനാകാം",
    "name_en": "Ni~n~naൽkoom byoottishyanaakaam",
    "author": "ജോസഫ് ജോൺ",
    "stockNumber": 127,
    "price": "10",
    "image": "books/127.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളത്തിലെ പ്രധാന ക്ഷേത്രങ്ങളീലൂടെ",
    "name_en": "Keralattilè pradhaana kshetra~n~naleelootè",
    "author": "കുഞ്ഞി കുട്ടൻ ഇലയത്ത്",
    "stockNumber": 128,
    "price": "10",
    "image": "books/128.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിങ്ങൾക്കും വിജയം നേടാം",
    "name_en": "Ni~n~naൾkkum vijayam netaam",
    "author": "മാർട്ടിൻ പയ്യപ്പിള്ളി",
    "stockNumber": 129,
    "price": "10",
    "image": "books/129.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രശസ്തരുടെ പ്രസിദ്ധ കഥകൾ",
    "name_en": "Prashastarutè prasiddha kathakaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 130,
    "price": "10",
    "image": "books/130.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രസംഗകല കുട്ടീകൾക്ക്",
    "name_en": "Prasamgakala kutteekaൾkk",
    "author": "ഷാജി മാലിപ്പാറ",
    "stockNumber": 131,
    "price": "10",
    "image": "books/131.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പക്ഷികൾ ചിറകുള്ള സേവകർ",
    "name_en": "Pakshikaൾ chirakulla sevakaർ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 132,
    "price": "10",
    "image": "books/132.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുഞ്ചൻ നമ്പ്യാരുടെ ഫലിതങ്ങൾ",
    "name_en": "Ku~nchaൻ nampyaarutè phalita~n~naൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 133,
    "price": "10",
    "image": "books/133.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നമ്പൂതിരി ഫലിതങ്ങൾ",
    "name_en": "Nampootiri phalita~n~naൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 134,
    "price": "10",
    "image": "books/134.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലോക പ്രശസ്ത തത്വചിന്തകൻമാർ",
    "name_en": "Loka prashasta tatvachintakaൻmaaർ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 135,
    "price": "10",
    "image": "books/135.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സർദാർജി ഫലിതങ്ങൾ",
    "name_en": "Saർdaaർji phalita~n~naൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 136,
    "price": "10",
    "image": "books/136.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കമ്പ്യൂട്ടർ കമ്പ്യൂട്ടർ",
    "name_en": "Kampyoottaർ kampyoottaർ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 137,
    "price": "10",
    "image": "books/137.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "1001 കടം കഥകൾ",
    "name_en": "1001 katam kathakaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 138,
    "price": "10",
    "image": "books/138.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്വർണ താടി",
    "name_en": "Svaർna taati",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 139,
    "price": "10",
    "image": "books/139.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അലവുദീനും അൽഭുദ വിളക്കും",
    "name_en": "Alavudeenum aൽbhuda vilakkum",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 140,
    "price": "10",
    "image": "books/140.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇരുപത് ഇതിഹാസ കഥകൾ",
    "name_en": "Irupat itihaasa kathakaൾ",
    "author": "എ.വി.ബി.കാവിൽപാട്",
    "stockNumber": 141,
    "price": "10",
    "image": "books/141.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിപരീതപദ  ദീപിക",
    "name_en": "Vipareetapada  deepika",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 142,
    "price": "10",
    "image": "books/142.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്ത്യയിലെ ഉത്സവങ്ങൾ",
    "name_en": "Intyayilè utsava~n~naൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 143,
    "price": "10",
    "image": "books/143.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പരുന്തിനെ തോൽപിച്ച കുട്ടി",
    "name_en": "Paruntinè toൽpichcha kutti",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 145,
    "price": "10",
    "image": "books/145.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉപന്യാസ മഞ്ജരി",
    "name_en": "Upanyaasa ma~njari",
    "author": "വല്ലച്ചിറ രാമചന്ദ്രൻ കെ.പി. ഹരിദാസ്",
    "stockNumber": 146,
    "price": "10",
    "image": "books/146.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളത്തിലെ മഹത്തായ വ്യക്തികൾ",
    "name_en": "Keralattilè mahattaaya vyaktikaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 147,
    "price": "10",
    "image": "books/147.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാജിക് മാജിക്",
    "name_en": "Maajik maajik",
    "author": "ബിജോ ബലികുളം",
    "stockNumber": 148,
    "price": "10",
    "image": "books/148.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദശാവതാര കഥകൾ",
    "name_en": "Dashaavataara kathakaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 149,
    "price": "10",
    "image": "books/149.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആലിബാബയും 41 കള്ളന്മാരും",
    "name_en": "Aalibaabayum 41 kallanmaarum",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 150,
    "price": "10",
    "image": "books/150.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മർമ്മ ചികിൽത്സയും ന്യൂറോളജിയും",
    "name_en": "Maർmma chikiൽtsayum nyoorolajiyum",
    "author": "ഡോ.കെ.ആർ.രാമൻ നമ്പൂതിരി",
    "stockNumber": 151,
    "price": "10",
    "image": "books/151.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഔഷധ നിർമ്മാണ രഹസ്യം",
    "name_en": "Aushadha niർmmaana rahasyam",
    "author": "ഡോ.കെ.ആർ.രാമൻ നമ്പൂതിരി",
    "stockNumber": 152,
    "price": "10",
    "image": "books/152.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അമ്മ",
    "name_en": "Amma",
    "author": "മക്‌സിം ഗോർക്കി",
    "stockNumber": 153,
    "price": "10",
    "image": "books/153.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉണ്ണിക്കണ്ണൻ്റെ ഉണ്ണിക്കഥകൾ",
    "name_en": "Unnikkannaൻrè unnikkathakaൾ",
    "author": "കുഞ്ഞിക്കുട്ടൻ ഇലയത്ത്",
    "stockNumber": 154,
    "price": "10",
    "image": "books/154.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഫെഡറിക് എംഗെൽസ്",
    "name_en": "Phèdarik èmgèൽs",
    "author": "യെവ്ജെനിയ സ്റ്റെപനോവ",
    "stockNumber": 155,
    "price": "10",
    "image": "books/155.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അറീഞ്ഞിരിക്കെണ്ട നിയമങ്ങളും പൊതുവിവരങ്ങളും",
    "name_en": "Aree~n~nirikkènta niyama~n~nalum pòtuvivara~n~nalum",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 156,
    "price": "10",
    "image": "books/156.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചരിത്ര ക്വിസ്",
    "name_en": "Charitra kvis",
    "author": "ജോബി ജോസ്",
    "stockNumber": 157,
    "price": "10",
    "image": "books/157.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇതിഹാസ കൗതുകങ്ങൾ",
    "name_en": "Itihaasa kaൗtuka~n~naൾ",
    "author": "കെ.ആർ. ചിത്തംഭരൻ",
    "stockNumber": 158,
    "price": "10",
    "image": "books/158.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അമേരിക്ക-ഒബാമ വരെ",
    "name_en": "Amerikka-òbaama varè",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 159,
    "price": "10",
    "image": "books/159.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളത്തിലെ മുത്ത കഥകൾ",
    "name_en": "Keralattilè mutta kathakaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 160,
    "price": "10",
    "image": "books/160.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അലവുദീനും അൽഭുദ വിളക്കും",
    "name_en": "Alavudeenum aൽbhuda vilakkum",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 161,
    "price": "10",
    "image": "books/161.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ധർമ്മ പുത്രൻ",
    "name_en": "Dhaർmma putraൻ",
    "author": "എ.വി.ബി.കാവിൽപാട്",
    "stockNumber": 162,
    "price": "10",
    "image": "books/162.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആശാൻ, ഉള്ളൂർ, വള്ളത്തോൾ",
    "name_en": "Aashaaൻ, ullooർ, vallattoൾ",
    "author": "എം.എസ്.ഏലിയമ്മ",
    "stockNumber": 163,
    "price": "38",
    "image": "books/163.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലയാളം അക്ഷരമാല",
    "name_en": "Malayaalam aksharamaala",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 164,
    "price": "10",
    "image": "books/164.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തയ്യൽ പഠനം ഇനി വീട്ടീലും",
    "name_en": "Tayyaൽ pathanam ini veetteelum",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 165,
    "price": "10",
    "image": "books/165.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരള യാത്ര",
    "name_en": "Kerala yaatra",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 166,
    "price": "10",
    "image": "books/166.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒറ്റമൂലികൾ",
    "name_en": "Òrramoolikaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 167,
    "price": "10",
    "image": "books/167.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കറുത്ത പൂച്ചകൾ , ചുവന്ന പൂച്ചകൾ",
    "name_en": "Karutta poochchakaൾ , chuvanna poochchakaൾ",
    "author": "കെ.എം.റോയ്",
    "stockNumber": 168,
    "price": "65",
    "image": "books/168.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒ.വി. വിജയൻ -ഒരു ഓർമ്മ പുസ്തകം",
    "name_en": "Ò.vi. vijayaൻ -òru oർmma pustakam",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 169,
    "price": "90",
    "image": "books/169.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചിരിക്കാം , ചിന്തിക്കാം",
    "name_en": "Chirikkaam , chintikkaam",
    "author": "ചെമ്മനം ചാക്കോ",
    "stockNumber": 170,
    "price": "65",
    "image": "books/170.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പത്താം ഉദയം",
    "name_en": "Pattaam udayam",
    "author": "ഡി.വിനയചന്ദ്രൻ",
    "stockNumber": 171,
    "price": "80",
    "image": "books/171.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ക്യൂബ",
    "name_en": "Kyooba",
    "author": "ജി.വി.ആർ. കൃഷ്ണയ്യർ",
    "stockNumber": 172,
    "price": "60",
    "image": "books/172.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചൈനീസ് നാടോടി കഥകൾ",
    "name_en": "Chainees naatoti kathakaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 173,
    "price": "20",
    "image": "books/173.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുയലിൻ്റെ ബുദ്ധി",
    "name_en": "Muyaliൻrè buddhi",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 174,
    "price": "20",
    "image": "books/174.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നവീന പാചകം",
    "name_en": "Naveena paachakam",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 175,
    "price": "10",
    "image": "books/175.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്വപ്നം",
    "name_en": "Svapnam",
    "author": "ജാസ്മിന .എം.ബി.",
    "stockNumber": 176,
    "price": "40",
    "image": "books/176.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മൊബൈൽ ഫോൺ പ്രവർത്തനവും ഉഭയോഗവും",
    "name_en": "Mòbaiൽ phoൺ pravaർttanavum ubhayogavum",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 177,
    "price": "10",
    "image": "books/177.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലോക പ്രശസ്ത വ്യക്തിത്ങ്ങൾ",
    "name_en": "Loka prashasta vyaktit~n~naൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 178,
    "price": "10",
    "image": "books/178.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തിരഞ്ഞെടുത്ത നർമ്മ കഥകൾ",
    "name_en": "Tira~n~nètutta naർmma kathakaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 179,
    "price": "10",
    "image": "books/179.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പഴഞ്ചൊല്ലുകൾ",
    "name_en": "Pazha~nchòllukaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 180,
    "price": "10",
    "image": "books/180.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പൊൻമുട്ടയിടുന്ന തറവ്",
    "name_en": "Pòൻmuttayitunna tarav",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 181,
    "price": "10",
    "image": "books/181.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അരിവാണൂ ധനം",
    "name_en": "Arivaanoo dhanam",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 182,
    "price": "10",
    "image": "books/182.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രേഖാ ജ്യോതിഷം",
    "name_en": "Rekhaa jyotisham",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 183,
    "price": "10",
    "image": "books/183.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആരയിരം പേരുകൾ",
    "name_en": "Aarayiram perukaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 184,
    "price": "10",
    "image": "books/184.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രശസ്ത സാഹിത്യകാരന്മാർ",
    "name_en": "Prashasta saahityakaaranmaaർ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 185,
    "price": "10",
    "image": "books/185.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇൻ്റർനെറ്റ്",
    "name_en": "Iൻraർnèrr",
    "author": "ജോൺസൺ വേലുപാടം",
    "stockNumber": 186,
    "price": "10",
    "image": "books/186.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിങ്ങൾക്കും വിജയം നേടാം",
    "name_en": "Ni~n~naൾkkum vijayam netaam",
    "author": "മാർട്ടിൻ പയ്യപ്പിള്ളി",
    "stockNumber": 187,
    "price": "10",
    "image": "books/187.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നാനാർത്ത പ്രവേശനിക",
    "name_en": "Naanaaർtta praveshanika",
    "author": "എൻ.കൃഷ്ണ പിഷാരടി",
    "stockNumber": 188,
    "price": "10",
    "image": "books/188.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പഠന പ്രൊജെക്റ്റുകൾ -എന്ത്? എങ്ങനേ?",
    "name_en": "Pathana pròjèkrrukaൾ -ènt? è~n~nane?",
    "author": "ബിറ്റർ.സി.മുക്കോലക്കൽ",
    "stockNumber": 189,
    "price": "10",
    "image": "books/189.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അരിഞ്ഞിരിക്കെണ്ട നിയമങ്ങളും പൊതുവിവരങ്ങളും",
    "name_en": "Ari~n~nirikkènta niyama~n~nalum pòtuvivara~n~nalum",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 190,
    "price": "10",
    "image": "books/190.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹൈന്ധവർ അറിഞ്ഞിരിക്കെണ്ട ആചാര അനുഷ്ടാനങ്ങൾ",
    "name_en": "Haindhavaർ ari~n~nirikkènta aachaara anushtaana~n~naൾ",
    "author": "കുഞ്ഞിക്കുട്ടൻ ഇളയത്ത്",
    "stockNumber": 191,
    "price": "10",
    "image": "books/191.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നാലമ്പല ദർശനം",
    "name_en": "Naalampala daർshanam",
    "author": "ഡോ.ടി.ആർ.ശങ്കുണ്ണി",
    "stockNumber": 192,
    "price": "10",
    "image": "books/192.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നീതിസാര കഥകൾ",
    "name_en": "Neetisaara kathakaൾ",
    "author": "ബാജിഷ് സിദ്ധാർത്ഥ്",
    "stockNumber": 193,
    "price": "10",
    "image": "books/193.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളത്തിലെ മുത്തശി കഥകൾ",
    "name_en": "Keralattilè muttashi kathakaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 194,
    "price": "10",
    "image": "books/194.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്ത്യൻ മഹാവ്യക്തികൾ",
    "name_en": "Intyaൻ mahaavyaktikaൾ",
    "author": "എൻ.മൂസ കുട്ടി (എച്ച്&സി)",
    "stockNumber": 195,
    "price": "10",
    "image": "books/195.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "2222 ക്വിസ്",
    "name_en": "2222 kvis",
    "author": "ജോബി ജോസ്",
    "stockNumber": 196,
    "price": "10",
    "image": "books/196.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "100 നാടൻ പാട്ടുകൾ",
    "name_en": "100 naataൻ paattukaൾ",
    "author": "അയ്യപ്പ ദാസ്",
    "stockNumber": 197,
    "price": "10",
    "image": "books/197.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ധർമ്മ പുത്രർ",
    "name_en": "Dhaർmma putraർ",
    "author": "എ.ബി.വി. കാവിൽപ്പാട്",
    "stockNumber": 198,
    "price": "10",
    "image": "books/198.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളത്തിലെ മുത്തശികൾ",
    "name_en": "Keralattilè muttashikaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 199,
    "price": "10",
    "image": "books/199.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തയ്യൽ പഠനം ഇനി വീട്ടിൽ",
    "name_en": "Tayyaൽ pathanam ini veettiൽ",
    "author": "ജയകുമാരി .എസ്",
    "stockNumber": 200,
    "price": "10",
    "image": "books/200.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളം -അറിയാൻ",
    "name_en": "Keralam -ariyaaൻ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 201,
    "price": "10",
    "image": "books/201.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രസകരമായ ബാല കഥകൾ",
    "name_en": "Rasakaramaaya baala kathakaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 202,
    "price": "10",
    "image": "books/202.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളത്തിൻ്റെ സാംസ്കാരിക ചരിത്രം",
    "name_en": "Keralattiൻrè saamskaarika charitram",
    "author": "പി.കെ. ഗോപാല കൃഷ്ണൻ",
    "stockNumber": 203,
    "price": "35",
    "image": "books/203.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ട്രാൻസിസ്റ്റർ റിപ്പയറിങ്",
    "name_en": "Traaൻsisrraർ rippayari~n",
    "author": "ബാലാജി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 204,
    "price": "75.5",
    "image": "books/204.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സംഖ്യ ജ്യോതിഷം",
    "name_en": "Samkhya jyotisham",
    "author": "ജി.കെ. ഇരിങ്ങാലക്കുട",
    "stockNumber": 205,
    "price": "10",
    "image": "books/205.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നരസിംഹാവതാരം",
    "name_en": "Narasimhaavataaram",
    "author": "കൊച്ചനിയൻ ഏരൂർ",
    "stockNumber": 206,
    "price": "11",
    "image": "books/206.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒറിഗാമി",
    "name_en": "Òrigaami",
    "author": "സുബിൻ",
    "stockNumber": 207,
    "price": "12",
    "image": "books/207.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കവിതകളും കവിതാശകലങ്ങളും",
    "name_en": "Kavitakalum kavitaashakala~n~nalum",
    "author": "എ.ബി.വി.കാവിൽപ്പാട്",
    "stockNumber": 208,
    "price": "13",
    "image": "books/208.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മര്യാദ രാമൻ കഥകൾ",
    "name_en": "Maryaada raamaൻ kathakaൾ",
    "author": "എ.ബി.വി.കാവിൽപ്പാട്",
    "stockNumber": 209,
    "price": "10",
    "image": "books/209.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വി.എസ്.വലിയ പടത്തലവൻ",
    "name_en": "Vi.ès.valiya patattalavaൻ",
    "author": "അവന്തി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 210,
    "price": "30",
    "image": "books/210.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "യോഗപഠനവും പരിശീലനവും",
    "name_en": "Yogapathanavum parisheelanavum",
    "author": "പ്രദീപ് കുമാർ കുണിയാൻ",
    "stockNumber": 211,
    "price": "10",
    "image": "books/211.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പി.കണ്ണൻ നായർ",
    "name_en": "Pi.kannaൻ naayaർ",
    "author": "ജി.ഡി.നായർ",
    "stockNumber": 212,
    "price": "70",
    "image": "books/212.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹിറ്റ്‌ലർ പറഞ്ഞ സത്യങ്ങൾ",
    "name_en": "Hirr‌laർ para~n~na satya~n~naൾ",
    "author": "ടി.എ. മാത്യൂസ്",
    "stockNumber": 213,
    "price": "30",
    "image": "books/213.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചോരയുടെ കഥ",
    "name_en": "Chorayutè katha",
    "author": "നാഷണൽ ബുക്ക് ട്രസ്റ്റ്",
    "stockNumber": 214,
    "price": "11",
    "image": "books/214.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിദ്യഭ്യാസം",
    "name_en": "Vidyabhyaasam",
    "author": "ശ്രീ വിവേകാനന്ദ സ്വാമികൾ",
    "stockNumber": 215,
    "price": "10",
    "image": "books/215.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉണർവ്വോലും ചിന്തകൾ",
    "name_en": "Unaർvvolum chintakaൾ",
    "author": "എ.പി.ജെ. അബ്ദുൾ കലാം",
    "stockNumber": 216,
    "price": "50",
    "image": "books/216.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "യേശു ക്രിസ്തുവിൻ്റെ പുതിയ നിയമം",
    "name_en": "Yeshu kristuviൻrè putiya niyamam",
    "author": "ദി ഗിഡിയൻസ് ഇൻ്റർനാഷണൽ",
    "stockNumber": 217,
    "price": null,
    "image": "books/217.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്തോ -അമേരിക്കൻ ആണവ സഹകരണം  ഇടത്തുപക്ഷ നിലപാട്",
    "name_en": "Into -amerikkaൻ aanava sahakaranam  itattupaksha nilapaat",
    "author": "ചിന്ദ പബ്ലിക്കേഷൻസ്",
    "stockNumber": 218,
    "price": "20",
    "image": "books/218.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "101 മഹാൻമാർ",
    "name_en": "101 mahaaൻmaaർ",
    "author": "ഷാരോൺ ബുക്കുകൾ",
    "stockNumber": 219,
    "price": "10",
    "image": "books/219.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുസൃതി കണക്കുകൾ",
    "name_en": "Kusrriti kanakkukaൾ",
    "author": "ജിൻസി മാത്യു",
    "stockNumber": 220,
    "price": "10",
    "image": "books/220.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്ദ്രജാലം",
    "name_en": "Indrajaalam",
    "author": "പ്രസാദ് അമൂർ",
    "stockNumber": 221,
    "price": "10",
    "image": "books/221.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹിപ്നോട്ടിസം",
    "name_en": "Hipnottisam",
    "author": "മാസ്റ്റർ എസ് ശിവാനന്ദൻ",
    "stockNumber": 222,
    "price": "18",
    "image": "books/222.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്പൊക്കൺ ഇംഗ്ലീഷ്",
    "name_en": "Spòkkaൺ imgleesh",
    "author": "യാത്രാ പുസ്തകങ്ങൾ",
    "stockNumber": 223,
    "price": "5",
    "image": "books/223.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളീയ കലകൾ",
    "name_en": "Keraleeya kalakaൾ",
    "author": "ഷാരോൺ ബുക്സ്",
    "stockNumber": 224,
    "price": "10",
    "image": "books/224.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരള സംസ്ഥാന സർവീസും സംസ്ഥാന സബോർഡിനേറ്റ് സർവീസും സംബന്ധിച്ച ചട്ടങ്ങൾ",
    "name_en": "Kerala samsthaana saർveesum samsthaana saboർdinerr saർveesum sambandhichcha chatta~n~naൾ",
    "author": "അവന്തി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 225,
    "price": "55",
    "image": "books/225.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നവയുഗ ചിന്ത",
    "name_en": "Navayuga chinta",
    "author": "ഡോ.കെ.മഹേശ്വരൻ നായർ",
    "stockNumber": 226,
    "price": "10",
    "image": "books/226.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇരകൾ വേട്ടയാടപ്പേടുമ്പോൾ",
    "name_en": "Irakaൾ vettayaatappetumpoൾ",
    "author": "പി.എസ്. അച്യുദാനന്ദൻ",
    "stockNumber": 227,
    "price": "25",
    "image": "books/227.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാർക്ക്സ് എംഗൽസ് തിരഞ്ഞെടുത്ത കൃതികൾ - 4",
    "name_en": "Maaർkks èmgaൽs tira~n~nètutta krritikaൾ - 4",
    "author": "പ്രഭാത് ബുക്സ് ഹൗസ്",
    "stockNumber": 228,
    "price": null,
    "image": "books/228.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രാദേശികഭരണം: സംശയങ്ങളും വിശധീകരണങ്ങളും",
    "name_en": "Praadeshikabharanam: samshaya~n~nalum vishadheekarana~n~nalum",
    "author": "കില",
    "stockNumber": 229,
    "price": null,
    "image": "books/229.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പാർട്ടി പരിപ്പാടി",
    "name_en": "Paaർtti parippaati",
    "author": "ചിന്ത പബ്ലിക്കേഷൻസ്",
    "stockNumber": 230,
    "price": "20",
    "image": "books/230.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സിപിഐ(എം) ഭരണഘടന",
    "name_en": "Sipiai(èm) bharanaghatana",
    "author": "ചിന്ത പബ്ലിക്കേഷൻസ്",
    "stockNumber": 231,
    "price": "10",
    "image": "books/231.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "1001 കടംകഥകൾ",
    "name_en": "1001 katamkathakaൾ",
    "author": "ജോബി ജോസ്",
    "stockNumber": 232,
    "price": "10",
    "image": "books/232.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജന്മനക്ഷത്ര ഫലങ്ങളും നവ ഗ്രഹദോഷ ശാന്തിയും",
    "name_en": "Janmanakshatra phala~n~nalum nava grahadosha shaantiyum",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 233,
    "price": "10",
    "image": "books/233.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗ്രാമറും കോമ്പോസിഷനും",
    "name_en": "Graamarum komposishanum",
    "author": "സെഞ്ച്വറി പ്രസിദ്ധീകരണങ്ങൾ",
    "stockNumber": 234,
    "price": "10",
    "image": "books/234.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹൗസ് വയറിംഗ്",
    "name_en": "Haൗs vayarimg",
    "author": "ബാലാജി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 235,
    "price": "12",
    "image": "books/235.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കിട്ടുന്നത്തിൽ പാതി",
    "name_en": "Kittunnattiൽ paati",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 236,
    "price": "10",
    "image": "books/236.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹാർട്ട് അറ്റാക്ക് ",
    "name_en": "Haaർtt arraakk ",
    "author": "ഡോ.പി ടി ഇഖ്ബാൽ",
    "stockNumber": 237,
    "price": "10",
    "image": "books/237.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബുദ്ധിയാണു ശക്തി",
    "name_en": "Buddhiyaanu shakti",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 238,
    "price": "10",
    "image": "books/238.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പൂവൻ കൂവാതായപ്പോൾ",
    "name_en": "Poovaൻ koovaataayappoൾ",
    "author": "മടവൂർ ശശി",
    "stockNumber": 239,
    "price": "10",
    "image": "books/239.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അൽഭുത പ്രതിഭകളായ ഗണിത ശാസ്ത്രജ്ഞന്മാര്‍",
    "name_en": "Aൽbhuta pratibhakalaaya ganita shaastraj~nanmaar‍",
    "author": "ജോർജ്ജ് ഇമ്മട്ടി",
    "stockNumber": 240,
    "price": "10",
    "image": "books/240.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കമ്പ്യൂട്ടർ നിഘണ്ടു",
    "name_en": "Kampyoottaർ nighantu",
    "author": "ജോൺസൺ വേലുപാടം (എച്ച്&സി)",
    "stockNumber": 241,
    "price": "10",
    "image": "books/241.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സംഖ്യകൾ ആത്മകഥ പറയുന്നു",
    "name_en": "Samkhyakaൾ aatmakatha parayunnu",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 242,
    "price": "10",
    "image": "books/242.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുസൃതി കണക്കുകൾ",
    "name_en": "Kusrriti kanakkukaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 243,
    "price": "10",
    "image": "books/243.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വംശനാശം നെരിടുന്ന ജന്തുക്കൽ",
    "name_en": "Vamshanaasham nèritunna jantukkaൽ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 244,
    "price": "10",
    "image": "books/244.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "യോഗാസനം",
    "name_en": "Yogaasanam",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 245,
    "price": "10",
    "image": "books/245.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗൃഹ ചികിത്സ നാട്ടറിവിലൂടെ",
    "name_en": "Grriha chikitsa naattarivilootè",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 246,
    "price": "10",
    "image": "books/246.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇംഗ്ലീഷ്-മലയാളം സമാനപദങ്ങൾ",
    "name_en": "Imgleesh-malayaalam samaanapada~n~naൾ",
    "author": "എൻ.മൂസക്കുട്ടി",
    "stockNumber": 247,
    "price": "10",
    "image": "books/247.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നാടൻ വാമൊഴികൾ",
    "name_en": "Naataൻ vaamòzhikaൾ",
    "author": "എ.ബി.വി.കാവിൽപ്പാട്",
    "stockNumber": 248,
    "price": "10",
    "image": "books/248.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "HINDI-ENGLISH-MALAYALAM DICTIONARY",
    "name_en": "Heendee-engleesh-maalaayaalaam deecteeonaary",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 249,
    "price": "10",
    "image": "books/249.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഔഷധ സസ്യങ്ങൾ",
    "name_en": "Aushadha sasya~n~naൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 250,
    "price": "10",
    "image": "books/250.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അഭിനവ ഗണിത പ്രേസ്നോത്തരി",
    "name_en": "Abhinava ganita presnottari",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 251,
    "price": "10",
    "image": "books/251.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സൗരയൂഥം",
    "name_en": "Saൗrayootham",
    "author": "ജി ജി ജെയിംസ്",
    "stockNumber": 252,
    "price": "10",
    "image": "books/252.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വീർബൽ കഥകൾ",
    "name_en": "Veeർbaൽ kathakaൾ",
    "author": "എ.ബി.വി.കാവിൽപാട്",
    "stockNumber": 253,
    "price": "10",
    "image": "books/253.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അത്ഭുത ഔഷധ ചെടികൾ",
    "name_en": "Atbhuta aushadha chètikaൾ",
    "author": "ഡോ.കെ.ആർ.രാമൻ",
    "stockNumber": 254,
    "price": "10",
    "image": "books/254.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രോഗങ്ങൽ അറിയാൻ, അകറ്റാൻ",
    "name_en": "Roga~n~naൽ ariyaaൻ, akarraaൻ",
    "author": "എച്ച്&സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 255,
    "price": "10",
    "image": "books/255.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അതിശയലോകം",
    "name_en": "Atishayalokam",
    "author": "എച്ച് & സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 256,
    "price": "10",
    "image": "books/256.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഹാഭാരത കഥകൾ",
    "name_en": "Mahaabhaarata kathakaൾ",
    "author": "എച്ച് & സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 257,
    "price": "10",
    "image": "books/257.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "108 ശിവക്ഷേത്രങ്ങൾ",
    "name_en": "108 shivakshetra~n~naൾ",
    "author": "കുഞ്ഞിക്കുട്ടൻ ഇലയത്ത്",
    "stockNumber": 258,
    "price": "10",
    "image": "books/258.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഓർമ്മ ശക്തി വാർദ്ധിപ്പിക്കുവാൻ",
    "name_en": "Oർmma shakti vaaർddhippikkuvaaൻ",
    "author": "എച്ച്&സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 259,
    "price": "10",
    "image": "books/259.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടമറ്റത്ത് കത്തനാർ",
    "name_en": "Katamarratt kattanaaർ",
    "author": "എച്ച്&സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 260,
    "price": "10",
    "image": "books/260.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനുഷ്യ ശരീരം",
    "name_en": "Manushya shareeram",
    "author": "എച്ച്&സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 261,
    "price": "10",
    "image": "books/261.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലോക പ്രശസ്ത മന: ശാസ്ത്ര കഥകൾ",
    "name_en": "Loka prashasta mana: shaastra kathakaൾ",
    "author": "എച്ച് ആൻഡ് സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 262,
    "price": "10",
    "image": "books/262.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കണക്കിലെ കളികൾ",
    "name_en": "Kanakkilè kalikaൾ",
    "author": "എൻ.ലഷിൻ",
    "stockNumber": 263,
    "price": "10",
    "image": "books/263.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അറിഞ്ഞിരിക്കെണ്ട നിയമങ്ങൾ",
    "name_en": "Ari~n~nirikkènta niyama~n~naൾ",
    "author": "എച്ച് & സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 264,
    "price": "10",
    "image": "books/264.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "2011 ജനറൽ നോളജ് ",
    "name_en": "2011 janaraൽ nolaj ",
    "author": "എച്ച്&സി പ്രസിദ്ധീകരണങ്ങൾ",
    "stockNumber": 265,
    "price": "10",
    "image": "books/265.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭാരത് രത്ന",
    "name_en": "Bhaarat ratna",
    "author": "എച്ച് & സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 266,
    "price": "10",
    "image": "books/266.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗുജറാത്തി കഥകൾ",
    "name_en": "Gujaraatti kathakaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 267,
    "price": "10",
    "image": "books/267.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പഞ്ചാബി കഥകൾ",
    "name_en": "Pa~nchaabi kathakaൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 268,
    "price": "10",
    "image": "books/268.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കോഴിയും കുറുക്കനും",
    "name_en": "Kozhiyum kurukkanum",
    "author": "എച്ച്&സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 269,
    "price": "10",
    "image": "books/269.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലോകത്ഭുതങ്ങൾ",
    "name_en": "Lokatbhuta~n~naൾ",
    "author": "എച്ച്&സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 270,
    "price": "10",
    "image": "books/270.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലോക പ്രശസ്‌ത ശാസ്ത്രജ്ഞൻമാർ",
    "name_en": "Loka prashas‌ta shaastraj~naൻmaaർ",
    "author": "എച്ച് & സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 271,
    "price": "10",
    "image": "books/271.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനുഷ്യ ശരീരം",
    "name_en": "Manushya shareeram",
    "author": "എച്ച്&സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 272,
    "price": "10",
    "image": "books/272.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രെഗ്നൻസി ഗൈഡ്",
    "name_en": "Prègnaൻsi gaid",
    "author": "എച്ച്&സി പ്രസിദ്ധീകരണങ്ങൾ",
    "stockNumber": 273,
    "price": "10",
    "image": "books/273.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിശ്വ പ്രസീദ ചിത്രകാരനും ചിത്രങ്ങളും",
    "name_en": "Vishva praseeda chitrakaaranum chitra~n~nalum",
    "author": "എച്ച് ആൻഡ് സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 274,
    "price": "10",
    "image": "books/274.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലോകാത്ഭുതങ്ങൾ",
    "name_en": "Lokaatbhuta~n~naൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 275,
    "price": "10",
    "image": "books/275.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പക്ഷികൾ ചിറകുള്ള സേവകർ",
    "name_en": "Pakshikaൾ chirakulla sevakaർ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 276,
    "price": "10",
    "image": "books/276.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രസംഗകല കുട്ടികൾക്ക്",
    "name_en": "Prasamgakala kuttikaൾkk",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 277,
    "price": "10",
    "image": "books/277.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇലക്‌ട്രോണിക്‌സ്",
    "name_en": "Ilak‌tronik‌s",
    "author": "എച്ച്&സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 278,
    "price": "10",
    "image": "books/278.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇലക്‌ട്രോണിക്‌സ് 2",
    "name_en": "Ilak‌tronik‌s 2",
    "author": "എച്ച്&സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 279,
    "price": "10",
    "image": "books/279.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശാസ്ത്ര ക്വിസ്",
    "name_en": "Shaastra kvis",
    "author": "എച്ച്&സി പ്രസിദ്ധീകരണങ്ങൾ",
    "stockNumber": 280,
    "price": "10",
    "image": "books/280.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പഴയ കലാ മലയാള ചലച്ചിത്രഗാനങ്ങൾ",
    "name_en": "Pazhaya kalaa malayaala chalachchitragaana~n~naൾ",
    "author": "എച്ച്&സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 281,
    "price": "10",
    "image": "books/281.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നാറാണത്തു ഭ്രാന്തൻ",
    "name_en": "Naaraanattu bhraantaൻ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 282,
    "price": "10",
    "image": "books/282.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "111 ബാല കഥകൾ",
    "name_en": "111 baala kathakaൾ",
    "author": "എച്ച്&സി പ്രസിദ്ധീകരണങ്ങൾ",
    "stockNumber": 283,
    "price": "10",
    "image": "books/283.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പര്യയാമല",
    "name_en": "Paryayaamala",
    "author": "എച്ച്&സി പബ്ലിക്കേഷൻസ്",
    "stockNumber": 284,
    "price": "10",
    "image": "books/284.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അപ്പോൾ എന്തു ചെയ്യണം",
    "name_en": "Appoൾ èntu chèyyanam",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 285,
    "price": "10",
    "image": "books/285.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പെരുന്തച്ചനും പാക്കനാരും",
    "name_en": "Pèruntachchanum paakkanaarum",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 286,
    "price": "10",
    "image": "books/286.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശാസ്ത്രപരീക്ഷണങ്ങൾ",
    "name_en": "Shaastrapareekshana~n~naൾ",
    "author": "എച്ച്&സി ബുക്കുകൾ",
    "stockNumber": 287,
    "price": "10",
    "image": "books/287.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നെരിപ്പോട്",
    "name_en": "Nèrippot",
    "author": "ഒ.ഭരതൻ",
    "stockNumber": 288,
    "price": "90",
    "image": "books/288.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹിന്ദു ധർമ്മ പരിജയം",
    "name_en": "Hindu dhaർmma parijayam",
    "author": "സാധു ശീലൻ ,പരമേശ്വരൻ",
    "stockNumber": 289,
    "price": "65",
    "image": "books/289.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മൗനം",
    "name_en": "Maൗnam",
    "author": "യു.ജയചന്ദ്രൻ",
    "stockNumber": 290,
    "price": "30",
    "image": "books/290.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വ്യക്തിത വികാസനത്തിലൂടെ ജീവിത വിജയം",
    "name_en": "Vyaktita vikaasanattilootè jeevita vijayam",
    "author": "പ്രൊഫ.പ്രസാദ് അമോർ",
    "stockNumber": 291,
    "price": "10",
    "image": "books/291.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കമ്പ്യൂട്ടർ ഇൻ്റർനെറ്റ്",
    "name_en": "Kampyoottaർ iൻraർnèrr",
    "author": "K.T.അബ്ദുൽ റഷീദ്",
    "stockNumber": 292,
    "price": "10",
    "image": "books/292.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഖസാക്കിന്റെ ഇതിഹാസം",
    "name_en": "Khasaakkinrè itihaasam",
    "author": "ഒ.വി.വിജയൻ",
    "stockNumber": 293,
    "price": "60",
    "image": "books/293.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "യാ ഇലാഹി",
    "name_en": "Yaa ilaahi",
    "author": "വൈക്കം മുഹമ്മദ് ബഷീർ",
    "stockNumber": 294,
    "price": "65",
    "image": "books/294.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അറിഞ്ഞിരിക്കേണ്ട പൊടികൈകൾ",
    "name_en": "Ari~n~nirikkenta pòtikaikaൾ",
    "author": "ബാബു പ്രസാദ്",
    "stockNumber": 295,
    "price": "10",
    "image": "books/295.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇസ്ലാമിലെ ചിന്താ പ്രസ്ഥാനങ്ങൾ",
    "name_en": "Islaamilè chintaa prasthaana~n~naൾ",
    "author": "വക്കം അബ്ദുൾ കാദർ",
    "stockNumber": 296,
    "price": "65",
    "image": "books/296.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കണ്ണീരും കിനാവും",
    "name_en": "Kanneerum kinaavum",
    "author": "വി.ടി.ഭട്ടതിരിപ്പാട്",
    "stockNumber": 297,
    "price": "31",
    "image": "books/297.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഈഡിപസ്",
    "name_en": "Eedipas",
    "author": "സി.ജെ. തോമസ്",
    "stockNumber": 298,
    "price": "8",
    "image": "books/298.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നവയാത്രകർ",
    "name_en": "Navayaatrakaർ",
    "author": "സുകുമാർ അഴീക്കോട്",
    "stockNumber": 299,
    "price": "110",
    "image": "books/299.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "യുവാക്കളോട്",
    "name_en": "Yuvaakkalot",
    "author": "വിവേകാനന്ദ സ്വാമികൾ",
    "stockNumber": 300,
    "price": "30",
    "image": "books/300.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഡ്രാക്കൂള",
    "name_en": "Draakkoola",
    "author": "ബ്രാംസ്റ്റോക്കർ",
    "stockNumber": 301,
    "price": "10",
    "image": "books/301.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചിലങ്ക",
    "name_en": "Chila~nka",
    "author": null,
    "stockNumber": 302,
    "price": null,
    "image": "books/302.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിയമപാഠം",
    "name_en": "Niyamapaatham",
    "author": "കെ.ഇ.എൽ.എസ്.എ.",
    "stockNumber": 303,
    "price": null,
    "image": "books/303.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നീലക്കുറുഞ്ഞി പൂത്തപ്പോൽ",
    "name_en": "Neelakkuru~n~ni poottappoൽ",
    "author": "മലയാറ്റൂർ",
    "stockNumber": 304,
    "price": "60",
    "image": "books/304.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചിക്കാഗോ പ്രസ്ങ്ങൾ",
    "name_en": "Chikkaago pras~n~naൾ",
    "author": "വിവേകാനന്ദ സ്വാമികൾ",
    "stockNumber": 305,
    "price": "10",
    "image": "books/305.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ധർമ്മപുരാണം",
    "name_en": "Dhaർmmapuraanam",
    "author": "ഒ.വി.വിജയൻ",
    "stockNumber": 306,
    "price": "75",
    "image": "books/306.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഷെർലോക്ക് ഹോംസ് സമ്പൂർണ കൃതികൾ",
    "name_en": "Shèർlokk homs sampooർna krritikaൾ",
    "author": "സർ ആർതർ കോനൻ ഡോയൽ",
    "stockNumber": 307,
    "price": "333",
    "image": "books/307.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുസ്ലിങ്ങളും അംബേദ്കറും",
    "name_en": "Musli~n~nalum ambedkarum",
    "author": "ആനന്ദ് തെൽത്തുംഡെ",
    "stockNumber": 308,
    "price": "70",
    "image": "books/308.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇവൻ എൻ്റെ പ്രിയ സി ജെ",
    "name_en": "Ivaൻ èൻrè priya si jè",
    "author": "റോസി തോമസ്",
    "stockNumber": 309,
    "price": "60",
    "image": "books/309.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കഥ സാഹിദി",
    "name_en": "Katha saahidi",
    "author": "കാലിക്കറ്റ് സർവകലാശാല",
    "stockNumber": 310,
    "price": "35",
    "image": "books/310.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇസ്ലാമിൻ്റെ പ്രസക്തി",
    "name_en": "Islaamiൻrè prasakti",
    "author": "അസ്കർ അലി എഞ്ചിനീയർ",
    "stockNumber": 311,
    "price": "22",
    "image": "books/311.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുപ്പടകൻ കൃഷ്ണൻ നമ്പ്യാർ ജന്മശദാപ്തി സ്മാരക ഗ്രന്ഥം",
    "name_en": "Kuppatakaൻ krrishnaൻ nampyaaർ janmashadaapti smaaraka grantham",
    "author": "അനുസ്മരണ സമിതി",
    "stockNumber": 312,
    "price": "50",
    "image": "books/312.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കഥാപർവ്വം",
    "name_en": "Kathaapaർvvam",
    "author": "കാലിക്കറ്റ് യൂണിവേഴ്സിറ്റി",
    "stockNumber": 313,
    "price": "28",
    "image": "books/313.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗദ്യ ശിൽപ്പി",
    "name_en": "Gadya shiൽppi",
    "author": "കാലിക്കറ്റ് യൂണിവേഴ്സിറ്റി",
    "stockNumber": 314,
    "price": "38",
    "image": "books/314.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അവലോകനങ്ങൾ",
    "name_en": "Avalokana~n~naൾ",
    "author": "അരിത്തോട്ടം പരമേശ്വരൻ",
    "stockNumber": 315,
    "price": "18",
    "image": "books/315.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റെഡ് സല്യൂട്ട്",
    "name_en": "Rèd salyoott",
    "author": "കൊടക്കാട്ട് രാഘവൻ",
    "stockNumber": 316,
    "price": "60",
    "image": "books/316.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആദുനീക ഇംഗ്ലണ്ടിൻ്റെ ഭരണഘടന ചരിതം",
    "name_en": "Aaduneeka imglantiൻrè bharanaghatana charitam",
    "author": "പ്രൊഫ.ലോറൻസ് ലോപ്പാസ്",
    "stockNumber": 317,
    "price": "14",
    "image": "books/317.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നന്മയിൽ ഉറച്ചു ഉണ്ണി ജയിച്ചു",
    "name_en": "Nanmayiൽ urachchu unni jayichchu",
    "author": "ജാനു",
    "stockNumber": 318,
    "price": "15",
    "image": "books/318.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു ഇലയുടെ ആത്മകഥ",
    "name_en": "Òru ilayutè aatmakatha",
    "author": "ആമീൻ പുറത്തീൽ",
    "stockNumber": 319,
    "price": "40",
    "image": "books/319.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "THE PERFECT CAREER",
    "name_en": "The perfect caareer",
    "author": "MAX A REGGERT",
    "stockNumber": 320,
    "price": "95",
    "image": "books/320.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സാധരം",
    "name_en": "Saadharam",
    "author": "കെ.വിഷ്ണു നാരായണൻ",
    "stockNumber": 321,
    "price": "25",
    "image": "books/321.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചുറ്റുവട്ടം",
    "name_en": "Churruvattam",
    "author": "ശ്രീ രേഖ",
    "stockNumber": 322,
    "price": "20",
    "image": "books/322.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സംഖ്യകളുടെ അത്ഭുത പ്രപഞ്ചം",
    "name_en": "Samkhyakalutè atbhuta prapa~ncham",
    "author": "പള്ളിയറ ശ്രീധരൻ",
    "stockNumber": 323,
    "price": "42",
    "image": "books/323.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പുതിയ ഇടത്തു പക്ഷം",
    "name_en": "Putiya itattu paksham",
    "author": "ബാലചന്ദ്രൻ വടക്കേടത്ത്",
    "stockNumber": 324,
    "price": "80",
    "image": "books/324.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശരിയത്തും വിമർശകരും",
    "name_en": "Shariyattum vimaർshakarum",
    "author": "സൈത്തൂൺ പബ്ലിക്കേഷൻസ്",
    "stockNumber": 325,
    "price": "30",
    "image": "books/325.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടൽ കന്യക",
    "name_en": "Kataൽ kanyaka",
    "author": "വിവ: ഡോ.എം.ഗംഗാധരൻ",
    "stockNumber": 326,
    "price": "60",
    "image": "books/326.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാൻ ഓഫ് ദ മാച്ച്",
    "name_en": "Maaൻ oph da maachch",
    "author": "സജിനി .എസ്",
    "stockNumber": 327,
    "price": "60",
    "image": "books/327.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കമ്പ്യൂട്ടർ ഉയർത്തൂന്ന പ്രെശ്ന്ങ്ങൾ",
    "name_en": "Kampyoottaർ uyaർttoonna prèshn~n~naൾ",
    "author": "കെ.ഗോപിനാഥൻ",
    "stockNumber": 328,
    "price": "10",
    "image": "books/328.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബാങ്കിൽ എൻ്റെ ജീവിതം",
    "name_en": "Baa~nkiൽ èൻrè jeevitam",
    "author": "കെ.സുകുമാരൻ",
    "stockNumber": 329,
    "price": "90",
    "image": "books/329.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭാഷാ നാരായണീയം",
    "name_en": "Bhaashaa naaraayaneeyam",
    "author": "കെ.ടി.കുഞ്ഞി കമാരൻ",
    "stockNumber": 330,
    "price": "100",
    "image": "books/330.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അപരൻ ഒരു കോമാളിയാകുന്നു",
    "name_en": "Aparaൻ òru komaaliyaakunnu",
    "author": "എസ്.എം. ഫാറൂക്ക്",
    "stockNumber": 331,
    "price": "45",
    "image": "books/331.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദേവാത്മ ഹിമാലയം",
    "name_en": "Devaatma himaalayam",
    "author": "പാല നാരായണൻ നായർ",
    "stockNumber": 332,
    "price": "20",
    "image": "books/332.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാള രാത്രികൾ",
    "name_en": "Kaala raatrikaൾ",
    "author": "വിവ: അഷ്‌റഫ് കീഴ് പറമ്പ്",
    "stockNumber": 333,
    "price": "50",
    "image": "books/333.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാനന കന്യക",
    "name_en": "Kaanana kanyaka",
    "author": "റാഫേൽ മരോക്കി",
    "stockNumber": 334,
    "price": "95",
    "image": "books/334.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചരിത്ര വീഥിയിലെ നാഴിക കല്ലുകൾ",
    "name_en": "Charitra veethiyilè naazhika kallukaൾ",
    "author": "പ്രൊഫ: സത്യപ്രകാശം",
    "stockNumber": 335,
    "price": "65",
    "image": "books/335.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പൂജ പുഷ്പങ്ങൾ",
    "name_en": "Pooja pushpa~n~naൾ",
    "author": "ദേവകി പൊതുവാർസ്യ",
    "stockNumber": 336,
    "price": "65",
    "image": "books/336.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിപിന വിസ്മയങ്ങൾ",
    "name_en": "Vipina vismaya~n~naൾ",
    "author": "ടി.കെ. മരിടം",
    "stockNumber": 337,
    "price": "75",
    "image": "books/337.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഹാനായ ജോൺ പോൾ പ്രിയപ്പേട്ട ബെനഡിക്റ്റ്",
    "name_en": "Mahaanaaya joൺ poൾ priyappetta bènadikrr",
    "author": "പി.പി.ജെയിംസ് ,വി.എസ്. രാജേഷ്",
    "stockNumber": 338,
    "price": "75",
    "image": "books/338.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹിന്ദുത്വം",
    "name_en": "Hindutvam",
    "author": "പ്രിയൻ",
    "stockNumber": 339,
    "price": "40",
    "image": "books/339.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇനി സുമിത്ര പറയട്ടെ",
    "name_en": "Ini sumitra parayattè",
    "author": "എം.ഡി.രത്‌നമ്മ",
    "stockNumber": 340,
    "price": "44",
    "image": "books/340.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഈഡിപ്സിൻ്റ് വാട്ടർ ലൂ",
    "name_en": "Eedipsiൻr vaattaർ loo",
    "author": "എ.കെ.കെ.നായന",
    "stockNumber": 341,
    "price": "55",
    "image": "books/341.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പുതിയ ബാല്യം പുതിയ തിരിച്ചറിവുകൾ",
    "name_en": "Putiya baalyam putiya tirichcharivukaൾ",
    "author": "ഡോ സി ജെ ജൊൺ",
    "stockNumber": 342,
    "price": "50",
    "image": "books/342.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിഴൽ പുര",
    "name_en": "Nizhaൽ pura",
    "author": "സുരബ്",
    "stockNumber": 343,
    "price": "40",
    "image": "books/343.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പച്ച",
    "name_en": "Pachcha",
    "author": "സച്ചിതാനന്ദൻ പുഴങ്കര",
    "stockNumber": 344,
    "price": "50",
    "image": "books/344.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു പട്ടവും കുറച്ച് വ്യാകരണവും",
    "name_en": "Òru pattavum kurachch vyaakaranavum",
    "author": "എ.സനൽ",
    "stockNumber": 345,
    "price": "65",
    "image": "books/345.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രണ ഭൂമിയിലെ മഞ്ഞ റോസാപ്പൂക്കൾ",
    "name_en": "Rana bhoomiyilè ma~n~na rosaappookkaൾ",
    "author": "വിവ: നളിനി സതീഷ്",
    "stockNumber": 346,
    "price": "90",
    "image": "books/346.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഔര ",
    "name_en": "Aura ",
    "author": "കാർലോസ് ഫെയൻ്റ് എസ്",
    "stockNumber": 347,
    "price": "45",
    "image": "books/347.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അനാർക്കലി പറയുന്നു",
    "name_en": "Anaaർkkali parayunnu",
    "author": "എസ്.ഭാസുര ചന്ദ്രൻ",
    "stockNumber": 348,
    "price": "40",
    "image": "books/348.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രോഗങ്ങളും പ്രതിവിധികളും",
    "name_en": "Roga~n~nalum pratividhikalum",
    "author": "കോട്ടക്കൽ ഗോവിന്ദൻ വൈദ്യർ (സംഭവൻ)",
    "stockNumber": 349,
    "price": "24",
    "image": "books/349.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നെഹ്‌റുവും നെഹ്‌റുയിസം വും",
    "name_en": "Nèh‌ruvum nèh‌ruyisam vum",
    "author": "എ.സുജനപാൽ",
    "stockNumber": 350,
    "price": "75",
    "image": "books/350.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അക്ഷരയാത്രകൾ",
    "name_en": "Aksharayaatrakaൾ",
    "author": "ഡോ.സി.ജെ.റോയ്",
    "stockNumber": 351,
    "price": "75",
    "image": "books/351.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അറിയാത്തവളിൽ നിന്നൊരു കത്ത്",
    "name_en": "Ariyaattavaliൽ ninnòru katt",
    "author": "വിവ: മാവേലിക്കര അച്യുതൻ",
    "stockNumber": 352,
    "price": "10",
    "image": "books/352.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അമേരിക്കൻ സാഹിത്യ സത്രത്തിൽ",
    "name_en": "Amerikkaൻ saahitya satrattiൽ",
    "author": "മധു നായർ ന്യൂയോർക്ക്",
    "stockNumber": 353,
    "price": "70",
    "image": "books/353.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പരിണാമം അവബോധങ്ങളിൽ നിന്ന്",
    "name_en": "Parinaamam avabodha~n~naliൽ ninn",
    "author": "കെ.പി.മണിൽ കുമാർ",
    "stockNumber": 354,
    "price": "35",
    "image": "books/354.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മധ്യമങ്ങലുടെ രാഷ്ട്രീയം",
    "name_en": "Madhyama~n~nalutè raashtreeyam",
    "author": "ഷാജി ജേക്കബ്",
    "stockNumber": 355,
    "price": "65",
    "image": "books/355.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വരകളും വർണ്ണങ്ങളും",
    "name_en": "Varakalum vaർnna~n~nalum",
    "author": "കെ.പി.അപ്പൻ",
    "stockNumber": 356,
    "price": "75",
    "image": "books/356.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രതികരണങ്ങൾ",
    "name_en": "Pratikarana~n~naൾ",
    "author": "റഹ്മാൻ മധുരക്കുഴി",
    "stockNumber": 357,
    "price": "60",
    "image": "books/357.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കഥകൾ",
    "name_en": "Kathakaൾ",
    "author": "ഇ.കരുണാകരൻ",
    "stockNumber": 358,
    "price": "90",
    "image": "books/358.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുങ്കുപ്പാടം",
    "name_en": "Ku~nkuppaatam",
    "author": "മടിക്കൈ രാമചന്ദ്രൻ",
    "stockNumber": 359,
    "price": "75",
    "image": "books/359.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരള മാതൃകയുടെ പരിമിതികൾ",
    "name_en": "Kerala maatrrikayutè parimitikaൾ",
    "author": "ഡോ.കെ.കെ. ജോർജ്ജ്",
    "stockNumber": 360,
    "price": "55",
    "image": "books/360.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആധുനികരുടെ കഥാപ്രപഞ്ചം",
    "name_en": "Aadhunikarutè kathaaprapa~ncham",
    "author": "കല്ലട രാമചന്ദ്രൻ",
    "stockNumber": 361,
    "price": "60",
    "image": "books/361.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അസ്തമിക്കാത്ത സൂര്യൻമാർ",
    "name_en": "Astamikkaatta sooryaൻmaaർ",
    "author": "ഡോ.ഷോർബൂർ കാർത്തികേയൻ",
    "stockNumber": 362,
    "price": "66",
    "image": "books/362.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബാലേട്ടൻ",
    "name_en": "Baalettaൻ",
    "author": "ടി.എ. ഷാഹിദ്",
    "stockNumber": 363,
    "price": "65",
    "image": "books/363.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അതേ കഥയുടെ പുനർവ്യാഖ്യാനം",
    "name_en": "Ate kathayutè punaർvyaakhyaanam",
    "author": "കുന്നത്തൂർ രാധാകൃഷ്ണൻ",
    "stockNumber": 364,
    "price": "75",
    "image": "books/364.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിസ്മരിക്കപ്പെട്ടവർ",
    "name_en": "Vismarikkappèttavaർ",
    "author": "വിവ: കെ.പി.എ.സമദ്",
    "stockNumber": 365,
    "price": "45",
    "image": "books/365.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ ഹൃദയത്തിലെ ഗാന്ധി",
    "name_en": "Èൻrè hrridayattilè gaandhi",
    "author": "നിത്യചൈതന്യധി",
    "stockNumber": 366,
    "price": "60",
    "image": "books/366.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബാല്യകലാ സഖി",
    "name_en": "Baalyakalaa sakhi",
    "author": "വൈക്കം മുഹമ്മദ് ബഷീർ",
    "stockNumber": 367,
    "price": "20",
    "image": "books/367.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആൻ്റൺ ചെക്കോവ് എൻ്റെ ജീവിതം",
    "name_en": "Aaൻraൺ chèkkov èൻrè jeevitam",
    "author": "വിവ: ഇ. വാസു",
    "stockNumber": 368,
    "price": "85",
    "image": "books/368.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഹാത്മാ",
    "name_en": "Mahaatmaa",
    "author": "വിവ: പി.കെ.ശിവദാസ്",
    "stockNumber": 369,
    "price": "50",
    "image": "books/369.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുഞ്ഞുണ്ണി എണ്ണൂഡ്",
    "name_en": "Ku~n~nunni ènnood",
    "author": "കുഞ്ഞി മാഷ്",
    "stockNumber": 370,
    "price": "50",
    "image": "books/370.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വംശ ഗാഥകൾ മൂലം ടോക്കീസ്",
    "name_en": "Vamsha gaathakaൾ moolam tokkees",
    "author": "വി.ദിലീപ്",
    "stockNumber": 371,
    "price": "55",
    "image": "books/371.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജീവിതം ഒരു ആർത്തിക്കാരൻ്റെ കയ്യിൽ",
    "name_en": "Jeevitam òru aaർttikkaaraൻrè kayyiൽ",
    "author": "കെ.പി.രാമനുണ്ണി",
    "stockNumber": 372,
    "price": "85",
    "image": "books/372.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പച്ച കുപ്പി",
    "name_en": "Pachcha kuppi",
    "author": "എം.ആർ.രേണുകുമാർ",
    "stockNumber": 373,
    "price": "50",
    "image": "books/373.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റെയിൻ കോട്ട്",
    "name_en": "Rèyiൻ kott",
    "author": "മോഹനകൃഷ്ണൻ കാലടി",
    "stockNumber": 374,
    "price": "45",
    "image": "books/374.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സന്ദേഹിയുടെ തളർമരം",
    "name_en": "Sandehiyutè talaർmaram",
    "author": "ബിനേഷ് വിശ്വം",
    "stockNumber": 375,
    "price": "40",
    "image": "books/375.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വാക്കുകൾ ചെക്കേറുന്നിടം",
    "name_en": "Vaakkukaൾ chèkkerunnitam",
    "author": "റോസ്മേരി",
    "stockNumber": 376,
    "price": "45",
    "image": "books/376.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാവിലെ പാട്ട്",
    "name_en": "Kaavilè paatt",
    "author": "ഇടശ്ശേരി",
    "stockNumber": 377,
    "price": "70",
    "image": "books/377.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അത്ര വിശാലമല്ല കിണർ",
    "name_en": "Atra vishaalamalla kinaർ",
    "author": "സി.പി.ശുഭ",
    "stockNumber": 378,
    "price": "50",
    "image": "books/378.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നാറാണത്തു ഭ്രാന്തൻ",
    "name_en": "Naaraanattu bhraantaൻ",
    "author": "വി.മധുസൂദനൻ നായർ",
    "stockNumber": 379,
    "price": "100",
    "image": "books/379.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആത്മഗതങ്ങൾ",
    "name_en": "Aatmagata~n~naൾ",
    "author": "ഒ.എൻ.വി.കുറുപ്പ്",
    "stockNumber": 380,
    "price": "60",
    "image": "books/380.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇടപ്പള്ളിയും വാംഗോഗും",
    "name_en": "Itappalliyum vaamgogum",
    "author": "സന്തോഷ് ആശ്രമം",
    "stockNumber": 381,
    "price": "40",
    "image": "books/381.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തച്ചനാർ",
    "name_en": "Tachchanaaർ",
    "author": "സി.രാധാകൃഷ്ണൻ",
    "stockNumber": 382,
    "price": "50",
    "image": "books/382.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടികൾ രത്നാങ്ങളാകാൻ",
    "name_en": "Kuttikaൾ ratnaa~n~nalaakaaൻ",
    "author": "എ.കെ.സോമനാഥ പണിക്കർ",
    "stockNumber": 383,
    "price": "35",
    "image": "books/383.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനസ്സറിയും യന്ത്രം",
    "name_en": "Manassariyum yantram",
    "author": "പി.നരേന്ദ്ര നാഥ്",
    "stockNumber": 384,
    "price": "50",
    "image": "books/384.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചരിത്രം തിരുത്തിയ ശാസ്ത്ര പ്രതിഭകൾ",
    "name_en": "Charitram tiruttiya shaastra pratibhakaൾ",
    "author": "ഡോ. രാധിക സി നായർ",
    "stockNumber": 385,
    "price": "60",
    "image": "books/385.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്ത്യയുടെ കണ്ടെത്തലുകൾ",
    "name_en": "Intyayutè kantèttalukaൾ",
    "author": "രാജേന്ദ്രൻ പന്തളം",
    "stockNumber": 386,
    "price": "60",
    "image": "books/386.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കണക്കെന്തു രസം",
    "name_en": "Kanakkèntu rasam",
    "author": "പി.നന്ദകുമാർ",
    "stockNumber": 387,
    "price": "95",
    "image": "books/387.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാർഗിൽ യാത്ര",
    "name_en": "Kaaർgiൽ yaatra",
    "author": "ജെയ്‌സൺ പാനികുളങ്ങര",
    "stockNumber": 388,
    "price": "125",
    "image": "books/388.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേദാർനാഥിലെ കാക്കകൽ",
    "name_en": "Kedaaർnaathilè kaakkakaൽ",
    "author": "ധ്യാൻ തർപ്പൺ",
    "stockNumber": 389,
    "price": "85",
    "image": "books/389.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബിലാത്തി വിശേഷം പുതിയ പാഠം",
    "name_en": "Bilaatti vishesham putiya paatham",
    "author": "വി.സുകുമാരൻ",
    "stockNumber": 390,
    "price": "60",
    "image": "books/390.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലണ്ടൻ നോട്ട്ബുക്ക്",
    "name_en": "Lantaൻ nottbukk",
    "author": "എസ്.കെ. പൊറ്റക്കാട്",
    "stockNumber": 391,
    "price": "50",
    "image": "books/391.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശുഭാപ്തി വിശ്വാസം",
    "name_en": "Shubhaapti vishvaasam",
    "author": "ഹെലൻ കെല്ലർ",
    "stockNumber": 392,
    "price": "40",
    "image": "books/392.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാൾ മാർക്ക്സ്",
    "name_en": "Kaaൾ maaർkks",
    "author": "ജിനേഷ് കുമാർ എരമം",
    "stockNumber": 393,
    "price": "25",
    "image": "books/393.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വി.കെ.എൻ. സംഭാഷണങ്ങൾ",
    "name_en": "Vi.kè.èൻ. sambhaashana~n~naൾ",
    "author": "ഡോ.മുന്നിനാട് പത്മകുമാർ",
    "stockNumber": 394,
    "price": "35",
    "image": "books/394.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൺവെട്ടത്ത്",
    "name_en": "Kaൺvèttatt",
    "author": "സി.വി. ബാലകൃഷ്ണൻ",
    "stockNumber": 395,
    "price": "75",
    "image": "books/395.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സത്യൻ അന്തിക്കാടിൻ്റെ ഗ്രാമീണത",
    "name_en": "Satyaൻ antikkaatiൻrè graameenata",
    "author": "താഹ മടായി",
    "stockNumber": 396,
    "price": "90",
    "image": "books/396.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദല മർമരങ്ങൾ",
    "name_en": "Dala maർmara~n~naൾ",
    "author": "രമ്യ ആൻ്റണി",
    "stockNumber": 397,
    "price": "70",
    "image": "books/397.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹൃദയങ്ങൾ പറയുന്നത്ത്",
    "name_en": "Hrridaya~n~naൾ parayunnatt",
    "author": "സി എൽ എസ് ബുക്സ്",
    "stockNumber": 398,
    "price": "60",
    "image": "books/398.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മരിച്ചവരുടെ മനുഷ്യൻ",
    "name_en": "Marichchavarutè manushyaൻ",
    "author": "സി.അംബുരാജ്",
    "stockNumber": 399,
    "price": "55",
    "image": "books/399.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹംസധ്വനി",
    "name_en": "Hamsadhvani",
    "author": "മാധവിക്കുട്ടി",
    "stockNumber": 400,
    "price": "40",
    "image": "books/400.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ധാമ്പത്യ രസതന്ത്രം",
    "name_en": "Dhaampatya rasatantram",
    "author": "ഡോ.ബേബി വർഗീസ്",
    "stockNumber": 401,
    "price": "75",
    "image": "books/401.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദൈവത്തെ മാറ്റിയെഴുതുമ്പോൾ",
    "name_en": "Daivattè maarriyèzhutumpoൾ",
    "author": "പി.എൻ.ഗോപി കൃഷ്ണൻ",
    "stockNumber": 402,
    "price": "75",
    "image": "books/402.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അഗ്രേ പശ്യാമി",
    "name_en": "Agre pashyaami",
    "author": "മൂർക്കന്നൂർ ശ്രീ ഹരി നമ്പൂതിരി",
    "stockNumber": 403,
    "price": "50",
    "image": "books/403.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അന്തർജന്തിൻ സ്നേഹപൂർവം ബഷീർ",
    "name_en": "Antaർjantiൻ snehapooർvam basheeർ",
    "author": "ഡി.സി.ബുക്ക്സ്",
    "stockNumber": 404,
    "price": "35",
    "image": "books/404.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇതിഹാസത്തിലെ കുറ്റികൾ",
    "name_en": "Itihaasattilè kurrikaൾ",
    "author": "നാരായണൻ കാവുന്തായി",
    "stockNumber": 405,
    "price": "55",
    "image": "books/405.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാതൃഭൂമി ഇയർ ബുക്ക് 2011",
    "name_en": "Maatrribhoomi iyaർ bukk 2011",
    "author": "മാതൃഭൂമി",
    "stockNumber": 406,
    "price": "100",
    "image": "books/406.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശ്രീ നാരായണ ഗുരുവും നവോത്ഥാനവും",
    "name_en": "Shree naaraayana guruvum navotthaanavum",
    "author": "ഡോ.മഹേശ്വരൻ നായർ",
    "stockNumber": 407,
    "price": "10",
    "image": "books/407.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഞ്ചാടി മണികൾ",
    "name_en": "Ma~nchaati manikaൾ",
    "author": "സോണി തോമസ്",
    "stockNumber": 408,
    "price": "55",
    "image": "books/408.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സുഡോക്കോ കുട്ടികൾ",
    "name_en": "Sudokko kuttikaൾ",
    "author": "സുബിൻ കെ തോട്ടിൽ",
    "stockNumber": 409,
    "price": "50",
    "image": "books/409.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുരിങ്ങ മരം ചാഞ്ഞ വീട്",
    "name_en": "Muri~n~na maram chaa~n~na veet",
    "author": "പയ്യന്നൂർ കുഞ്ഞിരാമൻ",
    "stockNumber": 410,
    "price": "75",
    "image": "books/410.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരള ചരിത്ര സംഭവങ്ങളിലൂടെ",
    "name_en": "Kerala charitra sambhava~n~nalilootè",
    "author": "പി.ശിവദാസൻ",
    "stockNumber": 411,
    "price": "90",
    "image": "books/411.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രതിഷേധിക്കുന്ന ആത്മാവുകൾ",
    "name_en": "Pratishedhikkunna aatmaavukaൾ",
    "author": "ഡിസി ബുക്സ്",
    "stockNumber": 412,
    "price": "48",
    "image": "books/412.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനുഷ്യൻ മനുഷ്യനായ കഥ",
    "name_en": "Manushyaൻ manushyanaaya katha",
    "author": "കെ.കെ.കൃഷ്ണകുമാർ",
    "stockNumber": 413,
    "price": "40",
    "image": "books/413.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കഥ കഥ പൈങ്കിളി",
    "name_en": "Katha katha pai~nkili",
    "author": "സുമംഗല",
    "stockNumber": 414,
    "price": "125",
    "image": "books/414.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചിലപ്പതികാരം മഹർഷി",
    "name_en": "Chilappatikaaram mahaർshi",
    "author": "മഹർഷി",
    "stockNumber": 415,
    "price": "40",
    "image": "books/415.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്വർണകമ്പിളി",
    "name_en": "Svaർnakampili",
    "author": "സി.പി.പള്ളിപ്പുറം",
    "stockNumber": 416,
    "price": "50",
    "image": "books/416.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മെറിഷെല്ലി - ഫ്രാങ്കൻസ്റ്റീൻ",
    "name_en": "Mèrishèlli - phraa~nkaൻsrreeൻ",
    "author": "സാബിർ ടി ബത്തേരി",
    "stockNumber": 417,
    "price": "70",
    "image": "books/417.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭാരതത്തിലെ പ്രഗത്ഭ വ്യക്തികൾ",
    "name_en": "Bhaaratattilè pragatbha vyaktikaൾ",
    "author": "തിരുമല ശിവൻകുട്ടി",
    "stockNumber": 418,
    "price": "45",
    "image": "books/418.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നഷ്ടപെട്ട നീലാമ്പരി",
    "name_en": "Nashtapètta neelaampari",
    "author": "മാധവിക്കുട്ടി",
    "stockNumber": 419,
    "price": "60",
    "image": "books/419.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആൻ്റൺ ചെക്കോവ്",
    "name_en": "Aaൻraൺ chèkkov",
    "author": "ബിനോയ് കെ. ജേക്കബ്",
    "stockNumber": 420,
    "price": "75",
    "image": "books/420.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്കോട്ട്ലാൻഡ് യാർഡ് ഡിറ്റക്ടീവ്",
    "name_en": "Skottlaaൻd yaaർd dirrakteev",
    "author": "ടോണി ചിറ്റുകളം",
    "stockNumber": 421,
    "price": "80",
    "image": "books/421.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭൂമിയുടെ അറ്റത്ത്",
    "name_en": "Bhoomiyutè arratt",
    "author": "എൻ.പ്രഭാകരൻ",
    "stockNumber": 422,
    "price": "60",
    "image": "books/422.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്ത്രൈണം",
    "name_en": "Strainam",
    "author": "ഡോ. രാധിക സി നായർ",
    "stockNumber": 423,
    "price": "70",
    "image": "books/423.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇവിടെ ഒരു ടെക്കി",
    "name_en": "Ivitè òru tèkki",
    "author": "ചന്ദ്രമതി",
    "stockNumber": 424,
    "price": "35",
    "image": "books/424.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒടിഞ്ഞ ചിരകുകൾ",
    "name_en": "Òti~n~na chirakukaൾ",
    "author": "കലീൽ ജിബ്രാൻ",
    "stockNumber": 425,
    "price": "48",
    "image": "books/425.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പുരോഗാമി",
    "name_en": "Purogaami",
    "author": "കലീൽ ജിബ്രാൻ",
    "stockNumber": 426,
    "price": "30",
    "image": "books/426.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ പ്രിയപ്പെട്ട കഥകൾ",
    "name_en": "Èൻrè priyappètta kathakaൾ",
    "author": "ഒ.വി.വിജയൻ",
    "stockNumber": 427,
    "price": "35",
    "image": "books/427.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കോവിലൻ മലയാളത്തിൻ്റെ സുവർണ്ണ കഥകൾ",
    "name_en": "Kovilaൻ malayaalattiൻrè suvaർnna kathakaൾ",
    "author": "കോവിലൻ",
    "stockNumber": 428,
    "price": "105",
    "image": "books/428.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അപരിചിതൻ്റെ അനുജത്തി",
    "name_en": "Aparichitaൻrè anujatti",
    "author": "പി.കെ. നന്ദന വർമ്മ",
    "stockNumber": 429,
    "price": "85",
    "image": "books/429.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "60 ജിബ്രാൻ കഥകൾ",
    "name_en": "60 jibraaൻ kathakaൾ",
    "author": "അസീസ് തരുവണ",
    "stockNumber": 430,
    "price": "60",
    "image": "books/430.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഡൗൺ ഡൽഹി എക്സ്പ്രസ്",
    "name_en": "Daൗൺ daൽhi èkspras",
    "author": "ചിന്ത പബ്ലിക്കേഷൻസ്",
    "stockNumber": 431,
    "price": "70",
    "image": "books/431.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഴ പെയ്തു തീരുന്നില്ല",
    "name_en": "Mazha pèytu teerunnilla",
    "author": "എം.എസ്. ശ്രീനു",
    "stockNumber": 432,
    "price": "45",
    "image": "books/432.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു വാക്കിൻ്റെ പാടം",
    "name_en": "Òru vaakkiൻrè paatam",
    "author": "എം.എൻ.കാരശ്ശേരി",
    "stockNumber": 433,
    "price": "65",
    "image": "books/433.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രണയ കല",
    "name_en": "Pranaya kala",
    "author": "എറിക് ഫ്രം",
    "stockNumber": 434,
    "price": "65",
    "image": "books/434.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അടിത്തട്ടുകൾ",
    "name_en": "Atittattukaൾ",
    "author": "സച്ചിദാനന്ദൻ",
    "stockNumber": 435,
    "price": "60",
    "image": "books/435.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഏകലോചനം",
    "name_en": "Ekalochanam",
    "author": "വി.കെ.ശ്രീ രാമൻ",
    "stockNumber": 436,
    "price": "50",
    "image": "books/436.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിടരേണ്ട പൂമൊട്ടുകൾ",
    "name_en": "Vitarenta poomòttukaൾ",
    "author": "എ.പി.ജെ. അബ്ദുൾകലം",
    "stockNumber": 437,
    "price": "80",
    "image": "books/437.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്വാമി വിവേകാനന്ദൻ ജീവിതവും ദർശനവും",
    "name_en": "Svaami vivekaanandaൻ jeevitavum daർshanavum",
    "author": "പ്രൊഫ. ടോണി മാത്യു",
    "stockNumber": 438,
    "price": "75",
    "image": "books/438.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ ജീവിതകഥ",
    "name_en": "Èൻrè jeevitakatha",
    "author": "ഹെലൻ കെല്ലർ",
    "stockNumber": 439,
    "price": "85",
    "image": "books/439.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലിയനാർഡോ ഡാവിഞ്ചി",
    "name_en": "Liyanaaർdo daavi~nchi",
    "author": "സത്യൻ കല്ലുരുട്ടി",
    "stockNumber": 440,
    "price": "50",
    "image": "books/440.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദിഷാസുചി",
    "name_en": "Dishaasuchi",
    "author": "ഡി.വിനയചന്ദ്രൻ",
    "stockNumber": 441,
    "price": "62",
    "image": "books/441.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തോരാമഴ",
    "name_en": "Toraamazha",
    "author": "റഫീഖ് അഹമ്മദ്",
    "stockNumber": 442,
    "price": "40",
    "image": "books/442.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഓടക്കുഴൽ",
    "name_en": "Otakkuzhaൽ",
    "author": "ജി.ശങ്കരക്കുറുപ്പ്",
    "stockNumber": 443,
    "price": "100",
    "image": "books/443.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സിംഹഭൂമി",
    "name_en": "Simhabhoomi",
    "author": "എസ്.കെ. പൊറ്റക്കാട്",
    "stockNumber": 444,
    "price": "95",
    "image": "books/444.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വോൾഗയിൽ മഞ്ഞു പെയ്യുമ്പോൾ",
    "name_en": "Voൾgayiൽ ma~n~nu pèyyumpoൾ",
    "author": "പുനത്തിൽ കുഞ്ഞബ്ദുള്ള",
    "stockNumber": 445,
    "price": "65",
    "image": "books/445.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബാലി ദ്വീപ്",
    "name_en": "Baali dveep",
    "author": "എസ്.കെ. പൊറ്റക്കാട്",
    "stockNumber": 446,
    "price": "110",
    "image": "books/446.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "12 സാരോപദേശകഥകൾ",
    "name_en": "12 saaropadeshakathakaൾ",
    "author": "സി.കെ. കൃഷ്ണൻ",
    "stockNumber": 447,
    "price": "35",
    "image": "books/447.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വീര പാണ്ഡ്യ കട്ടബൊമ്മൻ",
    "name_en": "Veera paandya kattabòmmaൻ",
    "author": "ബാബുരാജ് കലൻബൂർ",
    "stockNumber": 448,
    "price": "80",
    "image": "books/448.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മീനുകളുടെ നൃത്തം",
    "name_en": "Meenukalutè nrrittam",
    "author": "എൻ.കെ. മനോഹരൻ",
    "stockNumber": 449,
    "price": "75",
    "image": "books/449.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശ്രീനിവാസ രാമാനുജൻ",
    "name_en": "Shreenivaasa raamaanujaൻ",
    "author": "പ്രേംജിത്ത് കായംകുളം",
    "stockNumber": 450,
    "price": "40",
    "image": "books/450.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിൻസെൻ്റ് വാൻഗോംഗ്",
    "name_en": "Viൻsèൻr vaaൻgomg",
    "author": "ഷെറിൻ സാജ്",
    "stockNumber": 451,
    "price": "55",
    "image": "books/451.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വള",
    "name_en": "Vala",
    "author": "ബാലമണിയമ്മ",
    "stockNumber": 452,
    "price": "30",
    "image": "books/452.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചുക്കും ഗെക്കും",
    "name_en": "Chukkum gèkkum",
    "author": "അർക്കാദി കൈദാർ",
    "stockNumber": 453,
    "price": "40",
    "image": "books/453.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാന്ത്രിക മയിൽ",
    "name_en": "Maantrika mayiൽ",
    "author": "സി.പി.പള്ളിപ്പുറം",
    "stockNumber": 454,
    "price": "50",
    "image": "books/454.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആഴിക്ക്ക്കടിയിൽ അൽഭുദലോകം",
    "name_en": "Aazhikkkkatiyiൽ aൽbhudalokam",
    "author": "ജൂൾസ് വെർണ",
    "stockNumber": 455,
    "price": "30",
    "image": "books/455.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അമ്മയെ കണാൻ",
    "name_en": "Ammayè kanaaൻ",
    "author": "പുനത്തിൽ കുഞ്ഞബ്ദുള്ള",
    "stockNumber": 456,
    "price": "40",
    "image": "books/456.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വാങ്ക",
    "name_en": "Vaa~nka",
    "author": "ആൻ്റൺ ചെക്കോവ്",
    "stockNumber": 457,
    "price": "75",
    "image": "books/457.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അപ്പുവിൻ്റെ അച്ചൻ",
    "name_en": "Appuviൻrè achchaൻ",
    "author": "പി.ടി.രാജലക്ഷ്മി",
    "stockNumber": 458,
    "price": "35",
    "image": "books/458.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചാൾസ് ഡാർവിൻ്റ്റെ ആത്മകഥ",
    "name_en": "Chaaൾs daaർviൻrrè aatmakatha",
    "author": "കെ.രാമ",
    "stockNumber": 459,
    "price": "50",
    "image": "books/459.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടങ്കവിത തേൻ",
    "name_en": "Kata~nkavita teൻ",
    "author": "ഹംസ പട്ടാര",
    "stockNumber": 460,
    "price": "35",
    "image": "books/460.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഓർമ ഒറ്റ ചിരകുള്ള പക്ഷിയാകുന്നു",
    "name_en": "Oർma òrra chirakulla pakshiyaakunnu",
    "author": "പി.കെ.പാറക്കടവ്",
    "stockNumber": 461,
    "price": "70",
    "image": "books/461.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗീതാഹിരണ്യത്തിൻ്റെ കഥകൾ",
    "name_en": "Geetaahiranyattiൻrè kathakaൾ",
    "author": "ഗീത ഹിരണ്യൻ",
    "stockNumber": 462,
    "price": "110",
    "image": "books/462.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ പ്രിയപ്പേട്ട കഥകൾ",
    "name_en": "Èൻrè priyappetta kathakaൾ",
    "author": "എം.മുകുന്ദൻ",
    "stockNumber": 463,
    "price": "75",
    "image": "books/463.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നല്ല ചങ്ങാതിമാർ അഥവാ സുൽത്താനു സ്നേഹപൂർവം",
    "name_en": "Nalla cha~n~naatimaaർ athavaa suൽttaanu snehapooർvam",
    "author": "കെ.ഉഷ",
    "stockNumber": 464,
    "price": "35",
    "image": "books/464.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇ എം എസും ദൈവവും",
    "name_en": "I èm èsum daivavum",
    "author": "സി അനൂപ്",
    "stockNumber": 465,
    "price": "45",
    "image": "books/465.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാധവിക്കുട്ടി പാരിതോഷികം",
    "name_en": "Maadhavikkutti paaritoshikam",
    "author": "മാധവിക്കുട്ടി",
    "stockNumber": 466,
    "price": "40",
    "image": "books/466.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വള്ളുവനാടൻ കഥകൾ",
    "name_en": "Valluvanaataൻ kathakaൾ",
    "author": "ഷാഹുൽ ഹമീദ്",
    "stockNumber": 467,
    "price": "70",
    "image": "books/467.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു സംഗീർത്തനം പോലെ",
    "name_en": "Òru samgeeർttanam polè",
    "author": "പെരുമ്പടവം",
    "stockNumber": 468,
    "price": "130",
    "image": "books/468.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാവേരിയുടെ പുരുഷൻ",
    "name_en": "Kaaveriyutè purushaൻ",
    "author": "പി.സുരേന്ദ്രൻ",
    "stockNumber": 469,
    "price": "35",
    "image": "books/469.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അഗ്നി",
    "name_en": "Agni",
    "author": "സി.രാധാകൃഷ്ണൻ",
    "stockNumber": 470,
    "price": "40",
    "image": "books/470.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആത്മാവിനു ശരിയെന്നു തോന്നുന്ന കാര്യങ്ങൾ",
    "name_en": "Aatmaavinu shariyènnu tonnunna kaarya~n~naൾ",
    "author": "സി.വി.ബാലകൃഷ്ണൻ",
    "stockNumber": 471,
    "price": "80",
    "image": "books/471.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വേരുകൾ",
    "name_en": "Verukaൾ",
    "author": "മലയാറ്റൂർ",
    "stockNumber": 472,
    "price": "80",
    "image": "books/472.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജിന്ന",
    "name_en": "Jinna",
    "author": "എം.കെ.ഗംഗാധരൻ",
    "stockNumber": 473,
    "price": "90",
    "image": "books/473.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൊരുവാതത്തിലെ ഭൂതങ്ങൾ",
    "name_en": "Kòruvaatattilè bhoota~n~naൾ",
    "author": "പ്രകാശൻ മടിക്കൈ",
    "stockNumber": 474,
    "price": "85",
    "image": "books/474.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മൃണാളം",
    "name_en": "Mrrinaalam",
    "author": "സി.രാധാകൃഷ്ണൻ",
    "stockNumber": 475,
    "price": "75",
    "image": "books/475.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അഞ്ചു പെണ്ണുങ്ങൾ",
    "name_en": "A~nchu pènnu~n~naൾ",
    "author": "തകഴി ശിവ ശങ്കരപ്പിള്ള",
    "stockNumber": 476,
    "price": "40",
    "image": "books/476.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മരിച്ചവരുടെ പൂക്കൾ",
    "name_en": "Marichchavarutè pookkaൾ",
    "author": "പി.കെ. പാറക്കടവ്",
    "stockNumber": 477,
    "price": "50",
    "image": "books/477.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുണ്ടൂര്",
    "name_en": "Muntoor",
    "author": "മുണ്ടൂർ സേതുമാധവൻ",
    "stockNumber": 478,
    "price": "75",
    "image": "books/478.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശേഷം 99 ആം പേജിൽ",
    "name_en": "Shesham 99 aam pejiൽ",
    "author": "ശ്രീധരൻ കൈതപ്രം",
    "stockNumber": 479,
    "price": "60",
    "image": "books/479.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റാഷോ മൂൺ",
    "name_en": "Raasho mooൺ",
    "author": "രാജൻ ഇവള",
    "stockNumber": 480,
    "price": "42",
    "image": "books/480.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പട്ടാമ്പി പാലം",
    "name_en": "Pattaampi paalam",
    "author": "സജീഷ് കുറുവത്ത്",
    "stockNumber": 481,
    "price": "50",
    "image": "books/481.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാളിന്ധി വിളിക്കുന്നു",
    "name_en": "Kaalindhi vilikkunnu",
    "author": "രാജമണി.പി",
    "stockNumber": 482,
    "price": "45",
    "image": "books/482.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു പ്രേമത്തിൻ്റെ ബാക്കി",
    "name_en": "Òru premattiൻrè baakki",
    "author": "തകഴി ശിവ ശങ്കരപ്പിള്ള",
    "stockNumber": 483,
    "price": "70",
    "image": "books/483.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മണ്ണ് ",
    "name_en": "Mann ",
    "author": "സതീഷ് ബാബു പയ്യന്നൂർ",
    "stockNumber": 484,
    "price": "120",
    "image": "books/484.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദൂരങ്ങളില്ലാത്ത ലോകം",
    "name_en": "Doora~n~nalillaatta lokam",
    "author": "ജി.സാജൻ",
    "stockNumber": 485,
    "price": "60",
    "image": "books/485.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടം കഥകൾ",
    "name_en": "Katam kathakaൾ",
    "author": "കെ.പി. രാമനാഥൻ",
    "stockNumber": 486,
    "price": "30",
    "image": "books/486.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്ത്യയിലെ മഹാത് വ്യക്തികൾ",
    "name_en": "Intyayilè mahaat vyaktikaൾ",
    "author": "ടോണി ജോസഫ്",
    "stockNumber": 487,
    "price": "85",
    "image": "books/487.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുസൃതി കണക്കുകൾ",
    "name_en": "Kusrriti kanakkukaൾ",
    "author": "മഞ്ജു ജോർജ്ജ്",
    "stockNumber": 488,
    "price": "38",
    "image": "books/488.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പൂച്ചക്കുട്ടികളുടെ വീട്",
    "name_en": "Poochchakkuttikalutè veet",
    "author": "ടി.പത്മനാഭൻ",
    "stockNumber": 489,
    "price": "50",
    "image": "books/489.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒഴിവുകാലം",
    "name_en": "Òzhivukaalam",
    "author": "രവീന്ദ്രനാഥ ടാഗോർ",
    "stockNumber": 490,
    "price": "82",
    "image": "books/490.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "100 ബാപ്പുജി കഥകൾ",
    "name_en": "100 baappuji kathakaൾ",
    "author": "സി.പി. പള്ളിപ്പുറം",
    "stockNumber": 491,
    "price": "75",
    "image": "books/491.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മര്യാദ രാമൻ്റെ ന്യായവിധികൾ",
    "name_en": "Maryaada raamaൻrè nyaayavidhikaൾ",
    "author": "ഡോ.കെ.ശ്രീകുമാർ",
    "stockNumber": 492,
    "price": "60",
    "image": "books/492.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വേദ ഗണിതം",
    "name_en": "Veda ganitam",
    "author": "പള്ളിയറ ശ്രീധരൻ",
    "stockNumber": 493,
    "price": "120",
    "image": "books/493.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കിന്നര ലോകത്തേ നായികമാർ",
    "name_en": "Kinnara lokatte naayikamaaർ",
    "author": "രാജൻ തുവ്വര",
    "stockNumber": 494,
    "price": "70",
    "image": "books/494.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹരിത രാമായണം",
    "name_en": "Harita raamaayanam",
    "author": "വി ടി . ജയദേവൻ",
    "stockNumber": 495,
    "price": "60",
    "image": "books/495.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കിഴവനും കടലും",
    "name_en": "Kizhavanum katalum",
    "author": "ഷീൻ അഗസ്റ്റിൻ",
    "stockNumber": 496,
    "price": "60",
    "image": "books/496.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടംകഥാ പദപ്രശ്നം",
    "name_en": "Katamkathaa padaprashnam",
    "author": "പി.ഐ.ശങ്കര നാരായണൻ",
    "stockNumber": 497,
    "price": "20",
    "image": "books/497.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദാർശനികാചാര്യന്മാർ",
    "name_en": "Daaർshanikaachaaryanmaaർ",
    "author": "സി.പ്രസാദ്",
    "stockNumber": 498,
    "price": "30",
    "image": "books/498.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹേമന്ധത്തിലെ കഥ",
    "name_en": "Hemandhattilè katha",
    "author": "വില്യം ഷെക്സ്പിയർ",
    "stockNumber": 499,
    "price": "30",
    "image": "books/499.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രാജറാം മോഹൻ റോയ്",
    "name_en": "Raajaraam mohaൻ roy",
    "author": "അനിൽ ജനാർദനൻ",
    "stockNumber": 500,
    "price": "25",
    "image": "books/500.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജെന്നറുടെ കഥ",
    "name_en": "Jènnarutè katha",
    "author": "പ്രൊഫ.കെ.ഗോപിനാഥൻ നായർ",
    "stockNumber": 501,
    "price": "35",
    "image": "books/501.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാജിക് പുസ്തകം",
    "name_en": "Maajik pustakam",
    "author": "പണ്ഡിറ്റ്. എന്‍. കൃഷ്ണന്‍ നായര്‍",
    "stockNumber": 502,
    "price": "20",
    "image": "books/502.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജപ്പാന്‍ അതിജീവനത്തിൻ്റെ പൊരുള്‍ തേടി",
    "name_en": "Jappaan‍ atijeevanattiൻrè pòrul‍ teti",
    "author": "അഗസ്റ്റിന്‍ ജോസഫ്",
    "stockNumber": 503,
    "price": "40",
    "image": "books/503.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുമാര സംഭവങ്ങള്‍",
    "name_en": "Kumaara sambhava~n~nal‍",
    "author": "കുമാരന്‍",
    "stockNumber": 504,
    "price": "60",
    "image": "books/504.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനുഷ്യന്‍ മനുഷ്യനെ അറിയുക",
    "name_en": "Manushyan‍ manushyanè ariyuka",
    "author": "സുണ്ണി ജോസഫ്",
    "stockNumber": 505,
    "price": "30",
    "image": "books/505.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വാമപക്ഷത്ത് ഒരാൾ",
    "name_en": "Vaamapakshatt òraaൾ",
    "author": "ശ്രീദേവി കക്കാട്",
    "stockNumber": 506,
    "price": "50",
    "image": "books/506.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അധിനിവേശത്തിൻ്റെ ആസുര വഴികള്‍",
    "name_en": "Adhiniveshattiൻrè aasura vazhikal‍",
    "author": "കെ.എം.രാഘവന്‍ നമ്പ്യാര്‍",
    "stockNumber": 507,
    "price": "30",
    "image": "books/507.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിശബ്ദതയ്ക്കപ്പുറം",
    "name_en": "Nishabdataykkappuram",
    "author": "ഷീല",
    "stockNumber": 508,
    "price": "35",
    "image": "books/508.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാഴ്ച്ചക്കുള്ള വിഭവങ്ങള്‍",
    "name_en": "Kaazhchchakkulla vibhava~n~nal‍",
    "author": "കെ.വി.അനൂപ്",
    "stockNumber": 509,
    "price": "50",
    "image": "books/509.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പാബ്ലോ നെരൂധയുടെ പ്രണയ കവിതകള്‍",
    "name_en": "Paablo nèroodhayutè pranaya kavitakal‍",
    "author": "എന്‍.പി.ചന്ദ്ര ശേഖരന്‍",
    "stockNumber": 510,
    "price": "35",
    "image": "books/510.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അദൃശ്യമനുഷ്യന്‍",
    "name_en": "Adrrishyamanushyan‍",
    "author": "എച്ച്.ജി.വെല്‍സ്",
    "stockNumber": 511,
    "price": "90",
    "image": "books/511.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചിരസ്മരണ",
    "name_en": "Chirasmarana",
    "author": "സി.രാഘവന്‍",
    "stockNumber": 512,
    "price": "160",
    "image": "books/512.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാലി ഭാഗവതം",
    "name_en": "Maali bhaagavatam",
    "author": "വി.മാധവന്‍ നായര്‍",
    "stockNumber": 513,
    "price": "60",
    "image": "books/513.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുല്ല കഥകള്‍",
    "name_en": "Mulla kathakal‍",
    "author": "വി.എം.മോഹനന്‍",
    "stockNumber": 514,
    "price": "65",
    "image": "books/514.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സസ്യശാസ്ത്രം",
    "name_en": "Sasyashaastram",
    "author": "ഡോ.സാജന്‍ മാറനാട്",
    "stockNumber": 515,
    "price": "65",
    "image": "books/515.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രാമായണ കഥകള്‍",
    "name_en": "Raamaayana kathakal‍",
    "author": "എ പി ശ്രീധരന്‍",
    "stockNumber": 516,
    "price": "60",
    "image": "books/516.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തെന്നാലി രാമന്‍ കഥകള്‍",
    "name_en": "Tènnaali raaman‍ kathakal‍",
    "author": "മാധവന്‍ നായര്‍",
    "stockNumber": 517,
    "price": "80",
    "image": "books/517.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മരങ്ങള്‍ നട്ട മനുഷ്യന്‍",
    "name_en": "Mara~n~nal‍ natta manushyan‍",
    "author": "ജീന്‍ ഗിയാന",
    "stockNumber": 518,
    "price": null,
    "image": "books/518.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗുജറാത്ത്",
    "name_en": "Gujaraatt",
    "author": "ലിജീഷ് കുമാര്‍",
    "stockNumber": 519,
    "price": null,
    "image": "books/519.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആടു ജീവിതം",
    "name_en": "Aatu jeevitam",
    "author": "ബെന്യാമിന്‍",
    "stockNumber": 520,
    "price": null,
    "image": "books/520.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആല്‍ക്കെമിസ്റ്റ്",
    "name_en": "Aal‍kkèmisrr",
    "author": "പൗലോ കൊയ്ലോ",
    "stockNumber": 521,
    "price": null,
    "image": "books/521.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അനുരാഗത്തിൻ്റെ ദിനങ്ങള്‍",
    "name_en": "Anuraagattiൻrè dina~n~nal‍",
    "author": "വൈക്കം മുഹമ്മദ് ബഷീര്‍",
    "stockNumber": 522,
    "price": null,
    "image": "books/522.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സംങ്കടങ്ങളുടെ ഇടയന്‍",
    "name_en": "Sam~nkata~n~nalutè itayan‍",
    "author": "സി.സോമന്‍",
    "stockNumber": 523,
    "price": null,
    "image": "books/523.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആയിരം തിരശീലകള്‍",
    "name_en": "Aayiram tirasheelakal‍",
    "author": "സുന്ദര രാമ സ്വാമി",
    "stockNumber": 524,
    "price": null,
    "image": "books/524.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചീനവല",
    "name_en": "Cheenavala",
    "author": "നല്ലില ഗോപിനാഥ്",
    "stockNumber": 525,
    "price": null,
    "image": "books/525.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പരകായം ",
    "name_en": "Parakaayam ",
    "author": "ഏറ്റുമാനൂര്‍ ശിവകുമാര്‍",
    "stockNumber": 526,
    "price": null,
    "image": "books/526.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കോടിപ്പോയ മുഖങ്ങല്‍",
    "name_en": "Kotippoya mukha~n~nal‍",
    "author": "തകഴി ശിവശങ്കരപ്പിള്ള",
    "stockNumber": 527,
    "price": null,
    "image": "books/527.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചെമ്മീന്‍",
    "name_en": "Chèmmeen‍",
    "author": "തകഴി ശിവ ശങ്കരപ്പിള്ള",
    "stockNumber": 528,
    "price": null,
    "image": "books/528.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തോട്ടിയുടെ മകന്‍",
    "name_en": "Tottiyutè makan‍",
    "author": "തകഴി ശിവ ശങ്കരപ്പിള്ള",
    "stockNumber": 529,
    "price": null,
    "image": "books/529.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ത്യാഗത്തിനു പ്രതിഫലം",
    "name_en": "Tyaagattinu pratiphalam",
    "author": "തകഴി ശിവ ശങ്കരപ്പിള്ള",
    "stockNumber": 530,
    "price": null,
    "image": "books/530.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നെല്ലും തേങ്ങയും",
    "name_en": "Nèllum te~n~nayum",
    "author": "തകഴി ശിവ ശങ്കരപ്പിള്ള",
    "stockNumber": 531,
    "price": null,
    "image": "books/531.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നാലുകെട്ട്",
    "name_en": "Naalukètt",
    "author": "എം ടി വാസുദേവന്‍ നായര്‍",
    "stockNumber": 532,
    "price": null,
    "image": "books/532.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉമ്മാച്ചു",
    "name_en": "Ummaachchu",
    "author": "യുറൂബ്",
    "stockNumber": 533,
    "price": null,
    "image": "books/533.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വാരണാസി",
    "name_en": "Vaaranaasi",
    "author": "എം ടി വാസുദേവന്‍ നായര്‍",
    "stockNumber": 534,
    "price": null,
    "image": "books/534.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിപ്ലവത്തിൻ്റെ ഇതിഹാസം",
    "name_en": "Viplavattiൻrè itihaasam",
    "author": "ചേശുവേര",
    "stockNumber": 535,
    "price": null,
    "image": "books/535.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലയാളത്തിൻ്റെ സുവര്‍ണ കഥകള്‍",
    "name_en": "Malayaalattiൻrè suvar‍na kathakal‍",
    "author": "പത്മരാജന്‍",
    "stockNumber": 536,
    "price": null,
    "image": "books/536.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രകാശന്‍",
    "name_en": "Prakaashan‍",
    "author": "ശ്രീധരന്‍ സംഘമിത്ര",
    "stockNumber": 537,
    "price": null,
    "image": "books/537.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശയനസൂത്രം",
    "name_en": "Shayanasootram",
    "author": "സി വി രവീന്ദ്രന്‍",
    "stockNumber": 538,
    "price": null,
    "image": "books/538.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുരുതിപ്പാടം",
    "name_en": "Kurutippaatam",
    "author": "കരിവെള്ളൂര്‍ മുരളി",
    "stockNumber": 539,
    "price": null,
    "image": "books/539.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒളിവിലെ ഓര്മകൾ",
    "name_en": "Òlivilè ormakaൾ",
    "author": "തോപ്പില്‍ ഭാസി",
    "stockNumber": 540,
    "price": null,
    "image": "books/540.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബീര്‍ബല്‍ കഥകൾ",
    "name_en": "Beer‍bal‍ kathakaൾ",
    "author": "പ്രൊഫ. എസ് ശിവദാസ്",
    "stockNumber": 541,
    "price": null,
    "image": "books/541.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇൻ്റ്ര്‍ സ്കൂള്‍ ക്വിസ്",
    "name_en": "Iൻrr‍ skool‍ kvis",
    "author": "യു എസ് അജയകുമാര്‍",
    "stockNumber": 542,
    "price": null,
    "image": "books/542.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗണിത ശാസ്ത്രം ചരിത്രവും ശാസ്ത്രവും",
    "name_en": "Ganita shaastram charitravum shaastravum",
    "author": "പള്ളിയറ ശ്രീധരന്‍",
    "stockNumber": 543,
    "price": null,
    "image": "books/543.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബുദ്ധിയും ശ്രദ്ധയും",
    "name_en": "Buddhiyum shraddhayum",
    "author": "പ്രൊഫ. കെ .ഗോപാലകൃഷ്ണന്‍",
    "stockNumber": 544,
    "price": null,
    "image": "books/544.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രണ്ടായതെങ്ങനെ",
    "name_en": "Rantaayatè~n~nanè",
    "author": "പവിത്രന്‍ തീക്കുനി",
    "stockNumber": 545,
    "price": null,
    "image": "books/545.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒടുവിലത്തെ ദിവസം ",
    "name_en": "Òtuvilattè divasam ",
    "author": "ഇ വാസു",
    "stockNumber": 546,
    "price": null,
    "image": "books/546.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചാപ്ലിൻ്റെ ചിരി",
    "name_en": "Chaapliൻrè chiri",
    "author": "വേണു വി ദേശം",
    "stockNumber": 547,
    "price": null,
    "image": "books/547.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിക്കിയും കമ്പ്യൂട്ടര്‍ വൈറസും",
    "name_en": "Nikkiyum kampyoottar‍ vairasum",
    "author": "കെ എല്‍ മോഹന വര്‍മ്മ",
    "stockNumber": 548,
    "price": null,
    "image": "books/548.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആന്‍ഡോഴ്സൺ കഥകൾ",
    "name_en": "Aan‍dozhsaൺ kathakaൾ",
    "author": "ഏറ്റുമാനൂര്‍ ശിവകുമാര്‍",
    "stockNumber": 549,
    "price": null,
    "image": "books/549.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭൂതപറമ്പ്",
    "name_en": "Bhootaparamp",
    "author": "അഞ്ജലി ബിമല്‍",
    "stockNumber": 550,
    "price": null,
    "image": "books/550.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രേതഭൂമിയിലെ രാത്രി",
    "name_en": "Pretabhoomiyilè raatri",
    "author": "ബി ഹരികുമാര്‍",
    "stockNumber": 551,
    "price": null,
    "image": "books/551.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തങ്കച്ചന്‍ മഞ്ഞക്കാരന്‍",
    "name_en": "Ta~nkachchan‍ ma~n~nakkaaran‍",
    "author": "ഇ സന്തോഷ് കുമാര്‍",
    "stockNumber": 552,
    "price": null,
    "image": "books/552.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റൗഡി",
    "name_en": "Raൗdi",
    "author": "പി. കേശവദേവ്",
    "stockNumber": 553,
    "price": null,
    "image": "books/553.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അലുമിനിയം കഥപറയുന്നു",
    "name_en": "Aluminiyam kathaparayunnu",
    "author": "പ്രൊഫ.എസ് ശിവദാസ്",
    "stockNumber": 554,
    "price": null,
    "image": "books/554.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മൊല്ലാക്കയുടെ കുതിരയും രസതന്ത്രവും",
    "name_en": "Mòllaakkayutè kutirayum rasatantravum",
    "author": "പ്രൊഫ.എസ് ശിവദാസ്",
    "stockNumber": 555,
    "price": null,
    "image": "books/555.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബാല രാമായണം",
    "name_en": "Baala raamaayanam",
    "author": "എന്‍ കുമാരനാശാന്‍",
    "stockNumber": 556,
    "price": null,
    "image": "books/556.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉക്രേനിയന്‍ നാടോടി കഥകള്‍",
    "name_en": "Ukreniyan‍ naatoti kathakal‍",
    "author": "തോംസൺ കെ ഫെഡ്രിക്",
    "stockNumber": 557,
    "price": null,
    "image": "books/557.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സത്യവതി",
    "name_en": "Satyavati",
    "author": "പി കെ ചന്ദ്രന്‍",
    "stockNumber": 558,
    "price": null,
    "image": "books/558.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഓടയിൽ നിന്ന്",
    "name_en": "Otayiൽ ninn",
    "author": "പി കേശവദേവ്",
    "stockNumber": 559,
    "price": null,
    "image": "books/559.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാളിദാസൻ്റെ രഘുവംശം കുട്ടികൾക്ക്",
    "name_en": "Kaalidaasaൻrè raghuvamsham kuttikaൾkk",
    "author": "പുന: കാവാലം ഗോവിന്ദന്‍ കുട്ടി നായര്‍",
    "stockNumber": 560,
    "price": null,
    "image": "books/560.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മൂന്നു കൊട്ടാരങ്ങള്‍",
    "name_en": "Moonnu kòttaara~n~nal‍",
    "author": "ഗിഫു മേലാറ്റൂര്‍",
    "stockNumber": 561,
    "price": null,
    "image": "books/561.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കളിച്ച് ചിരിച്ച് കണക്ക് പഠിക്കാം",
    "name_en": "Kalichch chirichch kanakk pathikkaam",
    "author": "സി കെ ഭാസ്കരന്‍",
    "stockNumber": 562,
    "price": null,
    "image": "books/562.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സീത",
    "name_en": "Seeta",
    "author": "പി കെ ചന്ദ്രന്‍",
    "stockNumber": 563,
    "price": null,
    "image": "books/563.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജ്ഞാന കാഥകൾ",
    "name_en": "J~naana kaathakaൾ",
    "author": "കെ ശ്രീകുമാര്‍",
    "stockNumber": 564,
    "price": null,
    "image": "books/564.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ കുട്ടിക്കാലം",
    "name_en": "Èൻrè kuttikkaalam",
    "author": "എം സജിത",
    "stockNumber": 565,
    "price": null,
    "image": "books/565.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭവന ഭേദനം ",
    "name_en": "Bhavana bhedanam ",
    "author": "വി ആര്‍ സുധീഷ്",
    "stockNumber": 566,
    "price": null,
    "image": "books/566.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൊച്ചിയിലെ നല്ല സ്ത്രീ",
    "name_en": "Kòchchiyilè nalla stree",
    "author": "കരുണാകരന്‍",
    "stockNumber": 567,
    "price": null,
    "image": "books/567.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലയാളത്തിൻ്റെ സുവര്‍ണ കഥകള്‍",
    "name_en": "Malayaalattiൻrè suvar‍na kathakal‍",
    "author": "കോവിലന്‍",
    "stockNumber": 568,
    "price": null,
    "image": "books/568.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുത്തച്ചന്‍ പറഞ്ഞ ഷേക്സ്പിയര്‍ കഥകള്‍",
    "name_en": "Muttachchan‍ para~n~na shekspiyar‍ kathakal‍",
    "author": "എം പി നീലകണ്ഠന്‍",
    "stockNumber": 569,
    "price": null,
    "image": "books/569.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിരഞ്ജനയുടെ കഥകള്‍",
    "name_en": "Nira~njanayutè kathakal‍",
    "author": "പയ്യന്നൂര്‍ കുഞ്ഞിരാമന്‍",
    "stockNumber": 570,
    "price": null,
    "image": "books/570.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു യാത്രയുടെ രണ്ട് ഭാഗം",
    "name_en": "Òru yaatrayutè rant bhaagam",
    "author": "കെ എസ് പ്രേമന്‍",
    "stockNumber": 571,
    "price": null,
    "image": "books/571.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഘാലപ്പഗോസ്",
    "name_en": "Ghaalappagos",
    "author": "ഇ സന്തോഷ് കുമാര്‍",
    "stockNumber": 572,
    "price": null,
    "image": "books/572.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അമീര്‍ ഹംസയുടെ സാഹസ കൃത്യങ്ങള്‍",
    "name_en": "Ameer‍ hamsayutè saahasa krritya~n~nal‍",
    "author": "സി.പി ഉണ്ണി",
    "stockNumber": 573,
    "price": null,
    "image": "books/573.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചാരുലത",
    "name_en": "Chaarulata",
    "author": "രവീന്ദ്രനാഥ ടാഗോര്‍",
    "stockNumber": 574,
    "price": null,
    "image": "books/574.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹനുമാനസം",
    "name_en": "Hanumaanasam",
    "author": "നന്ദന്‍",
    "stockNumber": 575,
    "price": null,
    "image": "books/575.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ക്വിസ് കേരള",
    "name_en": "Kvis kerala",
    "author": "ചേപ്പാട് ബാസ്കരന്‍ നായര്‍",
    "stockNumber": 576,
    "price": null,
    "image": "books/576.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കഥകളിലൂടെ ടാഗോര്‍",
    "name_en": "Kathakalilootè taagor‍",
    "author": "കിളിരൂര്‍ രാധാകൃഷ്ണന്‍",
    "stockNumber": 577,
    "price": null,
    "image": "books/577.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഴയും പുഴയും പൂത്തുമ്പികളും",
    "name_en": "Mazhayum puzhayum poottumpikalum",
    "author": "നാരായണന്‍ കാവുന്തായി",
    "stockNumber": 578,
    "price": null,
    "image": "books/578.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജല കന്യക",
    "name_en": "Jala kanyaka",
    "author": "പുന ഗംഗാധരന്‍",
    "stockNumber": 579,
    "price": null,
    "image": "books/579.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ കുട്ടിക്കാലം",
    "name_en": "Èൻrè kuttikkaalam",
    "author": "രവീന്ദ്രനാഥ ടാഗോര്‍",
    "stockNumber": 580,
    "price": null,
    "image": "books/580.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉയരുന്ന ചൂടും എരിയുന്ന കാടും",
    "name_en": "Uyarunna chootum èriyunna kaatum",
    "author": "വി കെ ബാസ്കരന്‍ നായര്‍",
    "stockNumber": 581,
    "price": null,
    "image": "books/581.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആല്‍മരത്തണലില്‍",
    "name_en": "Aal‍marattanalil‍",
    "author": "കിളിരൂര്‍ രാധാകൃഷ്ണന്‍",
    "stockNumber": 582,
    "price": null,
    "image": "books/582.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭൂമിശാസ്ത്ര ക്വിസ്",
    "name_en": "Bhoomishaastra kvis",
    "author": "സജിത് കുമാര്‍ .വി.കെ.",
    "stockNumber": 583,
    "price": null,
    "image": "books/583.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനുഷ്യൻ്റെ പരിണാമ ചരിത്രം",
    "name_en": "Manushyaൻrè parinaama charitram",
    "author": "ആര്‍.സുരേഷ് കുമാര്‍",
    "stockNumber": 584,
    "price": null,
    "image": "books/584.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദ്രൗപതി",
    "name_en": "Draൗpati",
    "author": "പി.കെ. ചന്ദ്രന്‍",
    "stockNumber": 585,
    "price": null,
    "image": "books/585.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടികളുടെ ഭഗവത്ഗീത",
    "name_en": "Kuttikalutè bhagavatgeeta",
    "author": "സി.വി.സുധീന്ദ്രന്‍",
    "stockNumber": 586,
    "price": null,
    "image": "books/586.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരച്ചന്‍ മക്കള്‍ അയച്ച കത്തുകൾ",
    "name_en": "Òrachchan‍ makkal‍ ayachcha kattukaൾ",
    "author": "ജവഹര്‍ലാല്‍ നെഹ്റു",
    "stockNumber": 587,
    "price": null,
    "image": "books/587.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടികളുടെ മഹാഭാഗവതം",
    "name_en": "Kuttikalutè mahaabhaagavatam",
    "author": "ഷെഗര്‍ജി",
    "stockNumber": 588,
    "price": null,
    "image": "books/588.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആകാശക്കുന്നിലെ പറവകള്‍",
    "name_en": "Aakaashakkunnilè paravakal‍",
    "author": "മനോജ് മണിയൂര്‍",
    "stockNumber": 589,
    "price": null,
    "image": "books/589.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നീലക്കുറുക്കനും മറ്റു കഥകളും",
    "name_en": "Neelakkurukkanum marru kathakalum",
    "author": "ആങ.സുഹാര",
    "stockNumber": 590,
    "price": null,
    "image": "books/590.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശാസ്ത്രം ജീവിതം",
    "name_en": "Shaastram jeevitam",
    "author": "കെ.കൃഷ്ണകുമാര്‍",
    "stockNumber": 591,
    "price": null,
    "image": "books/591.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സദുപദേശ കഥകള്‍",
    "name_en": "Sadupadesha kathakal‍",
    "author": "ഉ. ശ്രീമാന്‍ നമ്പൂതിരി",
    "stockNumber": 592,
    "price": null,
    "image": "books/592.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒലിവര്‍ ട്വിസ്റ്റ്",
    "name_en": "Òlivar‍ tvisrr",
    "author": "ചാല്‍സ് ഡിക്കന്‍സ്",
    "stockNumber": 593,
    "price": null,
    "image": "books/593.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ കഥ",
    "name_en": "Èൻrè katha",
    "author": "മടവിക്കുട്ടി",
    "stockNumber": 594,
    "price": null,
    "image": "books/594.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചെഗോവ് കഥകള്‍",
    "name_en": "Chègov kathakal‍",
    "author": "ശരത് മണ്ണൂര്‍",
    "stockNumber": 595,
    "price": null,
    "image": "books/595.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രതിക്കഥകല്‍",
    "name_en": "Ratikkathakal‍",
    "author": "രാജന്‍ തൂവാല (പരി)",
    "stockNumber": 596,
    "price": null,
    "image": "books/596.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അവിശ്വാസിയുടെ പ്രണയരേഖ",
    "name_en": "Avishvaasiyutè pranayarekha",
    "author": "ലൂയിസ് തൈക്കാട്ട്",
    "stockNumber": 597,
    "price": null,
    "image": "books/597.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പതനം",
    "name_en": "Patanam",
    "author": "എം.ടി.വസുദേവന്‍ നായര്‍",
    "stockNumber": 598,
    "price": null,
    "image": "books/598.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലോകോത്തര കഥകള്‍",
    "name_en": "Lokottara kathakal‍",
    "author": "വിവ: എസ്.ഹരീഷ്",
    "stockNumber": 600,
    "price": null,
    "image": "books/600.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗുല്‍ മുഹമ്മദ്",
    "name_en": "Gul‍ muhammad",
    "author": "ടി.പത്മനാഭന്‍",
    "stockNumber": 601,
    "price": null,
    "image": "books/601.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒട്ടകവും മറ്റു പ്രധാന കഥകളും",
    "name_en": "Òttakavum marru pradhaana kathakalum",
    "author": "എസ് കെ. പൊറ്റക്കാട്",
    "stockNumber": 602,
    "price": null,
    "image": "books/602.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജൈവ കൃഷി",
    "name_en": "Jaiva krrishi",
    "author": "കൃഷി പാടം റിസർച്ച് ടീം",
    "stockNumber": 603,
    "price": null,
    "image": "books/603.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിലാപയാത്ര",
    "name_en": "Vilaapayaatra",
    "author": "എം.ടി.വസുദേവൻ നായർ",
    "stockNumber": 604,
    "price": null,
    "image": "books/604.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജീവിത നിഴൽപ്പാടുകൾ",
    "name_en": "Jeevita nizhaൽppaatukaൾ",
    "author": "ബഷീർ",
    "stockNumber": 605,
    "price": null,
    "image": "books/605.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാർക്‌സിസവും സ്വത്വ രാഷ്‌ട്രീയവും",
    "name_en": "Maaർk‌sisavum svatva raash‌treeyavum",
    "author": "ആസാദ്",
    "stockNumber": 606,
    "price": null,
    "image": "books/606.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പോവുകയാണോ വരികയാണോ",
    "name_en": "Povukayaano varikayaano",
    "author": "വി എസ് . അനിൽ കുമാർ",
    "stockNumber": 607,
    "price": null,
    "image": "books/607.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിനാശകാലേ വിപരീത ബുദ്ധി",
    "name_en": "Vinaashakaale vipareeta buddhi",
    "author": "രമണിക്കുട്ടി",
    "stockNumber": 608,
    "price": null,
    "image": "books/608.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രകാശം പരത്തുന്ന പെൺകുട്ടി",
    "name_en": "Prakaasham parattunna pèൺkutti",
    "author": "ടി.പത്മനാഭൻ",
    "stockNumber": 609,
    "price": null,
    "image": "books/609.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അവൻ്റെ സ്മരണകൾ",
    "name_en": "Avaൻrè smaranakaൾ",
    "author": "തകഴി ശിവ ശങ്കരപ്പിള്ള",
    "stockNumber": 610,
    "price": null,
    "image": "books/610.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചെങ്ങന്നു രാത്രി",
    "name_en": "Chè~n~nannu raatri",
    "author": "വി.വി.സ്വാമി",
    "stockNumber": 611,
    "price": null,
    "image": "books/611.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രധമ ശുശ്രുഷ",
    "name_en": "Pradhama shushrusha",
    "author": "ഡോ.ബി.പത്മകുമാർ",
    "stockNumber": 612,
    "price": null,
    "image": "books/612.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാര്യം",
    "name_en": "Kaaryam",
    "author": "ഇ.പി.രാജഗോപാലൻ",
    "stockNumber": 613,
    "price": null,
    "image": "books/613.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കഥയും തിരക്കഥയും",
    "name_en": "Kathayum tirakkathayum",
    "author": "ഡോ.ജോസ് കെ.മാനുവൽ",
    "stockNumber": 614,
    "price": null,
    "image": "books/614.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "താര സ്‌പെഷ്യൽ",
    "name_en": "Taara s‌pèshyaൽ",
    "author": "വൈക്കം മുഹമ്മദ് ബഷീർ",
    "stockNumber": 615,
    "price": null,
    "image": "books/615.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആനവാരിയും പൊൻ കുരിശും",
    "name_en": "Aanavaariyum pòൻ kurishum",
    "author": "ബഷീർ",
    "stockNumber": 616,
    "price": null,
    "image": "books/616.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൂടെയില്ല ജനിക്കുന്ന നേരത്തും",
    "name_en": "Kootèyilla janikkunna nerattum",
    "author": "എസ്‌കെ. പൊട്ടക്കാട്",
    "stockNumber": 617,
    "price": null,
    "image": "books/617.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പുരാവൃത്ത കഥകൾ",
    "name_en": "Puraavrritta kathakaൾ",
    "author": "എൻ.പി.മുഹമ്മദ്",
    "stockNumber": 618,
    "price": null,
    "image": "books/618.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അളവ്",
    "name_en": "Alav",
    "author": "പി.രാജഗോപാലൻ",
    "stockNumber": 619,
    "price": null,
    "image": "books/619.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുരുക്ഷേത്രം",
    "name_en": "Kurukshetram",
    "author": "വിവ: നീല പത്മനാഭൻ",
    "stockNumber": 620,
    "price": null,
    "image": "books/620.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രണയവും സാഹിത്യവും",
    "name_en": "Pranayavum saahityavum",
    "author": "ഡോ. ഇ.ബാനെർഗി",
    "stockNumber": 621,
    "price": null,
    "image": "books/621.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്ത്യൻ അവസ്‌തകൾ",
    "name_en": "Intyaൻ avas‌takaൾ",
    "author": "ഡോ. സുകുമാരൻ അഴീക്കോട്",
    "stockNumber": 622,
    "price": null,
    "image": "books/622.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രിയപ്പെട്ട കഥകൾ",
    "name_en": "Priyappètta kathakaൾ",
    "author": "വി.ആർ.സുധീഷ്",
    "stockNumber": 623,
    "price": null,
    "image": "books/623.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തെരഞ്ഞെടുത്ത കഥകൾ",
    "name_en": "Tèra~n~nètutta kathakaൾ",
    "author": "കെ.ആർ.മല്ലിക",
    "stockNumber": 624,
    "price": null,
    "image": "books/624.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സുവർണ കഥകൾ",
    "name_en": "Suvaർna kathakaൾ",
    "author": "ആന്തൻ ചെക്കോവ്",
    "stockNumber": 625,
    "price": null,
    "image": "books/625.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അകത്തളം",
    "name_en": "Akattalam",
    "author": "തകഴി ശിവ ശങ്കരപ്പിള്ള",
    "stockNumber": 626,
    "price": null,
    "image": "books/626.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചതുരംഗം",
    "name_en": "Chaturamgam",
    "author": "രവീന്ദ്രനാഥ ടാഗോർ",
    "stockNumber": 627,
    "price": null,
    "image": "books/627.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജലരേഖകളാൽ ബ്രംശിക്കപ്പെട്ടത്",
    "name_en": "Jalarekhakalaaൽ bramshikkappèttat",
    "author": "കെ.അജിത് കുമാർ",
    "stockNumber": 628,
    "price": null,
    "image": "books/628.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ധ്വനി സിദ്ധാന്തം വാസ്തുതകളും സമീപനങ്ങളും",
    "name_en": "Dhvani siddhaantam vaastutakalum sameepana~n~nalum",
    "author": "ഡോ.ഇ ശ്രീധരൻ",
    "stockNumber": 629,
    "price": null,
    "image": "books/629.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒട്ടിപ്പോ",
    "name_en": "Òttippo",
    "author": "സുകുമാർ",
    "stockNumber": 630,
    "price": null,
    "image": "books/630.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ധ്വനി സിദ്ധാന്തം വാസ്തുതകളും സമീപനങ്ങളും",
    "name_en": "Dhvani siddhaantam vaastutakalum sameepana~n~nalum",
    "author": "ഡോ.ഇ ശ്രീധരൻ",
    "stockNumber": 631,
    "price": null,
    "image": "books/631.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭൂമിയിലെ കീടങ്ങൾ",
    "name_en": "Bhoomiyilè keeta~n~naൾ",
    "author": "സുധൂർ വളവത്തൂർ",
    "stockNumber": 632,
    "price": null,
    "image": "books/632.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുത്തും കോമയുമുള്ള ഈ ജീവിതം",
    "name_en": "Kuttum komayumulla ee jeevitam",
    "author": "ടി.പി.വേണുഗോപാലൻ",
    "stockNumber": 633,
    "price": null,
    "image": "books/633.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേശവൻ്റെ വിലാപങ്ങൾ",
    "name_en": "Keshavaൻrè vilaapa~n~naൾ",
    "author": "എം.മുകുന്ദൻ",
    "stockNumber": 634,
    "price": null,
    "image": "books/634.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സർപ്പയജ്ഞം",
    "name_en": "Saർppayaj~nam",
    "author": "ബഷീർ",
    "stockNumber": 635,
    "price": null,
    "image": "books/635.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുണ്ടൂർ കൃഷ്ണൻ കുട്ടിയുടെ കഥകൾ",
    "name_en": "Muntooർ krrishnaൻ kuttiyutè kathakaൾ",
    "author": "മുണ്ടൂർ കൃഷ്ണൻകുട്ടി",
    "stockNumber": 636,
    "price": null,
    "image": "books/636.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സാധാരണ വേഷങ്ങൾ",
    "name_en": "Saadhaarana vesha~n~naൾ",
    "author": "അംബികാസുരൻ",
    "stockNumber": 637,
    "price": null,
    "image": "books/637.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തുറന്ന ജാലകം",
    "name_en": "Turanna jaalakam",
    "author": "ലോകകഥകൾ",
    "stockNumber": 638,
    "price": null,
    "image": "books/638.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നീച വേദം",
    "name_en": "Neecha vedam",
    "author": "ഇ .സന്തോഷ് കുമാർ",
    "stockNumber": 639,
    "price": null,
    "image": "books/639.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഓർമ്മയുടെ അറകൾ",
    "name_en": "Oർmmayutè arakaൾ",
    "author": "വൈക്കം മുഹമ്മദ് ബഷീർ",
    "stockNumber": 640,
    "price": null,
    "image": "books/640.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അനർഘ നിമിഷം",
    "name_en": "Anaർgha nimisham",
    "author": "ബഷീർ",
    "stockNumber": 641,
    "price": null,
    "image": "books/641.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചെവിയോർക്കുക ! ആന്തിമ കാഹളം",
    "name_en": "Chèviyoർkkuka ! aantima kaahalam",
    "author": "ബഷീർ",
    "stockNumber": 642,
    "price": null,
    "image": "books/642.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പാവപ്പെട്ടവരുടെ വേശ്യ",
    "name_en": "Paavappèttavarutè veshya",
    "author": "ബഷീർ",
    "stockNumber": 643,
    "price": null,
    "image": "books/643.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കഥാ കൈരളി",
    "name_en": "Kathaa kairali",
    "author": "ഒ.അശോക് കുമാർ",
    "stockNumber": 644,
    "price": null,
    "image": "books/644.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "10 വിവർത്തന കഥകൾ",
    "name_en": "10 vivaർttana kathakaൾ",
    "author": "സി.വി.ബാലകൃഷ്ണൻ",
    "stockNumber": 645,
    "price": null,
    "image": "books/645.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചിരിക്കുന്ന മരപ്പാവ",
    "name_en": "Chirikkunna marappaava",
    "author": "ബഷീർ",
    "stockNumber": 646,
    "price": null,
    "image": "books/646.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബിഷപ്പുമാർ പണിയാർമഠം കുരുന്നു",
    "name_en": "Bishappumaaർ paniyaaർmatham kurunnu",
    "author": "മറിയമ്മ",
    "stockNumber": 647,
    "price": null,
    "image": "books/647.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാണ്ഡഹാർ",
    "name_en": "Kaandahaaർ",
    "author": "സന്തോഷ് പനയാൽ",
    "stockNumber": 648,
    "price": null,
    "image": "books/648.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഏറിയൊരു ഗുണം വരണം",
    "name_en": "Eriyòru gunam varanam",
    "author": "വാഴവളപ്പിൽ ഗോവിന്ദൻ",
    "stockNumber": 649,
    "price": null,
    "image": "books/649.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തട്ടാത്തിപ്പെണ്ണിന്റെ കല്യാണം",
    "name_en": "Tattaattippènninrè kalyaanam",
    "author": "എം.മുകുന്ദൻ",
    "stockNumber": 650,
    "price": null,
    "image": "books/650.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒളിത്താവളങ്ങളിലെ കുറിപ്പുകൾ",
    "name_en": "Òlittaavala~n~nalilè kurippukaൾ",
    "author": "ശരത് ചന്ദ്രൻ",
    "stockNumber": 651,
    "price": null,
    "image": "books/651.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പൊതുവിജ്ഞാനം",
    "name_en": "Pòtuvij~naanam",
    "author": "ആര്യ പ്രസിദ്ധീകരണങ്ങൾ",
    "stockNumber": 652,
    "price": null,
    "image": "books/652.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജൂത കഥകൾ",
    "name_en": "Joota kathakaൾ",
    "author": "ബേബി വെണ്ണിക്കുളം",
    "stockNumber": 653,
    "price": null,
    "image": "books/653.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാണെ കാണെ",
    "name_en": "Kaanè kaanè",
    "author": "പിപി രാമചന്ദ്രൻ",
    "stockNumber": 654,
    "price": null,
    "image": "books/654.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശാസ്ത്രം അറിയുന്നതും അറിയാത്തതും",
    "name_en": "Shaastram ariyunnatum ariyaattatum",
    "author": "ടി.എസ്.രവീന്ദ്രൻ",
    "stockNumber": 655,
    "price": null,
    "image": "books/655.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇത്തിരി കാര്യം ഒത്തിരി വെട്ടം",
    "name_en": "Ittiri kaaryam òttiri vèttam",
    "author": "ഉള്ളല ബാബു",
    "stockNumber": 656,
    "price": null,
    "image": "books/656.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളത്തിലെ കർഷകതൊഴിലാളി പ്രസ്ഥാനം",
    "name_en": "Keralattilè kaർshakatòzhilaali prasthaanam",
    "author": "വിഎസ് .അച്യുതാനന്ദൻ",
    "stockNumber": 657,
    "price": null,
    "image": "books/657.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രകൃതി പഠനം കഥകളിലൂടെയും പ്രവർത്തനങ്ങളിലൂടെയും",
    "name_en": "Prakrriti pathanam kathakalilootèyum pravaർttana~n~nalilootèyum",
    "author": "പ്രൊഫ: എസ്. ശിവദാസ്",
    "stockNumber": 658,
    "price": null,
    "image": "books/658.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പച്ച താഴ്വരയിലെ തോട്ടക്കാരൻ",
    "name_en": "Pachcha taazhvarayilè tottakkaaraൻ",
    "author": "ഉണ്ണികൃഷ്ണൻ പൂങ്കുന്നം",
    "stockNumber": 659,
    "price": null,
    "image": "books/659.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാടിന്റെ വിളി",
    "name_en": "Kaatinrè vili",
    "author": "ജാക്ക് ലണ്ടൻ",
    "stockNumber": 660,
    "price": null,
    "image": "books/660.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പൊൻകണി",
    "name_en": "Pòൻkani",
    "author": "ഹരീഷ് .ആർ.നമ്പൂതിരിപ്പാട്",
    "stockNumber": 661,
    "price": null,
    "image": "books/661.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജീവി ലോകത്തിലെ വിസ്മയങ്ങൾ",
    "name_en": "Jeevi lokattilè vismaya~n~naൾ",
    "author": "കെഎൻ.കുട്ടി കടമ്പഴിപ്പുറം",
    "stockNumber": 662,
    "price": null,
    "image": "books/662.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉറൂബിൻ്റെ കുട്ടികഥകൾ",
    "name_en": "Uroobiൻrè kuttikathakaൾ",
    "author": "ഉറൂബ്",
    "stockNumber": 663,
    "price": null,
    "image": "books/663.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദി ട്രെയിൻ",
    "name_en": "Di trèyiൻ",
    "author": "വി.വി.രവീന്ദ്രൻ",
    "stockNumber": 664,
    "price": null,
    "image": "books/664.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൊടിയേറ്റം",
    "name_en": "Kòtiyerram",
    "author": "അധൂർ ഗോപാല കൃഷ്ണൻ",
    "stockNumber": 665,
    "price": null,
    "image": "books/665.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നാട്ടുമ്പുറം",
    "name_en": "Naattumpuram",
    "author": "എം.മുകുന്ദൻ",
    "stockNumber": 666,
    "price": null,
    "image": "books/666.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അടിയൊഴുക്കുകൾ",
    "name_en": "Atiyòzhukkukaൾ",
    "author": "എം.ടി.വസുദേവൻ നായർ",
    "stockNumber": 667,
    "price": null,
    "image": "books/667.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഞ്ഞിന്റെ ഹൃദയവും കടന്ന്",
    "name_en": "Ma~n~ninrè hrridayavum katann",
    "author": "ബാജി",
    "stockNumber": 668,
    "price": null,
    "image": "books/668.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജീവിതം സുന്ദരമാണു പക്ഷേ",
    "name_en": "Jeevitam sundaramaanu pakshe",
    "author": "തകഴി ശിവ ശങ്കരപ്പിള്ള",
    "stockNumber": 669,
    "price": null,
    "image": "books/669.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പെണ്ണ്",
    "name_en": "Pènn",
    "author": "തകഴി ശിവ ശങ്കരപ്പിള്ള",
    "stockNumber": 670,
    "price": null,
    "image": "books/670.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിർമിതി ചരിത്രവും ചരിത്ര നിർമിതിയും",
    "name_en": "Niർmiti charitravum charitra niർmitiyum",
    "author": "ഡോ.ടി.പവിത്രൻ",
    "stockNumber": 671,
    "price": null,
    "image": "books/671.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗോത്രപ്പെരുമ ആധിവാസി ജീവിതം,കലാ സംസ്കാരം",
    "name_en": "Gotrappèruma aadhivaasi jeevitam,kalaa samskaaram",
    "author": "ഡോ.എ.എസ്.പ്രശാന്ത് കൃഷ്ണൻ",
    "stockNumber": 672,
    "price": null,
    "image": "books/672.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അവശ്യം അനുവർത്തിക്കേണ്ട വിദ്യഭ്യാസം",
    "name_en": "Avashyam anuvaർttikkenta vidyabhyaasam",
    "author": "നിത്യ ചൈതന്യധി",
    "stockNumber": 673,
    "price": null,
    "image": "books/673.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കളികൾ ഉദ്ഭവവും വളർച്ചയും",
    "name_en": "Kalikaൾ udbhavavum valaർchchayum",
    "author": "സനിൽ പി.തോമസ്",
    "stockNumber": 674,
    "price": null,
    "image": "books/674.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഷെർലോക്",
    "name_en": "Shèർlok",
    "author": "എം.ടി.വസുദേവൻ നായർ",
    "stockNumber": 675,
    "price": null,
    "image": "books/675.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തകഴി ഓർമ കാലം പഠനം",
    "name_en": "Takazhi oർma kaalam pathanam",
    "author": "കെ.ജയലാൽ",
    "stockNumber": 676,
    "price": null,
    "image": "books/676.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രണയത്തിൻ്റെയും രതിയുടേയും മാനശാസ്ത്രം",
    "name_en": "Pranayattiൻrèyum ratiyuteyum maanashaastram",
    "author": "വിവ:പിപി.സത്യൻ",
    "stockNumber": 677,
    "price": null,
    "image": "books/677.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "12 ലാറ്റിൻ അമേരിക്കൻ കഥകൾ",
    "name_en": "12 laarriൻ amerikkaൻ kathakaൾ",
    "author": "വിവ: വി കെ ഷറഫുദ്ധീൻ",
    "stockNumber": 678,
    "price": null,
    "image": "books/678.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സെബിയായുഡെ കഥകൾ",
    "name_en": "Sèbiyaayudè kathakaൾ",
    "author": "ടിപി.സെബിയ",
    "stockNumber": 679,
    "price": null,
    "image": "books/679.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആണെഴുത്തിൻ്റെ നിഗൂഡ ഭാവങ്ങൾ",
    "name_en": "Aanèzhuttiൻrè nigooda bhaava~n~naൾ",
    "author": "സുരേഷ് ബാബു",
    "stockNumber": 680,
    "price": null,
    "image": "books/680.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കിളിപ്പേച്ചു കേക്കവ",
    "name_en": "Kilippechchu kekkava",
    "author": "ടി എൻ .പ്രകാശ്",
    "stockNumber": 681,
    "price": null,
    "image": "books/681.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നോൺ വെജ് പശുവും മറ്റു കഥകളും",
    "name_en": "Noൺ vèj pashuvum marru kathakalum",
    "author": "വിവ: എ പി കുന്നം",
    "stockNumber": 682,
    "price": null,
    "image": "books/682.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റൂമോർഗിലെ കോലപാതകവും മറ്റു കഥകളും",
    "name_en": "Roomoർgilè kolapaatakavum marru kathakalum",
    "author": "വിവ : എം ടി ബേബി",
    "stockNumber": 683,
    "price": null,
    "image": "books/683.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വാതിലുകളില്ലാത്ത വീട്",
    "name_en": "Vaatilukalillaatta veet",
    "author": "വി.ശ്യാമ",
    "stockNumber": 684,
    "price": null,
    "image": "books/684.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശിഥില ബന്ധങ്ങൾ",
    "name_en": "Shithila bandha~n~naൾ",
    "author": "നിലയ്ക്കലേത്ത് രവീന്ദ്രൻ നായർ",
    "stockNumber": 685,
    "price": null,
    "image": "books/685.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നേത്ര ധാമിലേ കൂനൻ",
    "name_en": "Netra dhaamile koonaൻ",
    "author": "വിവ: പ്രേമാനന്ദ് ചമ്പാട്",
    "stockNumber": 686,
    "price": null,
    "image": "books/686.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രകാശനം",
    "name_en": "Prakaashanam",
    "author": "ഹരിദാസ് കരിവെള്ളൂർ",
    "stockNumber": 687,
    "price": null,
    "image": "books/687.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മൊബൈൽ ടു മൊബൈൽ",
    "name_en": "Mòbaiൽ tu mòbaiൽ",
    "author": "ജോയ്സി",
    "stockNumber": 688,
    "price": null,
    "image": "books/688.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിങ്ങളുടെ ലൈംഗിക ജീവിതം",
    "name_en": "Ni~n~nalutè laimgika jeevitam",
    "author": "ഡോ.പ്രകാശ് കോത്താരി",
    "stockNumber": 689,
    "price": null,
    "image": "books/689.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മെച്ചിൽ സ്ഥലങ്ങൾ",
    "name_en": "Mèchchiൽ sthala~n~naൾ",
    "author": "സി.വി.ബാലകൃഷ്ണൻ",
    "stockNumber": 690,
    "price": null,
    "image": "books/690.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ പ്രിയപ്പെട്ട കഥകൾ",
    "name_en": "Èൻrè priyappètta kathakaൾ",
    "author": "ഒ.വി.വിജയൻ",
    "stockNumber": 691,
    "price": null,
    "image": "books/691.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നരനായും പറവയായും",
    "name_en": "Naranaayum paravayaayum",
    "author": "സന്തോഷ് ഏച്ചിക്കാനം",
    "stockNumber": 692,
    "price": null,
    "image": "books/692.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഗൻസിങ്ങിൻ്റെ മരണം",
    "name_en": "Magaൻsi~n~niൻrè maranam",
    "author": "ടി.പത്മനാഭൻ",
    "stockNumber": 693,
    "price": null,
    "image": "books/693.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആനിമൽ പ്ലാനറ്റ്",
    "name_en": "Aanimaൽ plaanarr",
    "author": "സെനെൽ ജോസ്",
    "stockNumber": 694,
    "price": null,
    "image": "books/694.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പെണ്ണു പെണ്ണായതും പിന്നെ ശരീരമയവും",
    "name_en": "Pènnu pènnaayatum pinnè shareeramayavum",
    "author": "സി.വി.സുധീന്ദ്രൻ",
    "stockNumber": 695,
    "price": null,
    "image": "books/695.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാരാരുടെ കുരുക്ഷേത്രം",
    "name_en": "Maaraarutè kurukshetram",
    "author": "എം എൻ . കാരശേരി",
    "stockNumber": 696,
    "price": null,
    "image": "books/696.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അംബേദ്കറുടെ മരണം",
    "name_en": "Ambedkarutè maranam",
    "author": "വിവ:ബി.വി",
    "stockNumber": 697,
    "price": null,
    "image": "books/697.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉണ്മ കഥകൾ",
    "name_en": "Unma kathakaൾ",
    "author": "മാധവിക്കുട്ടി",
    "stockNumber": 698,
    "price": null,
    "image": "books/698.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വാക്കും പ്രതീകവും",
    "name_en": "Vaakkum prateekavum",
    "author": "പി.സുരേന്ദ്രൻ",
    "stockNumber": 699,
    "price": null,
    "image": "books/699.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തെണ്ടി വർഗം",
    "name_en": "Tènti vaർgam",
    "author": "തകഴി ശിവ ശങ്കരപ്പിള്ള",
    "stockNumber": 700,
    "price": null,
    "image": "books/700.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദേവദാസ്",
    "name_en": "Devadaas",
    "author": "വിവ: കെ.ബാസ്‌കരൻ",
    "stockNumber": 701,
    "price": null,
    "image": "books/701.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒട്ടകവും മറ്റു പ്രധാന കഥകളും",
    "name_en": "Òttakavum marru pradhaana kathakalum",
    "author": null,
    "stockNumber": 702,
    "price": null,
    "image": "books/702.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അന്ധ കന്യക",
    "name_en": "Andha kanyaka",
    "author": "വിജയ ലക്ഷ്മി",
    "stockNumber": 703,
    "price": null,
    "image": "books/703.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കരിന്തണല്‍",
    "name_en": "Karintanal‍",
    "author": "ജയനന്‍",
    "stockNumber": 704,
    "price": null,
    "image": "books/704.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാജിക് മാജിക്",
    "name_en": "Maajik maajik",
    "author": "ഗോപിനാട് മുതുകാട്",
    "stockNumber": 705,
    "price": null,
    "image": "books/705.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുള്ളും പൂവും പിണങ്ങാതെ",
    "name_en": "Mullum poovum pina~n~naatè",
    "author": "അഴാച്ചേരി രാമചന്ദ്രന്‍",
    "stockNumber": 706,
    "price": null,
    "image": "books/706.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇപ്പോള്‍ നദീമുഖം ശാന്തം",
    "name_en": "Ippol‍ nadeemukham shaantam",
    "author": "അഴാച്ചേരി രാമചന്ദ്രന്‍",
    "stockNumber": 707,
    "price": null,
    "image": "books/707.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മരിച്ചവരുടെ പനീര്‍ പൂക്കല്‍",
    "name_en": "Marichchavarutè paneer‍ pookkal‍",
    "author": "പികെ.പാറക്കടവ്",
    "stockNumber": 708,
    "price": null,
    "image": "books/708.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മൂഖാമുഖം",
    "name_en": "Mookhaamukham",
    "author": "ബിഎം.സുഹാര",
    "stockNumber": 709,
    "price": null,
    "image": "books/709.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മരിച്ചവര്‍ക്കുള്ള കുപ്പായം",
    "name_en": "Marichchavar‍kkulla kuppaayam",
    "author": "അര്‍ഷാദ് ബത്തേരി",
    "stockNumber": 710,
    "price": null,
    "image": "books/710.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വേട്ടക്കാരുടെ മാനിഫെസ്റ്റോ",
    "name_en": "Vettakkaarutè maaniphèsrro",
    "author": "പൊന്ന്യം ചന്ദ്രന്‍",
    "stockNumber": 711,
    "price": null,
    "image": "books/711.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചാര്‍ളി ചാപ്ലിന്‍",
    "name_en": "Chaar‍li chaaplin‍",
    "author": "രാധാകൃഷ്ണന്‍ അടുത്തില",
    "stockNumber": 712,
    "price": null,
    "image": "books/712.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തെലുങ്കാന സമര കഥകള്‍",
    "name_en": "Tèlu~nkaana samara kathakal‍",
    "author": "അശോകന്‍ ഏങ്ങണ്ടിയൂര്‍",
    "stockNumber": 713,
    "price": null,
    "image": "books/713.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റഷ്യന്‍ നാടോടി കഥകള്‍",
    "name_en": "Rashyan‍ naatoti kathakal‍",
    "author": "ശരത് മണ്ണൂര്‍",
    "stockNumber": 714,
    "price": null,
    "image": "books/714.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പർദ്ദയ്ക്കുള്ളിൽ എലി ",
    "name_en": "Paർddaykkulliൽ èli ",
    "author": "പി പി ഹമീദ് ",
    "stockNumber": 715,
    "price": null,
    "image": "books/715.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുരുക്ഷേത്രം",
    "name_en": "Kurukshetram",
    "author": "നീല പത്മനാഭന്‍",
    "stockNumber": 716,
    "price": null,
    "image": "books/716.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തെരെഞ്ഞെടുത്ത കഥകള്‍",
    "name_en": "Tèrè~n~nètutta kathakal‍",
    "author": "കെ.ആര്‍.മല്ലിക",
    "stockNumber": 717,
    "price": null,
    "image": "books/717.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കത്തുന്ന തലയണ ",
    "name_en": "Kattunna talayana ",
    "author": "ശിഹാബുദ്ധീന്‍ പൊയ്ത്തു കടവ്",
    "stockNumber": 718,
    "price": null,
    "image": "books/718.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അവിശ്വാസിയുടെ പ്രണയരേഖ",
    "name_en": "Avishvaasiyutè pranayarekha",
    "author": "ലൂയിസ് തൈക്കാട്ടില്‍",
    "stockNumber": 719,
    "price": null,
    "image": "books/719.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തൊഴില്‍ വകുപ്പും എലികളും",
    "name_en": "Tòzhil‍ vakuppum èlikalum",
    "author": "സി പി .നായര്‍",
    "stockNumber": 720,
    "price": null,
    "image": "books/720.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അമേരിക്കയെ ദൈവം രക്ഷിക്കട്ടെ",
    "name_en": "Amerikkayè daivam rakshikkattè",
    "author": "പികെ.പാറക്കടവ്",
    "stockNumber": 721,
    "price": null,
    "image": "books/721.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലോര്‍ക്കയുടെ തെരെഞ്ഞെടുത്ത കവിതകള്‍",
    "name_en": "Lor‍kkayutè tèrè~n~nètutta kavitakal‍",
    "author": "മധു മാസ്റ്റര്‍",
    "stockNumber": 722,
    "price": null,
    "image": "books/722.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പാബ്ലോ നെരൂധയുടെ പ്രണയ കവിതകള്‍",
    "name_en": "Paablo nèroodhayutè pranaya kavitakal‍",
    "author": "എന് പി ചന്ദ്രശേഖരന്‍",
    "stockNumber": 723,
    "price": null,
    "image": "books/723.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തീ തൊട്ടു ഞാന്‍ തീനാമ്പായി",
    "name_en": "Tee tòttu ~naan‍ teenaampaayi",
    "author": "എന്‍.പി.ചന്ദ്രശേഖരന്‍",
    "stockNumber": 724,
    "price": null,
    "image": "books/724.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എംഗല്‍സിൻ്റെ കവിതകള്‍",
    "name_en": "Èmgal‍siൻrè kavitakal‍",
    "author": "നിലമ്പൂര്‍ മധുസൂദനന്‍",
    "stockNumber": 725,
    "price": null,
    "image": "books/725.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വീട്ടിലേക്കുള്ള വഴികള്‍",
    "name_en": "Veettilekkulla vazhikal‍",
    "author": "പവിത്രന്‍ തീക്കുനി",
    "stockNumber": 726,
    "price": null,
    "image": "books/726.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വഴി തേടുന്ന വെളിച്ചങ്ങള്‍",
    "name_en": "Vazhi tetunna vèlichcha~n~nal‍",
    "author": "പി മധുസൂദനന്‍",
    "stockNumber": 727,
    "price": null,
    "image": "books/727.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നീലി",
    "name_en": "Neeli",
    "author": "ഏഴാച്ചേരി രാമചന്ദ്രന്‍",
    "stockNumber": 728,
    "price": null,
    "image": "books/728.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിശ്വ പ്രസീദ കഥകള്‍",
    "name_en": "Vishva praseeda kathakal‍",
    "author": "പി. വിശ്വനാഥന്‍",
    "stockNumber": 729,
    "price": null,
    "image": "books/729.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുദ്ര രാക്ഷസ കഥ",
    "name_en": "Mudra raakshasa katha",
    "author": "ഡോ. കെ.എച്ച്. സുബ്രഹ്മണ്യന്‍",
    "stockNumber": 730,
    "price": null,
    "image": "books/730.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കമ്മ്യൂണിസ്റ്റ് മാനിഫെസ്റ്റോ",
    "name_en": "Kammyoonisrr maaniphèsrro",
    "author": "മാര്‍ക്സ്",
    "stockNumber": 731,
    "price": null,
    "image": "books/731.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എ.അയ്യപ്പന്‍ നരകത്തിൻ്റെ വിശിഷ്ട കവിത",
    "name_en": "È.ayyappan‍ narakattiൻrè vishishta kavita",
    "author": "ബുന്ദ",
    "stockNumber": 732,
    "price": null,
    "image": "books/732.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ടി പത്മനാഭൻ്റെ രാഷ്ട്രീയ കഥകള്‍",
    "name_en": "Ti patmanaabhaൻrè raashtreeya kathakal‍",
    "author": "ടി.പത്മനാഭന്‍",
    "stockNumber": 733,
    "price": null,
    "image": "books/733.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അരങ്ങു മുതല്‍ അഭ്രപാളി വരെ",
    "name_en": "Ara~n~nu mutal‍ abhrapaali varè",
    "author": "ഡോ.സിബു മോഡയില്‍",
    "stockNumber": 734,
    "price": null,
    "image": "books/734.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അന്യദേശ കഥകള്‍",
    "name_en": "Anyadesha kathakal‍",
    "author": "സി.വി.ബാലകൃഷ്ണന്‍",
    "stockNumber": 735,
    "price": null,
    "image": "books/735.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഴയില്‍ കുതിർന്ന രാത്രി",
    "name_en": "Mazhayil‍ kutiർnna raatri",
    "author": "ബുന്ദ ദേവ ബോസ്",
    "stockNumber": 736,
    "price": null,
    "image": "books/736.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാളിദാസന്‍ മേഘസന്ദേശം",
    "name_en": "Kaalidaasan‍ meghasandesham",
    "author": "തിരുനല്ലൂര്‍ കരുണാകരന്‍",
    "stockNumber": 737,
    "price": null,
    "image": "books/737.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എകെജി",
    "name_en": "Èkèji",
    "author": "പിവികെ.പനയാല്‍",
    "stockNumber": 738,
    "price": null,
    "image": "books/738.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഹാഭാരത കഥകളും പാക്കനാരും",
    "name_en": "Mahaabhaarata kathakalum paakkanaarum",
    "author": "രാജന്‍ തിരുവോത്ത്",
    "stockNumber": 739,
    "price": null,
    "image": "books/739.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഡോക്ടര്‍മാര്‍ടെ ജീവിതത്തില്‍ നിന്ന്",
    "name_en": "Doktar‍maar‍tè jeevitattil‍ ninn",
    "author": "ഉഞ.ജ കൃഷ്ണന്‍",
    "stockNumber": 740,
    "price": null,
    "image": "books/740.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജിപ്സികളുടെ പ്രണയം",
    "name_en": "Jipsikalutè pranayam",
    "author": "ഉഒ.ഘഛഞഅചട",
    "stockNumber": 741,
    "price": null,
    "image": "books/741.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഴ നിന്നാലും മരം പെയ്യും",
    "name_en": "Mazha ninnaalum maram pèyyum",
    "author": "ഗണേഷ് വേളാണ്ടി",
    "stockNumber": 742,
    "price": null,
    "image": "books/742.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിചിത്ര വ്യാപാരി",
    "name_en": "Vichitra vyaapaari",
    "author": "പട്ടണക്കാട്ട് അബ്ദുള്‍ ഖാദര്‍",
    "stockNumber": 743,
    "price": null,
    "image": "books/743.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭൈരവി രാഗം",
    "name_en": "Bhairavi raagam",
    "author": "ബിമല്‍ ചിത്ര",
    "stockNumber": 744,
    "price": null,
    "image": "books/744.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലേഷ്യ",
    "name_en": "Maleshya",
    "author": "ഡോ.ഷാഫി അബ്ദുള്ള",
    "stockNumber": 745,
    "price": null,
    "image": "books/745.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മയക്കോവ്സ്കി കവിതകള്‍",
    "name_en": "Mayakkovski kavitakal‍",
    "author": "ജ്യോതിഭായ് പരിയാടത്ത്",
    "stockNumber": 746,
    "price": null,
    "image": "books/746.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒഴിവു ദിവസത്തെ കളി",
    "name_en": "Òzhivu divasattè kali",
    "author": "ഉണ്ണി.ആര്‍",
    "stockNumber": 747,
    "price": null,
    "image": "books/747.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മോപ്പസാനിൻ്റെ പത്തു കഥകള്‍",
    "name_en": "Moppasaaniൻrè pattu kathakal‍",
    "author": "നാണു പിണറായി",
    "stockNumber": 748,
    "price": null,
    "image": "books/748.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഷേക്സ്പയര്‍ കഥകള്‍",
    "name_en": "Shekspayar‍ kathakal‍",
    "author": "രാജന്‍ തിരുവോത്ത്",
    "stockNumber": 749,
    "price": null,
    "image": "books/749.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചോല മരങ്ങളില്ലാത്ത വഴി",
    "name_en": "Chola mara~n~nalillaatta vazhi",
    "author": "കെ.പി.സുധീര",
    "stockNumber": 750,
    "price": null,
    "image": "books/750.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വാനമൃധം",
    "name_en": "Vaanamrridham",
    "author": "ചെറിയ മുണ്ടം അബ്ദുള്‍ റസാഖ്",
    "stockNumber": 751,
    "price": null,
    "image": "books/751.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മോഷ്ടാവിൻ്റെ ദിനക്കുറിപ്പുകള്‍",
    "name_en": "Moshtaaviൻrè dinakkurippukal‍",
    "author": "ഷെനെ",
    "stockNumber": 752,
    "price": null,
    "image": "books/752.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹജ്ജുമ്മയും അല്‍പേശ്വരനും",
    "name_en": "Hajjummayum al‍peshvaranum",
    "author": "അബൂബക്കര്‍ കാപ്പാട്",
    "stockNumber": 753,
    "price": null,
    "image": "books/753.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാലത്തിനു മുന്‍പെ നടന്നവര്‍",
    "name_en": "Kaalattinu mun‍pè natannavar‍",
    "author": "ജോ? പോള്‍",
    "stockNumber": 754,
    "price": null,
    "image": "books/754.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മരണം അയാൾക്ക് ഒരു തമാശ",
    "name_en": "Maranam ayaaൾkk òru tamaasha",
    "author": "ചെറിയ മുണ്ടം അബ്ദുള്‍ റസാക്ക്",
    "stockNumber": 755,
    "price": null,
    "image": "books/755.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആയില്യം കാവ്",
    "name_en": "Aayilyam kaav",
    "author": "ആറ്റു മാനൂര്‍ ശിവകുമാര്‍",
    "stockNumber": 756,
    "price": null,
    "image": "books/756.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഓര്‍മ്മശക്തിയിലൂടെ ജീവിത വിജയം",
    "name_en": "Or‍mmashaktiyilootè jeevita vijayam",
    "author": "ജെയിംസ് ബാര്‍ണര്‍",
    "stockNumber": 757,
    "price": null,
    "image": "books/757.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചാലിയാര്‍ രേഖകൾ",
    "name_en": "Chaaliyaar‍ rekhakaൾ",
    "author": "ഡോ.എ നുജൂം",
    "stockNumber": 758,
    "price": null,
    "image": "books/758.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗസലുകല്‍ പൂക്കുന്ന രാത്രി",
    "name_en": "Gasalukal‍ pookkunna raatri",
    "author": "ഒ.എന്‍.വി",
    "stockNumber": 759,
    "price": null,
    "image": "books/759.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാര്‍ക്കിസിൻ്റെ വീട്",
    "name_en": "Maar‍kkisiൻrè veet",
    "author": "കെ.ബാലകൃഷ്ണന്‍",
    "stockNumber": 760,
    "price": null,
    "image": "books/760.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സത്യം കണ്ടേതിയ സഘവ് ലക്ഷ്മണൻ",
    "name_en": "Satyam kantetiya saghav lakshmanaൻ",
    "author": "മിറക്കിള്‍ പബ്ലിക്കേഷന്‍സ്",
    "stockNumber": 761,
    "price": null,
    "image": "books/761.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മീഖായേലിൻ്റെ ജീവചരിത്രം ആഥവാ എൻ്റെ ആത്മകഥ",
    "name_en": "Meekhaayeliൻrè jeevacharitram aathavaa èൻrè aatmakatha",
    "author": "ജോസ് ആൻ്റണീ കുരീപ്പുഴ",
    "stockNumber": 762,
    "price": null,
    "image": "books/762.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാവ്യ ചിന്താ വിഷയങ്ങള്‍",
    "name_en": "Kaavya chintaa vishaya~n~nal‍",
    "author": "ഇടമറ്റം രത്നപ്പന്‍",
    "stockNumber": 763,
    "price": null,
    "image": "books/763.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജീവിത വിജയ മന്ദ്രങ്ങള്‍",
    "name_en": "Jeevita vijaya mandra~n~nal‍",
    "author": "സെബിന്‍ എസ് കൊട്ടാരം",
    "stockNumber": 764,
    "price": null,
    "image": "books/764.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇവര്‍ വഴികാട്ടികൾ",
    "name_en": "Ivar‍ vazhikaattikaൾ",
    "author": "കെ.ശാരദാമണി",
    "stockNumber": 765,
    "price": null,
    "image": "books/765.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിധിയുടെ തടവുകാരി",
    "name_en": "Vidhiyutè tatavukaari",
    "author": "കെ.എം.ജമീല",
    "stockNumber": 766,
    "price": null,
    "image": "books/766.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രണ ഭൂമിയിലെ മഞ്ഞ റോസാപ്പൂക്കള്‍",
    "name_en": "Rana bhoomiyilè ma~n~na rosaappookkal‍",
    "author": "നളിനി സതീഷ്",
    "stockNumber": 767,
    "price": null,
    "image": "books/767.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മരുഭൂമിയിലെ മഴമേഘങ്ങള്‍",
    "name_en": "Marubhoomiyilè mazhamegha~n~nal‍",
    "author": "അമ്മര്‍ കിഴക്കുംപുറത്ത്",
    "stockNumber": 768,
    "price": null,
    "image": "books/768.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാപ്പിളപ്പാട്ടിൻ്റെ മാധുര്യം",
    "name_en": "Maappilappaattiൻrè maadhuryam",
    "author": "ടി കെ ഹംസ",
    "stockNumber": 769,
    "price": null,
    "image": "books/769.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അവസാനത്തെ പിരീഡ് ",
    "name_en": "Avasaanattè pireed ",
    "author": "സുമോദ്",
    "stockNumber": 770,
    "price": null,
    "image": "books/770.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മണ്ണിൻ്റെ ഹൃദയവും കടന്ന്",
    "name_en": "Manniൻrè hrridayavum katann",
    "author": "ഭാജി",
    "stockNumber": 771,
    "price": null,
    "image": "books/771.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഞാന്‍ ഹരി തന്നേയാണ്",
    "name_en": "~naan‍ hari tanneyaan",
    "author": "സുമോദ്",
    "stockNumber": 772,
    "price": null,
    "image": "books/772.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുന്നരങ്ങ്",
    "name_en": "Munnara~n~n",
    "author": "ഒലിവ്",
    "stockNumber": 773,
    "price": null,
    "image": "books/773.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാല്‍പ്പാടുകള്‍",
    "name_en": "Kaal‍ppaatukal‍",
    "author": "കാരൂര്‍ സോമന്‍",
    "stockNumber": 774,
    "price": null,
    "image": "books/774.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗോവര്‍ധനനയച്ച കത്തുകൾ",
    "name_en": "Govar‍dhananayachcha kattukaൾ",
    "author": "യു പി ജയരാജ്",
    "stockNumber": 775,
    "price": null,
    "image": "books/775.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പാരംബര്യ ഗര്‍ഭ ശ്രുഷൂഷ രീതികള്‍",
    "name_en": "Paarambarya gar‍bha shrushoosha reetikal‍",
    "author": "സിന്ധു സതീഷ്",
    "stockNumber": 776,
    "price": null,
    "image": "books/776.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്റ്റുവര്‍ട്ട് ലിറ്റില്‍",
    "name_en": "Srruvar‍tt lirril‍",
    "author": "ഇബി.വൈറ്റ്",
    "stockNumber": 777,
    "price": null,
    "image": "books/777.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാനന കന്യക",
    "name_en": "Kaanana kanyaka",
    "author": "റഫേല്‍ മരോക്കി",
    "stockNumber": 778,
    "price": null,
    "image": "books/778.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുല്‍സിത നീക്കങ്ങളില്‍ ദൈവം",
    "name_en": "Kul‍sita neekka~n~nalil‍ daivam",
    "author": "അന്‍വര്‍ അബ്ദുള്ള",
    "stockNumber": 779,
    "price": null,
    "image": "books/779.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കോസലം",
    "name_en": "Kosalam",
    "author": "പ്രസന്നന്‍ ചമ്പക്കര",
    "stockNumber": 780,
    "price": null,
    "image": "books/780.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒഴിവുകാലം",
    "name_en": "Òzhivukaalam",
    "author": "ഡോ.കെ.ശ്രീകുമാര്‍",
    "stockNumber": 781,
    "price": null,
    "image": "books/781.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാലാഘമാര്‍ പരസ്പരം സാംസാരിക്കാറില്ല",
    "name_en": "Maalaaghamaar‍ parasparam saamsaarikkaarilla",
    "author": "ജയന്‍ ശിവപുരം",
    "stockNumber": 782,
    "price": null,
    "image": "books/782.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലേഷ്യ വിശ്വാസം",
    "name_en": "Maleshya vishvaasam",
    "author": "സൗന്ദര്യം",
    "stockNumber": 783,
    "price": null,
    "image": "books/783.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുറിക്കുള്ളില്‍ മഴ പെയ്യുകയാണ്",
    "name_en": "Murikkullil‍ mazha pèyyukayaan",
    "author": "ഉസ്മാന്‍ എരുമ്പഴി",
    "stockNumber": 784,
    "price": null,
    "image": "books/784.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഴക്കണ്ണാടി",
    "name_en": "Mazhakkannaati",
    "author": "ഇന്നസെൻ്റ്",
    "stockNumber": 785,
    "price": null,
    "image": "books/785.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മകുടി",
    "name_en": "Makuti",
    "author": "എം.എസ്.കുമാര്‍",
    "stockNumber": 786,
    "price": null,
    "image": "books/786.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രണയ ജാതകം",
    "name_en": "Pranaya jaatakam",
    "author": "ഷാജു യോഹന്നാന്‍",
    "stockNumber": 787,
    "price": null,
    "image": "books/787.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുനമ്പ്",
    "name_en": "Munamp",
    "author": "ടി എൻ.ഗോപകുമാര്‍",
    "stockNumber": 788,
    "price": null,
    "image": "books/788.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രസ വിചാരം",
    "name_en": "Rasa vichaaram",
    "author": "ഡോ.ദേവി സേവിയര്‍",
    "stockNumber": 789,
    "price": null,
    "image": "books/789.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചുഴി",
    "name_en": "Chuzhi",
    "author": "ചെറിയ മുണ്ടം അബ്ദുള്‍ റസാഖ്",
    "stockNumber": 790,
    "price": null,
    "image": "books/790.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജീവിത വിജയ മന്ദ്രങ്ങള്‍",
    "name_en": "Jeevita vijaya mandra~n~nal‍",
    "author": "സെബിന്‍ എസ് കൊട്ടാരം",
    "stockNumber": 791,
    "price": null,
    "image": "books/791.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബാങ്കില്‍ എൻ്റെ ജീവിതം",
    "name_en": "Baa~nkil‍ èൻrè jeevitam",
    "author": "കെ.സുകുമാരന്‍",
    "stockNumber": 792,
    "price": null,
    "image": "books/792.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിരുന്നിനിടയിലെ കലാപം",
    "name_en": "Virunninitayilè kalaapam",
    "author": "ഹാര്‍ഡ് പ്രിന്‍്റര്‍",
    "stockNumber": 793,
    "price": null,
    "image": "books/793.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അടയാള മുദ്രകള്‍",
    "name_en": "Atayaala mudrakal‍",
    "author": "യു.എ.കാധര്‍",
    "stockNumber": 794,
    "price": null,
    "image": "books/794.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റാം കെ നാം",
    "name_en": "Raam kè naam",
    "author": "ആനന്ദ് പദ്വര്‍ദ്ധന്‍",
    "stockNumber": 795,
    "price": null,
    "image": "books/795.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാര്‍ക്ക് തിരുച്ചു വരുന്നു",
    "name_en": "Maar‍kk tiruchchu varunnu",
    "author": "ഇ രാമചന്ദ്രന്‍",
    "stockNumber": 796,
    "price": null,
    "image": "books/796.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാലത്തിന്നു മുന്‍പെ നടന്നവര്‍",
    "name_en": "Kaalattinnu mun‍pè natannavar‍",
    "author": "ജോൺ പോള്‍",
    "stockNumber": 797,
    "price": null,
    "image": "books/797.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിദ്യാഭ്യാസം തൊഴില്‍ ശാലയില്‍ നിന്നൊരു തിരിഞ്ഞ് നോട്ടം",
    "name_en": "Vidyaabhyaasam tòzhil‍ shaalayil‍ ninnòru tiri~n~n nottam",
    "author": "എഎസ്.ഹരിദാസ്",
    "stockNumber": 798,
    "price": null,
    "image": "books/798.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കോര്‍ധെറോ",
    "name_en": "Kor‍dhèro",
    "author": "സി.എം.സി",
    "stockNumber": 799,
    "price": null,
    "image": "books/799.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രൊഫസറുടെ ലോകം",
    "name_en": "Pròphasarutè lokam",
    "author": "ഗഘ. മോഹന വര്‍മ്മ",
    "stockNumber": 800,
    "price": null,
    "image": "books/800.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തൂവല്‍ക്കിനാവ്",
    "name_en": "Tooval‍kkinaav",
    "author": "റാം കുമാര്‍ മൂവോവാധ്യായ",
    "stockNumber": 801,
    "price": null,
    "image": "books/801.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലക്ഷ്മി എന്‍ മേനോന്‍",
    "name_en": "Lakshmi èn‍ menon‍",
    "author": "ജി.കുമാരപ്പിള്ള",
    "stockNumber": 802,
    "price": null,
    "image": "books/802.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു ജനാദിപത്യ വാദിയുടെ വീണ്ടുവിചാരങ്ങള്‍",
    "name_en": "Òru janaadipatya vaadiyutè veentuvichaara~n~nal‍",
    "author": "കെ.വേണു",
    "stockNumber": 803,
    "price": null,
    "image": "books/803.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജി.കുമാരപ്പിള്ള ആത്മവിൻ്റെ അയല്‍ക്കാരന്‍",
    "name_en": "Ji.kumaarappilla aatmaviൻrè ayal‍kkaaran‍",
    "author": "പൂര്‍ണോദയ ബുക്ക് ട്രസ്റ്റ്",
    "stockNumber": 804,
    "price": null,
    "image": "books/804.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "11 നൊവാലെറ്റുകൾ",
    "name_en": "11 nòvaalèrrukaൾ",
    "author": "അക്ബര്‍ കക്കട്ടില്‍",
    "stockNumber": 805,
    "price": null,
    "image": "books/805.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അടിപ്പാറ താമിയും നല്ലവനായ ഞാനും",
    "name_en": "Atippaara taamiyum nallavanaaya ~naanum",
    "author": "എം.കമരുദ്ധീന്‍",
    "stockNumber": 806,
    "price": null,
    "image": "books/806.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാമ മോഹിതനായ രാമന്‍",
    "name_en": "Kaama mohitanaaya raaman‍",
    "author": "പ്രകാശ് ഡി നമ്പൂതിരി",
    "stockNumber": 807,
    "price": null,
    "image": "books/807.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗസല്‍ സന്ധ്യ",
    "name_en": "Gasal‍ sandhya",
    "author": "പ്രദീപ് അഷ്ടമിച്ചിറ",
    "stockNumber": 808,
    "price": null,
    "image": "books/808.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അത്ഭുതങ്ങള്‍ വില്പ്പനയ്ക്ക്",
    "name_en": "Atbhuta~n~nal‍ vilppanaykk",
    "author": "കെ.കൊടുങ്ങല്ലൂര്‍",
    "stockNumber": 809,
    "price": null,
    "image": "books/809.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുറിയേടത്ത് രാത്രി",
    "name_en": "Kuriyetatt raatri",
    "author": "നന്ദന്‍",
    "stockNumber": 810,
    "price": null,
    "image": "books/810.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അക്ഷരപ്പാടം",
    "name_en": "Aksharappaatam",
    "author": "വി.പത്മ കുമാരി",
    "stockNumber": 811,
    "price": null,
    "image": "books/811.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കപില വസ്തുവിളക്കുള്ള വഴി",
    "name_en": "Kapila vastuvilakkulla vazhi",
    "author": "കെ.ഇന്ദിര",
    "stockNumber": 812,
    "price": null,
    "image": "books/812.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രണയ ജാതകം",
    "name_en": "Pranaya jaatakam",
    "author": "ഷാജു യോഹന്നാന്‍",
    "stockNumber": 813,
    "price": null,
    "image": "books/813.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇരുട്ടകറ്റിയ വെളിച്ചം",
    "name_en": "Iruttakarriya vèlichcham",
    "author": "പയ്യന്നൂര്‍ കുഞ്ഞിരാമന്‍",
    "stockNumber": 814,
    "price": null,
    "image": "books/814.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളീയ കലാമാനസം",
    "name_en": "Keraleeya kalaamaanasam",
    "author": "ശശിധരന്‍ ക്ലാരി",
    "stockNumber": 815,
    "price": null,
    "image": "books/815.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മൊഹഭംഗല്‍",
    "name_en": "Mòhabhamgal‍",
    "author": "എം.കൃഷ്ണന്‍ നായര്‍",
    "stockNumber": 816,
    "price": null,
    "image": "books/816.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൃഷ്ണ കൃഷ്ണ",
    "name_en": "Krrishna krrishna",
    "author": "ഇന്ദിര പാര്‍ത്ഥ സാരഥി",
    "stockNumber": 817,
    "price": null,
    "image": "books/817.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മധ്യ വേനല്‍ അവധിക്ക്",
    "name_en": "Madhya venal‍ avadhikk",
    "author": "മായ.എസ്",
    "stockNumber": 818,
    "price": null,
    "image": "books/818.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കിളി വന്നു വിളിച്ചപ്പോള്‍",
    "name_en": "Kili vannu vilichchappol‍",
    "author": "എം.മുകുന്ദന്‍",
    "stockNumber": 819,
    "price": null,
    "image": "books/819.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബാസ്കര പട്ടേലരും എൻ്റെ ജീവിതം",
    "name_en": "Baaskara pattelarum èൻrè jeevitam",
    "author": "സക്കരിയ",
    "stockNumber": 820,
    "price": null,
    "image": "books/820.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റഷ്യ",
    "name_en": "Rashya",
    "author": "എം.മുകുന്ദന്‍",
    "stockNumber": 821,
    "price": null,
    "image": "books/821.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാമ മോഹിതം",
    "name_en": "Kaama mohitam",
    "author": "സി.വി.ബാലകൃഷ്ണന്‍",
    "stockNumber": 822,
    "price": null,
    "image": "books/822.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രേമ ലേഘനം",
    "name_en": "Prema leghanam",
    "author": "ബഷീര്‍",
    "stockNumber": 823,
    "price": null,
    "image": "books/823.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കഥ കഥ ചിരിക്കഥ",
    "name_en": "Katha katha chirikkatha",
    "author": "ഏട. ഉണ്ണികൃഷ്ണന്‍ നായര്‍",
    "stockNumber": 824,
    "price": null,
    "image": "books/824.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇതിഹാസത്തിലെ കുട്ടികള്‍",
    "name_en": "Itihaasattilè kuttikal‍",
    "author": "നാരായണന്‍ കാവുന്തായി",
    "stockNumber": 825,
    "price": null,
    "image": "books/825.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നീല നദി",
    "name_en": "Neela nadi",
    "author": "ദാമോധരന്‍ കുളപ്പുറം",
    "stockNumber": 826,
    "price": null,
    "image": "books/826.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചാത്തമ്മ രാക്ഷസിയും കുഞ്ഞു മാളൂട്ടിയും",
    "name_en": "Chaattamma raakshasiyum ku~n~nu maaloottiyum",
    "author": "സി.പി.പള്ളിപ്പുറം",
    "stockNumber": 827,
    "price": null,
    "image": "books/827.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പറന്നു പറന്നു പറന്ന്",
    "name_en": "Parannu parannu parann",
    "author": "ഗീത എസ് പെരുമാന്‍",
    "stockNumber": 828,
    "price": null,
    "image": "books/828.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വി ടി ഭട്ടതിരിപ്പാട്",
    "name_en": "Vi ti bhattatirippaat",
    "author": "നീലന്‍",
    "stockNumber": 829,
    "price": null,
    "image": "books/829.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "111 ബാലകഥകള്‍",
    "name_en": "111 baalakathakal‍",
    "author": "ജോര്‍ജ് ഇമ്മട്ടി",
    "stockNumber": 830,
    "price": null,
    "image": "books/830.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഞ്ഞ പൂക്കളുടെ പുഴ",
    "name_en": "Ma~n~na pookkalutè puzha",
    "author": "കല്ലറ അജയന്‍",
    "stockNumber": 831,
    "price": null,
    "image": "books/831.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വൈഘരി",
    "name_en": "Vaighari",
    "author": "സോണി പൂമണി",
    "stockNumber": 832,
    "price": null,
    "image": "books/832.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഝാൻസി റാണി",
    "name_en": "Jhaaൻsi raani",
    "author": "കെ.എം.ലെനിന്‍",
    "stockNumber": 833,
    "price": null,
    "image": "books/833.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നഗരവും സ്ത്രീയും",
    "name_en": "Nagaravum streeyum",
    "author": "എം.മുകുന്ദന്‍",
    "stockNumber": 834,
    "price": null,
    "image": "books/834.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കത്തി",
    "name_en": "Katti",
    "author": "പുനത്തില്‍ കുഞ്ഞബ്ദുള്ള",
    "stockNumber": 835,
    "price": null,
    "image": "books/835.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുസൃതി ചോദ്യങ്ങളും കടംകഥകളും",
    "name_en": "Kusrriti chodya~n~nalum katamkathakalum",
    "author": "ഒ&ഇ",
    "stockNumber": 836,
    "price": null,
    "image": "books/836.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആനവാൽ വള",
    "name_en": "Aanavaaൽ vala",
    "author": "കേശിനി കൃഷ്ണന്‍",
    "stockNumber": 837,
    "price": null,
    "image": "books/837.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എളുപ്പ വഴി",
    "name_en": "Èluppa vazhi",
    "author": "സി.വസുദേവന്‍",
    "stockNumber": 838,
    "price": null,
    "image": "books/838.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജല ശിശുക്കല്‍",
    "name_en": "Jala shishukkal‍",
    "author": "ചാല്‍സ് കിംഗ്സി",
    "stockNumber": 839,
    "price": null,
    "image": "books/839.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സൃഗാലൻ എന്ന കുറുക്കൻ ",
    "name_en": "Srrigaalaൻ ènna kurukkaൻ ",
    "author": "ശ്രീ ചന്ദ്രശേഖരന്‍",
    "stockNumber": 840,
    "price": null,
    "image": "books/840.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കവിതയുടെ ഗ്രാമങ്ങള്‍",
    "name_en": "Kavitayutè graama~n~nal‍",
    "author": "ഇ.പി.രാജഗോപാലന്‍",
    "stockNumber": 841,
    "price": null,
    "image": "books/841.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗുല്‍ മുഹമ്മദ്",
    "name_en": "Gul‍ muhammad",
    "author": "ടി.പത്മനാഭന്‍",
    "stockNumber": 842,
    "price": null,
    "image": "books/842.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തിരഞ്ഞെടുത്ത കഥകള്‍",
    "name_en": "Tira~n~nètutta kathakal‍",
    "author": "ശിഹാബുദ്ധീന്‍ പൊയ്ത്തു കടവ്",
    "stockNumber": 843,
    "price": null,
    "image": "books/843.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മരിച്ചവരുടെ മനുഷ്യന്‍",
    "name_en": "Marichchavarutè manushyan‍",
    "author": "സി.അംബുരാജ്",
    "stockNumber": 844,
    "price": null,
    "image": "books/844.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുറുക്കൻ്റെ കണ്ണുകള്‍ ആഥവാ ആൺ നോട്ടം",
    "name_en": "Kurukkaൻrè kannukal‍ aathavaa aaൺ nottam",
    "author": "ഇയ്യ വളപട്ടണം",
    "stockNumber": 845,
    "price": null,
    "image": "books/845.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അന്യര്‍",
    "name_en": "Anyar‍",
    "author": "ആതിര വി",
    "stockNumber": 846,
    "price": null,
    "image": "books/846.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റോക്ക് കുടുംബത്തിലെ പെൺ കിടാവ്",
    "name_en": "Rokk kutumbattilè pèൺ kitaav",
    "author": "ഗീത് മോപ്പസാംഗ്",
    "stockNumber": 847,
    "price": null,
    "image": "books/847.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാലം ഘടികാരം",
    "name_en": "Kaalam ghatikaaram",
    "author": "എ.അയ്യപ്പന്‍",
    "stockNumber": 848,
    "price": null,
    "image": "books/848.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കത്തുന്ന പച്ച മരങ്ങള്‍ക്കിടയില്‍",
    "name_en": "Kattunna pachcha mara~n~nal‍kkitayil‍",
    "author": "പവിത്രന്‍ തീക്കുനി",
    "stockNumber": 849,
    "price": null,
    "image": "books/849.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആര്‍ദ്ര സമുദ്രം",
    "name_en": "Aar‍dra samudram",
    "author": "ഏഴാച്ചേരി രാമചന്ദ്രന്‍",
    "stockNumber": 850,
    "price": null,
    "image": "books/850.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടലില്‍ ഒരു കടല്‍ പോലെ",
    "name_en": "Katalil‍ òru katal‍ polè",
    "author": "നിലമ്പൂര്‍ മധുസൂദനന്‍",
    "stockNumber": 851,
    "price": null,
    "image": "books/851.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൊമ്പനാനയും കട്ടുറുമ്പും",
    "name_en": "Kòmpanaanayum katturumpum",
    "author": "മുഹമ്മ രമണന്‍",
    "stockNumber": 852,
    "price": null,
    "image": "books/852.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടികളുടെ അറബിക്കഥകള്‍",
    "name_en": "Kuttikalutè arabikkathakal‍",
    "author": "ബിഎം.സുഹറ",
    "stockNumber": 853,
    "price": null,
    "image": "books/853.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനുഷ്യൻ്റെ പരിണാമ ചരിത്രം",
    "name_en": "Manushyaൻrè parinaama charitram",
    "author": "ആര്‍ സുരേഷ്",
    "stockNumber": 854,
    "price": null,
    "image": "books/854.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മേരി ക്യൂരി",
    "name_en": "Meri kyoori",
    "author": "ജോജി കൂട്ടുമ്മേല്‍",
    "stockNumber": 855,
    "price": null,
    "image": "books/855.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഏഴങ്ങളമാരും കുഞ്ഞിപ്പെങ്ങളും",
    "name_en": "Ezha~n~nalamaarum ku~n~nippè~n~nalum",
    "author": "ബി.എം.സുഹറ",
    "stockNumber": 856,
    "price": null,
    "image": "books/856.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇലകൾ പൊഴിയുമ്പോള്‍",
    "name_en": "Ilakaൾ pòzhiyumpol‍",
    "author": "എ.പി.ജ്യോതിര്‍മഴി",
    "stockNumber": 857,
    "price": null,
    "image": "books/857.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തലമുറകലുടെ ഭാരം",
    "name_en": "Talamurakalutè bhaaram",
    "author": "പിവികെ.പനയാല്‍",
    "stockNumber": 858,
    "price": null,
    "image": "books/858.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മൂന്നാം കണ്ണ്",
    "name_en": "Moonnaam kann",
    "author": "സുനില്‍ ഘാംഗോപാധ്യായ",
    "stockNumber": 859,
    "price": null,
    "image": "books/859.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "100 ഉപരി പഠനവും തൊഴില്‍ സാധ്യതകളും",
    "name_en": "100 upari pathanavum tòzhil‍ saadhyatakalum",
    "author": "സി സി എസ്",
    "stockNumber": 860,
    "price": null,
    "image": "books/860.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചൂളൈമേടിലെ ശവങ്ങൾ",
    "name_en": "Choolaimetilè shava~n~naൾ",
    "author": "എന്‍എസ് മാധവന്‍",
    "stockNumber": 861,
    "price": null,
    "image": "books/861.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നവ ഭാരതീയ കഥകള്‍",
    "name_en": "Nava bhaarateeya kathakal‍",
    "author": "ഡോ.കെ.എം.മാലതി",
    "stockNumber": 862,
    "price": null,
    "image": "books/862.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജീവിക്കുവന്‍ മാറന്നു പോയ സ്ത്രീ",
    "name_en": "Jeevikkuvan‍ maarannu poya stree",
    "author": "വെട്ടൂര്‍ രാമന്‍ നായര്‍",
    "stockNumber": 863,
    "price": null,
    "image": "books/863.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പുത്രന്മാരും കമുകന്മാരം",
    "name_en": "Putranmaarum kamukanmaaram",
    "author": "ഉഒ. ലോറന്‍സ്",
    "stockNumber": 864,
    "price": null,
    "image": "books/864.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പെന്‍ഗ്ഗ്വിന്‍ ദ്വീപ്",
    "name_en": "Pèn‍ggvin‍ dveep",
    "author": "ആനത്തോള്‍ ആരാധകര്‍",
    "stockNumber": 865,
    "price": null,
    "image": "books/865.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിഷ കന്യക",
    "name_en": "Visha kanyaka",
    "author": "എസ്കെ പൊട്ട്ക്കാട്",
    "stockNumber": 866,
    "price": null,
    "image": "books/866.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദൈവത്തിൻ്റെ കണ്ണ്",
    "name_en": "Daivattiൻrè kann",
    "author": "എന്‍.പി.മുഹമ്മദ്",
    "stockNumber": 867,
    "price": null,
    "image": "books/867.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പാഠ പുസ്തക പഴഞ്ചൊല്ലുകള്‍",
    "name_en": "Paatha pustaka pazha~nchòllukal‍",
    "author": "ബിജു പി നടുമുട്ടം",
    "stockNumber": 868,
    "price": null,
    "image": "books/868.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്ത്രീ പുരുഷ മനശാസ്ത്രം",
    "name_en": "Stree purusha manashaastram",
    "author": "മുരളീധരന്‍ മുല്ലമറ്റം",
    "stockNumber": 869,
    "price": null,
    "image": "books/869.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാവ്യ ചിന്താ വിഷയങ്ങള്‍",
    "name_en": "Kaavya chintaa vishaya~n~nal‍",
    "author": "ഇടമറ്റം രത്നപ്പന്‍",
    "stockNumber": 870,
    "price": null,
    "image": "books/870.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭാഷാ നൈഷ്ധ ചംബു",
    "name_en": "Bhaashaa naishdha chambu",
    "author": "മഴ മാംഗളം",
    "stockNumber": 871,
    "price": null,
    "image": "books/871.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിജയത്തിലേക്ക്",
    "name_en": "Vijayattilekk",
    "author": "കെ പി കേശവമേനോന്‍",
    "stockNumber": 872,
    "price": null,
    "image": "books/872.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സെറ്റില്‍മെൻ്റ്",
    "name_en": "Sèrril‍mèൻr",
    "author": "കെ.എന്‍. മോഹനവര്‍മ്മ",
    "stockNumber": 873,
    "price": null,
    "image": "books/873.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ധനുസ്സ്",
    "name_en": "Dhanuss",
    "author": "ജെമിനി രാജന്‍",
    "stockNumber": 874,
    "price": null,
    "image": "books/874.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശ്രൗധം",
    "name_en": "Shraൗdham",
    "author": "ഡോ രാജന്‍ ചങ്ങാത്തു",
    "stockNumber": 875,
    "price": null,
    "image": "books/875.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹവിസ്സ്",
    "name_en": "Haviss",
    "author": "വിജയ മുരളീധരന്‍",
    "stockNumber": 876,
    "price": null,
    "image": "books/876.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സമീക്ഷ",
    "name_en": "Sameeksha",
    "author": "ഡോ.കെ.എസ്. രാധാകൃഷ്ണന്‍",
    "stockNumber": 877,
    "price": null,
    "image": "books/877.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സമാധി",
    "name_en": "Samaadhi",
    "author": "ശ്രീ മൂലനാരം മോഹന്‍",
    "stockNumber": 878,
    "price": null,
    "image": "books/878.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാളി ",
    "name_en": "Kaali ",
    "author": "ഒ.പി.ഹരീഷന്‍",
    "stockNumber": 879,
    "price": null,
    "image": "books/879.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അഭിജ്ഞാനം",
    "name_en": "Abhij~naanam",
    "author": "രാഘവവാരിയര്‍",
    "stockNumber": 880,
    "price": null,
    "image": "books/880.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സഖാവ് ബാലാറാം",
    "name_en": "Sakhaav baalaaraam",
    "author": "ബിനോയ് വിശ്വം (എഡിറ്റര്‍)",
    "stockNumber": 881,
    "price": null,
    "image": "books/881.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വഴി തെറ്റി വന്ന പതികൾ",
    "name_en": "Vazhi tèrri vanna patikaൾ",
    "author": "നെറ്റ് അഹമ്മദ്",
    "stockNumber": 882,
    "price": null,
    "image": "books/882.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജിബ്രാന്‍ മൊഴികൾ",
    "name_en": "Jibraan‍ mòzhikaൾ",
    "author": "ഖലീല്‍ ജിബ്രാന്‍",
    "stockNumber": 883,
    "price": null,
    "image": "books/883.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മണല്‍ കൊണ്ടൊരു കൊട്ടാരം",
    "name_en": "Manal‍ kòntòru kòttaaram",
    "author": "കടവില്‍ ശശി",
    "stockNumber": 884,
    "price": null,
    "image": "books/884.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അപരാഹനത്തിലെ സൂര്യന്‍",
    "name_en": "Aparaahanattilè sooryan‍",
    "author": "റഹീം മുഗത്തല",
    "stockNumber": 885,
    "price": null,
    "image": "books/885.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അമൃത ചുംബനം",
    "name_en": "Amrrita chumbanam",
    "author": "കെകെ.ബാസ്കരന്‍ പയ്യന്നൂര്‍",
    "stockNumber": 886,
    "price": null,
    "image": "books/886.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാരണവരുടെ കിനാവ്",
    "name_en": "Kaaranavarutè kinaav",
    "author": "ദയാസ്തവിസ്കി",
    "stockNumber": 887,
    "price": null,
    "image": "books/887.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കന്യക",
    "name_en": "Kanyaka",
    "author": "എബ്രഹാം മാതു",
    "stockNumber": 888,
    "price": null,
    "image": "books/888.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രതിയുടെ മന്ദാരങ്ങള്‍",
    "name_en": "Ratiyutè mandaara~n~nal‍",
    "author": "നൗഷാദ്",
    "stockNumber": 889,
    "price": null,
    "image": "books/889.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജോസഫ് സ്റ്റാലിന്‍ ജീവിതവും കാലവും",
    "name_en": "Josaph srraalin‍ jeevitavum kaalavum",
    "author": "മിസ്റ്റര്‍ അപ്പന്‍",
    "stockNumber": 890,
    "price": null,
    "image": "books/890.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സോജ രാജകുമാരി",
    "name_en": "Soja raajakumaari",
    "author": "രവി മേനോന്‍",
    "stockNumber": 891,
    "price": null,
    "image": "books/891.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരള വര്‍മ്മ പഠനങ്ങള്‍",
    "name_en": "Kerala var‍mma pathana~n~nal‍",
    "author": "ഡോ.തിക്കുറിശ്ശി ഗംഗാധരന്‍",
    "stockNumber": 892,
    "price": null,
    "image": "books/892.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒറ്റയാൾ പട്ടാളം",
    "name_en": "Òrrayaaൾ pattaalam",
    "author": "മൊയ്തു കണ്ണങ്കി",
    "stockNumber": 893,
    "price": null,
    "image": "books/893.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടപ്പാട്ടൂർ ",
    "name_en": "Katappaattooർ ",
    "author": "പൂര്‍ണ പബ്ലിക്കേഷന്‍സ്",
    "stockNumber": 894,
    "price": null,
    "image": "books/894.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഏതോ ഒരു ദിവസം",
    "name_en": "Eto òru divasam",
    "author": "ശത്രുഗ്നന്‍",
    "stockNumber": 895,
    "price": null,
    "image": "books/895.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തിരഞ്ഞെടുത്ത ഹാന്‍സ് അല്‍ഡെഴ്സന്‍ കഥകള്‍",
    "name_en": "Tira~n~nètutta haan‍s al‍dèzhsan‍ kathakal‍",
    "author": "മാലി",
    "stockNumber": 896,
    "price": null,
    "image": "books/896.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗര്‍ഭപാത്രത്തിലിരുന്ന് സംസാരിക്കുന്നു",
    "name_en": "Gar‍bhapaatrattilirunn samsaarikkunnu",
    "author": "വി.ദിലീപ്",
    "stockNumber": 897,
    "price": null,
    "image": "books/897.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രസവരക്ഷ",
    "name_en": "Prasavaraksha",
    "author": "സുധ ഉണ്ണികൃഷ്ണന്‍",
    "stockNumber": 898,
    "price": null,
    "image": "books/898.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വാക്കിൻ്റെ വഴി ചന്ദം",
    "name_en": "Vaakkiൻrè vazhi chandam",
    "author": "അജയപുരം ജ്യോതിഷ് കുമാര്‍",
    "stockNumber": 899,
    "price": null,
    "image": "books/899.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗണിത ശാസ്ത്ര വിദ്യഭ്യാസത്തിൻ്റെ സൈദ്ധാന്തിക അധിഷ്ഠാനങ്ങള്‍",
    "name_en": "Ganita shaastra vidyabhyaasattiൻrè saiddhaantika adhishthaana~n~nal‍",
    "author": "ഏലിയമ്മ കോശി",
    "stockNumber": 900,
    "price": null,
    "image": "books/900.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "16 കുട്ടികഥകള്‍",
    "name_en": "16 kuttikathakal‍",
    "author": "പൂര്‍ണ പ്രസിദ്ധീകരണങ്ങള്‍",
    "stockNumber": 901,
    "price": null,
    "image": "books/901.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിത്യചൈതന്യയതി",
    "name_en": "Nityachaitanyayati",
    "author": "ഡെന്‍ ബുക്സ്",
    "stockNumber": 902,
    "price": null,
    "image": "books/902.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സത്യവും സാധ്യതയും",
    "name_en": "Satyavum saadhyatayum",
    "author": "എം.ശ്രീ കുമാര്‍",
    "stockNumber": 903,
    "price": null,
    "image": "books/903.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിറഞ്ഞ കണ്ണുകളിൽ വെളിച്ചം",
    "name_en": "Nira~n~na kannukaliൽ vèlichcham",
    "author": "ജ്യോതപുരം താഹക്കുട്ടി",
    "stockNumber": 904,
    "price": null,
    "image": "books/904.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പുന്നപ്ര വയലാർ നേരും നുണയും",
    "name_en": "Punnapra vayalaaർ nerum nunayum",
    "author": "കെ.എൻ.കെ.നമ്പൂതിരി",
    "stockNumber": 905,
    "price": null,
    "image": "books/905.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചള്ളിക്കോഴി",
    "name_en": "Challikkozhi",
    "author": "മലയാറ്റൂർ രാമകൃഷ്ണൻ",
    "stockNumber": 906,
    "price": null,
    "image": "books/906.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിറം മാറുന്ന റഷ്യ",
    "name_en": "Niram maarunna rashya",
    "author": "ഡോ സി കെ ചന്ദ്രശേഖരൻ",
    "stockNumber": 907,
    "price": null,
    "image": "books/907.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വെളുത്ത ചെകുത്താൻ",
    "name_en": "Vèlutta chèkuttaaൻ",
    "author": "ഡി പി പത്രി",
    "stockNumber": 908,
    "price": null,
    "image": "books/908.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നട്ടെല്ല് എന്ന ഗുണം",
    "name_en": "Nattèll ènna gunam",
    "author": "സുകുമാർ അഴീക്കോട്",
    "stockNumber": 909,
    "price": null,
    "image": "books/909.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മായ സീത",
    "name_en": "Maaya seeta",
    "author": "കെ.കവിത",
    "stockNumber": 910,
    "price": null,
    "image": "books/910.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആത്മലാപം",
    "name_en": "Aatmalaapam",
    "author": "എ.ചന്ദ്രൻ നായർ",
    "stockNumber": 911,
    "price": null,
    "image": "books/911.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിലനിൽപ്പിൻ്റെ സമ്പദ് വ്യവസ്ഥ",
    "name_en": "Nilaniൽppiൻrè sampad vyavastha",
    "author": "ജെ.സി.കുമാരപ്പ",
    "stockNumber": 912,
    "price": null,
    "image": "books/912.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പബ്ലിക് റിലേഷൻസ്",
    "name_en": "Pablik rileshaൻs",
    "author": "കെ.മോഹൻദാസ് രാധാകൃഷ്ണൻ",
    "stockNumber": 913,
    "price": null,
    "image": "books/913.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മയ്യദാസിന്റെ മാളിക",
    "name_en": "Mayyadaasinrè maalika",
    "author": "ഭീഷ്മ സാഹിനി",
    "stockNumber": 914,
    "price": null,
    "image": "books/914.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മണലാരണ്യം",
    "name_en": "Manalaaranyam",
    "author": "കൊല്ലൂർ അബ്ദുൾ റഷീദ്",
    "stockNumber": 915,
    "price": null,
    "image": "books/915.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സിൽവർ ജെയിംസ്",
    "name_en": "Siൽvaർ jèyims",
    "author": "ബദ്ര എൻ മേനോൻ",
    "stockNumber": 916,
    "price": null,
    "image": "books/916.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേശവദേവ് എൻ്റെ സാഹിത്യകാമുകൻ",
    "name_en": "Keshavadev èൻrè saahityakaamukaൻ",
    "author": "സീത ലക്ഷ്മി",
    "stockNumber": 917,
    "price": null,
    "image": "books/917.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൂമൽ കാവിലെ കുട്ടികൾ",
    "name_en": "Koomaൽ kaavilè kuttikaൾ",
    "author": "സിജി ശാന്ത കുമാർ",
    "stockNumber": 918,
    "price": null,
    "image": "books/918.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹൈക്കോടതിയിലെ ഒരു ദിനം",
    "name_en": "Haikkotatiyilè òru dinam",
    "author": "ജസ്റ്റിസ് എ ലക്ഷ്മിക്കുട്ടി",
    "stockNumber": 919,
    "price": null,
    "image": "books/919.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മർദിതരുടെ ബോധന ശാസ്ത്രം",
    "name_en": "Maർditarutè bodhana shaastram",
    "author": "പോളോ ഫ്രെയർ",
    "stockNumber": 920,
    "price": null,
    "image": "books/920.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഹാനായ ജോൺ പോൾ പ്രിയപ്പെട്ട ബെനഡിക്റ്റ്",
    "name_en": "Mahaanaaya joൺ poൾ priyappètta bènadikrr",
    "author": "പിപി ജെയിംസ്, വിഎസ് രാജേഷ്",
    "stockNumber": 921,
    "price": null,
    "image": "books/921.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു ഇലയുടെ ആത്മകഥ",
    "name_en": "Òru ilayutè aatmakatha",
    "author": "അമീൻ പുറത്തീൽ",
    "stockNumber": 922,
    "price": null,
    "image": "books/922.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മരുഭൂമിയും സ്വപ്നങ്ങളും",
    "name_en": "Marubhoomiyum svapna~n~nalum",
    "author": "ശത്രുഗ്നൻ",
    "stockNumber": 923,
    "price": null,
    "image": "books/923.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൊങ്ങൻ പട",
    "name_en": "Kò~n~naൻ pata",
    "author": "ഹരിഹരൻ പരമം",
    "stockNumber": 924,
    "price": null,
    "image": "books/924.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കലയും നിഷേധവും",
    "name_en": "Kalayum nishedhavum",
    "author": "സച്ചിദാനന്ദൻ",
    "stockNumber": 925,
    "price": null,
    "image": "books/925.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നനഞ്ഞ പതിവുകൾ",
    "name_en": "Nana~n~na pativukaൾ",
    "author": "സി.ഗണേഷ്",
    "stockNumber": 926,
    "price": null,
    "image": "books/926.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അരുന്ധതി മാത്രം യാത്രയാവുന്നു",
    "name_en": "Arundhati maatram yaatrayaavunnu",
    "author": "പുഷ്പൻ തിക്കോടി",
    "stockNumber": 927,
    "price": null,
    "image": "books/927.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുടിവെള്ളം",
    "name_en": "Kutivèllam",
    "author": "കെ.അജയകുമാർ",
    "stockNumber": 928,
    "price": null,
    "image": "books/928.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പത്മനാഭൻ്റെ കുട്ടികൾ",
    "name_en": "Patmanaabhaൻrè kuttikaൾ",
    "author": "ടി.പത്മനാഭൻ",
    "stockNumber": 929,
    "price": null,
    "image": "books/929.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്പാർട്ടക്കസ്",
    "name_en": "Spaaർttakkas",
    "author": "പിപി.വാസുദേവൻ",
    "stockNumber": 930,
    "price": null,
    "image": "books/930.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചീഞ്ഞ ജമന്തിപ്പൂക്കളുടെ ഗന്ധം",
    "name_en": "Chee~n~na jamantippookkalutè gandham",
    "author": "ടി.എൻ.പ്രകാശ്",
    "stockNumber": 931,
    "price": null,
    "image": "books/931.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശരണ്യ",
    "name_en": "Sharanya",
    "author": "പി.ആർ.നാഥൻ",
    "stockNumber": 932,
    "price": null,
    "image": "books/932.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉപരോധം",
    "name_en": "Uparodham",
    "author": "സി.വി.ബാലകൃഷ്ണൻ",
    "stockNumber": 933,
    "price": null,
    "image": "books/933.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗണിത ക്വിസ്",
    "name_en": "Ganita kvis",
    "author": "ടി.കെ.കൊച്ചുനാരായണൻ",
    "stockNumber": 934,
    "price": null,
    "image": "books/934.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സാധാരണ വേഷങ്ങൾ",
    "name_en": "Saadhaarana vesha~n~naൾ",
    "author": "അംബികാസുരൻ മാങ്ങാട്",
    "stockNumber": 935,
    "price": null,
    "image": "books/935.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒസ്യത്ത്",
    "name_en": "Òsyatt",
    "author": "വി.പി.മനോഹരൻ",
    "stockNumber": 936,
    "price": null,
    "image": "books/936.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാറ്റച്ചുരിക",
    "name_en": "Maarrachchurika",
    "author": "ത്യാഗരാജൻ ചാലക്കടവ്",
    "stockNumber": 937,
    "price": null,
    "image": "books/937.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പുരാണത്തിലെ അസുര കഥകൾ",
    "name_en": "Puraanattilè asura kathakaൾ",
    "author": "സുധീർ ചെറുതാഴം",
    "stockNumber": 938,
    "price": null,
    "image": "books/938.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജാരൻ",
    "name_en": "Jaaraൻ",
    "author": "ബുദ്ധദേവ് ഗുഹ",
    "stockNumber": 939,
    "price": null,
    "image": "books/939.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു തക്കാളി കൃഷിക്കാരൻ്റെ സ്വപ്‌നങ്ങൾ",
    "name_en": "Òru takkaali krrishikkaaraൻrè svap‌na~n~naൾ",
    "author": "റഷീദ് പാറയ്ക്കൽ",
    "stockNumber": 940,
    "price": null,
    "image": "books/940.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുസൃതി കണക്കുകൾ",
    "name_en": "Kusrriti kanakkukaൾ",
    "author": "TK. കൊച്ചുനാരായണൻ",
    "stockNumber": 941,
    "price": null,
    "image": "books/941.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുത്തച്ചൻ പറഞ്ഞ കഥ",
    "name_en": "Muttachchaൻ para~n~na katha",
    "author": "എസ്ഐ ജി.ശാന്തകുമാർ",
    "stockNumber": 942,
    "price": null,
    "image": "books/942.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ വഴിയമ്പലങ്ങൾ",
    "name_en": "Èൻrè vazhiyampala~n~naൾ",
    "author": "എസ്കെ. പൊട്ടക്കാട്",
    "stockNumber": 943,
    "price": null,
    "image": "books/943.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനുഷ്യൻ കാരാഗൃഹത്തിലാണ്",
    "name_en": "Manushyaൻ kaaraagrrihattilaan",
    "author": "കെ.ടി.മുഹമ്മദ്",
    "stockNumber": 944,
    "price": null,
    "image": "books/944.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉൾപ്പിരിവുകൾ",
    "name_en": "Uൾppirivukaൾ",
    "author": "സി.രാധാകൃഷ്ണൻ",
    "stockNumber": 945,
    "price": null,
    "image": "books/945.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പറയി പെറ്റ പന്തിരുകുളം",
    "name_en": "Parayi pèrra pantirukulam",
    "author": "പി.നരേന്ദ്രനാട്",
    "stockNumber": 946,
    "price": null,
    "image": "books/946.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എന്താണ് മാർക്‌സിസം",
    "name_en": "Èntaan maaർk‌sisam",
    "author": "എൻ ഇ .ബലറാം",
    "stockNumber": 947,
    "price": null,
    "image": "books/947.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനുഷ്യൻ",
    "name_en": "Manushyaൻ",
    "author": "കെ.ദാമോധരൻ",
    "stockNumber": 948,
    "price": null,
    "image": "books/948.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളത്തിലെ കമ്മ്യൂണിസ്റ്റ് പ്രസ്ഥാനംഎൻ ഇ .ബലറാം",
    "name_en": "Keralattilè kammyoonisrr prasthaanamèൻ i .balaraam",
    "author": null,
    "stockNumber": 949,
    "price": null,
    "image": "books/949.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആദ്യത്തെ ഇന്ത്യൻ സ്വാതന്ത്ര്യ സമരം 1857-1859",
    "name_en": "Aadyattè intyaൻ svaatantrya samaram 1857-1859",
    "author": "കാരാൽ മാർക്ക്സ്, ഫ്രെഡറിക് അഗൽസ്",
    "stockNumber": 950,
    "price": null,
    "image": "books/950.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബൊളീവിയൻ ഡയറി",
    "name_en": "Bòleeviyaൻ dayari",
    "author": "ചെഗുവേര",
    "stockNumber": 951,
    "price": null,
    "image": "books/951.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മണ്ണും പെണ്ണും",
    "name_en": "Mannum pènnum",
    "author": "യുറൂബ്",
    "stockNumber": 952,
    "price": null,
    "image": "books/952.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അമരഗീതം",
    "name_en": "Amarageetam",
    "author": "ശ്രീ മൂലനാരം മോഹൻ",
    "stockNumber": 953,
    "price": null,
    "image": "books/953.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടികളോട് പെരുമാറുമ്പോൾ",
    "name_en": "Kuttikalot pèrumaarumpoൾ",
    "author": "ചേലവൂർ വേണു",
    "stockNumber": 954,
    "price": null,
    "image": "books/954.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹിമാലയ സാമ്രാജ്യത്തിൽ",
    "name_en": "Himaalaya saamraajyattiൽ",
    "author": "SK. പൊട്ടക്കാട്",
    "stockNumber": 955,
    "price": null,
    "image": "books/955.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പരമാണുവിനെ പിളർന്ന ശാസ്ത്രജ്ഞർ",
    "name_en": "Paramaanuvinè pilaർnna shaastraj~naർ",
    "author": "പ്രേമാനന്ദ് ചമ്പാട്",
    "stockNumber": 956,
    "price": null,
    "image": "books/956.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗണിത കഥകൾ",
    "name_en": "Ganita kathakaൾ",
    "author": "മനോജ് എം സ്വാമി",
    "stockNumber": 957,
    "price": null,
    "image": "books/957.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അഗ്നി",
    "name_en": "Agni",
    "author": "സി.രാധാകൃഷ്ണൻ",
    "stockNumber": 958,
    "price": null,
    "image": "books/958.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നാഗ മണ്ഡല",
    "name_en": "Naaga mandala",
    "author": "ഗിരീഷ് കർണാടക",
    "stockNumber": 959,
    "price": null,
    "image": "books/959.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബൃഹദാരണ്യകം",
    "name_en": "Brrihadaaranyakam",
    "author": "സി.രാധാകൃഷ്ണൻ",
    "stockNumber": 960,
    "price": null,
    "image": "books/960.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരള ശാകുന്തളം",
    "name_en": "Kerala shaakuntalam",
    "author": "ആറ്റൂർ കൃഷ്ണ പിഷാരടി",
    "stockNumber": 961,
    "price": null,
    "image": "books/961.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഹാകവി കുമാരനാശാൻ കഥ പറയുന്നു",
    "name_en": "Mahaakavi kumaaranaashaaൻ katha parayunnu",
    "author": "കെ കെ . പടിഞ്ഞാറെപുരം",
    "stockNumber": 962,
    "price": null,
    "image": "books/962.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലയാളം, ഇംഗ്ലീഷ് പഴംചൊല്ലുകൾ",
    "name_en": "Malayaalam, imgleesh pazhamchòllukaൾ",
    "author": "വെള്ളം കുളത്ത് കരുണാകരൻ",
    "stockNumber": 963,
    "price": null,
    "image": "books/963.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇഎംഎസ് ൻറെ കഥ",
    "name_en": "Ièmès ൻrè katha",
    "author": "ഡോ.പി.എസ്. ശ്രീ കഥ",
    "stockNumber": 964,
    "price": null,
    "image": "books/964.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബലൂൺ വിദ്യക്കൾ",
    "name_en": "Balooൺ vidyakkaൾ",
    "author": "CK. ബിജു",
    "stockNumber": 965,
    "price": null,
    "image": "books/965.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പഴംചൊല്ലിൽ പതിരുണ്ട്",
    "name_en": "Pazhamchòlliൽ patirunt",
    "author": "ജോജി കൂട്ടുമ്മേൽ",
    "stockNumber": 966,
    "price": null,
    "image": "books/966.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വീരമാർത്താണ്ഡൻ",
    "name_en": "Veeramaaർttaandaൻ",
    "author": "ബിമൽ കുമാർ രാമൻഗാരി",
    "stockNumber": 967,
    "price": null,
    "image": "books/967.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കിട്ടുണ്ണിയുടെ കഥ",
    "name_en": "Kittunniyutè katha",
    "author": "അശോകൻ ഏങ്ങണ്ടിയൂർ",
    "stockNumber": 968,
    "price": null,
    "image": "books/968.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശ്രീ നാരായണ ഗുരു",
    "name_en": "Shree naaraayana guru",
    "author": "എം.കെ.സാനു",
    "stockNumber": 969,
    "price": null,
    "image": "books/969.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആര്യ ഭടൻ",
    "name_en": "Aarya bhataൻ",
    "author": "പള്ളിയറ ശ്രീധരൻ",
    "stockNumber": 970,
    "price": null,
    "image": "books/970.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാന്ത്രിക കഥകൾ",
    "name_en": "Maantrika kathakaൾ",
    "author": "ശിവരാമൻ ചെറിയനാട്",
    "stockNumber": 971,
    "price": null,
    "image": "books/971.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആകാശത്തിലെ അത്ഭുത കാഴ്ചകൾ",
    "name_en": "Aakaashattilè atbhuta kaazhchakaൾ",
    "author": "നം. ശിവൻ",
    "stockNumber": 972,
    "price": null,
    "image": "books/972.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രണ്ടും രണ്ടും അഞ്ചു",
    "name_en": "Rantum rantum a~nchu",
    "author": "പള്ളിയറ ശ്രീധരൻ",
    "stockNumber": 973,
    "price": null,
    "image": "books/973.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അറിവുകൾ അത്ഭുതങ്ങൾ",
    "name_en": "Arivukaൾ atbhuta~n~naൾ",
    "author": "അജിത് ചെറുവള്ളി",
    "stockNumber": 974,
    "price": null,
    "image": "books/974.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടികളുടെ അർത്ഥ ശാസ്ത്രം",
    "name_en": "Kuttikalutè aർttha shaastram",
    "author": "പി.രവീന്ദ്രനാട്",
    "stockNumber": 975,
    "price": null,
    "image": "books/975.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അവൻ്റെ സ്മാരകങ്ങൾ",
    "name_en": "Avaൻrè smaaraka~n~naൾ",
    "author": "തകഴി ശിവ ശങ്കരപ്പിള്ള",
    "stockNumber": 976,
    "price": null,
    "image": "books/976.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലൈല മജ്നു",
    "name_en": "Laila majnu",
    "author": "നിസാമി",
    "stockNumber": 977,
    "price": null,
    "image": "books/977.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാക്കത്തമ്പുരാട്ടി",
    "name_en": "Kaakkattampuraatti",
    "author": "ശ്രീ കുമാരൻ തമ്പി",
    "stockNumber": 978,
    "price": null,
    "image": "books/978.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഏക്താര",
    "name_en": "Ektaara",
    "author": "പിവികെ.പനയാൽ",
    "stockNumber": 979,
    "price": null,
    "image": "books/979.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മരിച്ച വരുടെ കടൽ",
    "name_en": "Marichcha varutè kataൽ",
    "author": "അശോകൻ ചരുവിൽ",
    "stockNumber": 980,
    "price": null,
    "image": "books/980.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശേഷം സ്‌ക്രീനിൽ",
    "name_en": "Shesham s‌kreeniൽ",
    "author": "അക്ബർ കക്കട്ടിൽ",
    "stockNumber": 981,
    "price": null,
    "image": "books/981.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കറുത്ത പൗർണമി",
    "name_en": "Karutta paൗർnami",
    "author": "ഏറ്റുമാനൂർ ശിവകുമാർ",
    "stockNumber": 982,
    "price": null,
    "image": "books/982.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കരകാണക്കടൽ",
    "name_en": "Karakaanakkataൽ",
    "author": "മുട്ടത്തു വർക്കി",
    "stockNumber": 983,
    "price": null,
    "image": "books/983.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്വരരാഗ സുധ",
    "name_en": "Svararaaga sudha",
    "author": "ചങ്ങമ്ബുഴ",
    "stockNumber": 984,
    "price": null,
    "image": "books/984.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചിന്താ വിഷ്ടായ സീത",
    "name_en": "Chintaa vishtaaya seeta",
    "author": "കുമാരനാശൻ",
    "stockNumber": 985,
    "price": null,
    "image": "books/985.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആയിഷ",
    "name_en": "Aayisha",
    "author": "വയലാർ",
    "stockNumber": 986,
    "price": null,
    "image": "books/986.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗീതാഞ്ജലി",
    "name_en": "Geetaa~njali",
    "author": "ടാഗോർ",
    "stockNumber": 987,
    "price": null,
    "image": "books/987.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കരുണ",
    "name_en": "Karuna",
    "author": "കുമാരനാശാൻ",
    "stockNumber": 988,
    "price": null,
    "image": "books/988.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രമണൻ",
    "name_en": "Ramanaൻ",
    "author": "ചങ്ങമ്ബുഴ",
    "stockNumber": 989,
    "price": null,
    "image": "books/989.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദേവത",
    "name_en": "Devata",
    "author": "ചങ്ങമ്ബുഴ",
    "stockNumber": 990,
    "price": null,
    "image": "books/990.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കീഴാളൻ",
    "name_en": "Keezhaalaൻ",
    "author": "കരീപ്പുഴ ശ്രീകുമാർ",
    "stockNumber": 991,
    "price": null,
    "image": "books/991.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹേമന്ത ചന്ദ്രിക",
    "name_en": "Hemanta chandrika",
    "author": "ചങ്ങമ്ബുഴ",
    "stockNumber": 992,
    "price": null,
    "image": "books/992.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അത്താഴെ ശീവേലി",
    "name_en": "Attaazhè sheeveli",
    "author": "പി.ജയലക്ഷ്മി",
    "stockNumber": 993,
    "price": null,
    "image": "books/993.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലയാളത്തിൻ്റെ 100 കഥകൾ",
    "name_en": "Malayaalattiൻrè 100 kathakaൾ",
    "author": "ഒലിവ്",
    "stockNumber": 994,
    "price": null,
    "image": "books/994.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹംസധ്വനി",
    "name_en": "Hamsadhvani",
    "author": "മാധവിക്കുട്ടി",
    "stockNumber": 995,
    "price": null,
    "image": "books/995.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹേമന്ധത്തിലെ കഥ",
    "name_en": "Hemandhattilè katha",
    "author": "വില്ലം ഷെക്സ്പയർ",
    "stockNumber": 996,
    "price": null,
    "image": "books/996.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കോട്ടയിലെ പ്രേമ",
    "name_en": "Kottayilè prema",
    "author": "പി.വൽസല",
    "stockNumber": 997,
    "price": null,
    "image": "books/997.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഴപ്പുസ്‌തകം",
    "name_en": "Mazhappus‌takam",
    "author": "ഒലിവ്",
    "stockNumber": 998,
    "price": null,
    "image": "books/998.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആനക്കാരൻ",
    "name_en": "Aanakkaaraൻ",
    "author": "കരൂർ",
    "stockNumber": 999,
    "price": null,
    "image": "books/999.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജനറൽ ക്‌നോളഡ്ജ്",
    "name_en": "Janaraൽ k‌noladj",
    "author": "അശോക് കുമാർ",
    "stockNumber": 1000,
    "price": null,
    "image": "books/1000.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ന്യായത്തി",
    "name_en": "Nyaayatti",
    "author": "എ.വി.സന്തോഷ് കുമാർ",
    "stockNumber": 1001,
    "price": null,
    "image": "books/1001.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കനക നിലാവ്",
    "name_en": "Kanaka nilaav",
    "author": "കൊടക്കാട് ധമോധരന്‍",
    "stockNumber": 1002,
    "price": null,
    "image": "books/1002.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കണ്ണീര്‍ പെരുമഴ",
    "name_en": "Kanneer‍ pèrumazha",
    "author": "ഷാജഹാന്‍ തൃക്കരിപ്പൂര്‍",
    "stockNumber": 1003,
    "price": null,
    "image": "books/1003.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആറടിമണ്ണു മതി",
    "name_en": "Aaratimannu mati",
    "author": "ലിയോ ടോള്‍സ്റ്റോയ്",
    "stockNumber": 1004,
    "price": null,
    "image": "books/1004.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒറിസ്സ കഥകള്‍",
    "name_en": "Òrissa kathakal‍",
    "author": "കനക രാഘവന്‍",
    "stockNumber": 1005,
    "price": null,
    "image": "books/1005.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആന്ധ്രാപ്രദേശ് കഥകള്‍",
    "name_en": "Aandhraapradesh kathakal‍",
    "author": "കനക രാഘവന്‍",
    "stockNumber": 1006,
    "price": null,
    "image": "books/1006.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സുന്ദരിയും ഭീകര സത്വവും",
    "name_en": "Sundariyum bheekara satvavum",
    "author": "ബീന ജോര്‍ജ്ജ്",
    "stockNumber": 1007,
    "price": null,
    "image": "books/1007.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്കൂള്‍ ക്വിസ്",
    "name_en": "Skool‍ kvis",
    "author": "ഹരീഷ് .ആര്‍.നമ്പൂതിരിപ്പാട്",
    "stockNumber": 1008,
    "price": null,
    "image": "books/1008.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിര്‍വൃതി",
    "name_en": "Nir‍vrriti",
    "author": "മാധവ സ്വാമി",
    "stockNumber": 1009,
    "price": null,
    "image": "books/1009.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പെന്‍ഡ്രൈവ്",
    "name_en": "Pèn‍draiv",
    "author": "എ.വി.സന്തോഷ് കുമാര്‍",
    "stockNumber": 1010,
    "price": null,
    "image": "books/1010.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വലിച്ചെറിയപ്പെട്ട ജീവിതം",
    "name_en": "Valichchèriyappètta jeevitam",
    "author": "വിനീത് ജെയിംസ്",
    "stockNumber": 1011,
    "price": null,
    "image": "books/1011.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാജിക് മാജിക്",
    "name_en": "Maajik maajik",
    "author": "ഗോപിനാട് മുതുകാട്",
    "stockNumber": 1012,
    "price": null,
    "image": "books/1012.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രണയമഴ",
    "name_en": "Pranayamazha",
    "author": "സുരേശന്‍ ആനക്കാടി",
    "stockNumber": 1013,
    "price": null,
    "image": "books/1013.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പിറവി",
    "name_en": "Piravi",
    "author": "ജയശ്രീ വി.പി",
    "stockNumber": 1014,
    "price": null,
    "image": "books/1014.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കലികാലം  ഡോട്ട് കോം",
    "name_en": "Kalikaalam  dott kom",
    "author": "ബിന്ദു രാധാ കൃഷ്ണന്‍",
    "stockNumber": 1015,
    "price": null,
    "image": "books/1015.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടികൾക്ക് ബൈബിള്‍ കഥകള്‍",
    "name_en": "Kuttikaൾkk baibil‍ kathakal‍",
    "author": "ജോര്‍ജ് ഇമ്മാട്ടി",
    "stockNumber": 1016,
    "price": null,
    "image": "books/1016.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പൗരാവകാശ രേഖ",
    "name_en": "Paൗraavakaasha rekha",
    "author": "സംഘീത നാടക അക്കാദമി",
    "stockNumber": 1017,
    "price": null,
    "image": "books/1017.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദര്‍ശനം ദാര്‍ശനികം",
    "name_en": "Dar‍shanam daar‍shanikam",
    "author": "എന്‍.രവീന്ദ്രന്‍",
    "stockNumber": 1018,
    "price": null,
    "image": "books/1018.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അമ്മത്തൊട്ടില്‍",
    "name_en": "Ammattòttil‍",
    "author": "വിവേക് ജെയിംസ്",
    "stockNumber": 1019,
    "price": null,
    "image": "books/1019.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കതിവന്നൂര്‍ വീരന്‍",
    "name_en": "Kativannoor‍ veeran‍",
    "author": "എകെ.കുഞ്ഞിരാമപ്പണിക്കര്‍",
    "stockNumber": 1020,
    "price": null,
    "image": "books/1020.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്മാരകങ്ങള്‍ സ്മരണകള്‍",
    "name_en": "Smaaraka~n~nal‍ smaranakal‍",
    "author": "ആര്‍കെ മണ്ണൂര്‍",
    "stockNumber": 1021,
    "price": null,
    "image": "books/1021.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിട്ടു പോകുന്ന അക്ഷരങ്ങള്‍",
    "name_en": "Vittu pokunna akshara~n~nal‍",
    "author": "രാമ കൃഷ്ണന്‍",
    "stockNumber": 1022,
    "price": null,
    "image": "books/1022.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചിന്ന പാണ്ഡ്യന്‍",
    "name_en": "Chinna paandyan‍",
    "author": "ഇ.ശശീധരന്‍",
    "stockNumber": 1023,
    "price": null,
    "image": "books/1023.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കര്‍ക്കിടകം",
    "name_en": "Kar‍kkitakam",
    "author": "ഇ.ശശീധരന്‍",
    "stockNumber": 1024,
    "price": null,
    "image": "books/1024.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭൂമിയെ തോട്ടു നിലാവിൻ്റെ വിരൽ",
    "name_en": "Bhoomiyè tottu nilaaviൻrè viraൽ",
    "author": "രമ്യ.കെ",
    "stockNumber": 1025,
    "price": null,
    "image": "books/1025.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദര്‍ശം ദാര്‍ശനികം",
    "name_en": "Dar‍sham daar‍shanikam",
    "author": "എന്‍.രവീന്ദ്രന്‍",
    "stockNumber": 1026,
    "price": null,
    "image": "books/1026.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാര്‍ഗരേഖ",
    "name_en": "Maar‍garekha",
    "author": "ഇന്ത്യ",
    "stockNumber": 1027,
    "price": null,
    "image": "books/1027.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റെഡ് സല്യൂട്ട്",
    "name_en": "Rèd salyoott",
    "author": "കൊടക്കാട് രാഘവന്‍",
    "stockNumber": 1028,
    "price": null,
    "image": "books/1028.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തുരുത്ത്",
    "name_en": "Turutt",
    "author": "ജിതേഷ് അച്ചാംതുരുത്തി",
    "stockNumber": 1029,
    "price": null,
    "image": "books/1029.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചൊവ്വയിലേക്കൊരു യാത്ര",
    "name_en": "Chòvvayilekkòru yaatra",
    "author": "വി നീത് ജെയിംസ്",
    "stockNumber": 1030,
    "price": null,
    "image": "books/1030.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വ്യാപാരി",
    "name_en": "Vyaapaari",
    "author": "ജാബിയാര്‍ ചെറുവത്തൂര്‍",
    "stockNumber": 1031,
    "price": null,
    "image": "books/1031.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബ്രാം സ്റ്റോക്കറുഡെ ഡ്രാക്കുള",
    "name_en": "Braam srrokkarudè draakkula",
    "author": "ഏറ്റുമാനൂര്‍ ശിവകുമാര്‍",
    "stockNumber": 1032,
    "price": null,
    "image": "books/1032.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുസൃതി കണക്കുകള്‍",
    "name_en": "Kusrriti kanakkukal‍",
    "author": "മഞ്ജു ജോര്‍ജ്",
    "stockNumber": 1033,
    "price": null,
    "image": "books/1033.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദൂരത്ത്",
    "name_en": "Dooratt",
    "author": "ഗഏ. ശങ്കരപ്പിള്ള",
    "stockNumber": 1034,
    "price": null,
    "image": "books/1034.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗാന്ധി അബ്ദുള്ള ഗാന്ധി ഗോഡ്സെ ",
    "name_en": "Gaandhi abdulla gaandhi godsè ",
    "author": "കെ എം റോയ് ",
    "stockNumber": 1035,
    "price": null,
    "image": "books/1035.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പൂച്ചെണ്ടുകാലുടെ കാലം",
    "name_en": "Poochchèntukaalutè kaalam",
    "author": "തസ്ലീമ നെസ്രിന്‍",
    "stockNumber": 1036,
    "price": null,
    "image": "books/1036.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പി കണ്ണന്‍ നായര്‍",
    "name_en": "Pi kannan‍ naayar‍",
    "author": "ജിസി നായര്‍",
    "stockNumber": 1037,
    "price": null,
    "image": "books/1037.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിമര്‍ശനാവബോതത്തിനുള്ള വിദ്യഭ്യാസം",
    "name_en": "Vimar‍shanaavabotattinulla vidyabhyaasam",
    "author": "പൗലോ ഫ്രെയര്‍",
    "stockNumber": 1038,
    "price": null,
    "image": "books/1038.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "BEYOND THE DARK CLOUDS",
    "name_en": "Beyond the daark clooods",
    "author": "C V RAVEENDRANATH",
    "stockNumber": 1039,
    "price": null,
    "image": "books/1039.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മദന കാമരാജന്‍ കഥകള്‍",
    "name_en": "Madana kaamaraajan‍ kathakal‍",
    "author": "ഡോ.പ്രിയദര്‍ശന്‍ ലാല്‍",
    "stockNumber": 1040,
    "price": null,
    "image": "books/1040.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജീവിത യാത്ര",
    "name_en": "Jeevita yaatra",
    "author": "അനീഷ് പുത്തൂര്‍",
    "stockNumber": 1041,
    "price": null,
    "image": "books/1041.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടല്‍ ഒരു നദിയുടെ കഥയാണ്",
    "name_en": "Katal‍ òru nadiyutè kathayaan",
    "author": "മധുപാല്‍",
    "stockNumber": 1042,
    "price": null,
    "image": "books/1042.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രക്തം കലര്‍ന്ന മണ്ണ്",
    "name_en": "Raktam kalar‍nna mann",
    "author": "വയലാര്‍",
    "stockNumber": 1043,
    "price": null,
    "image": "books/1043.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അത്രൈത ദൈവ ശാസ്ത്രവും സ്നേഹത്തിൻ്റെ ഏകമത്വവും",
    "name_en": "Atraita daiva shaastravum snehattiൻrè ekamatvavum",
    "author": "ഡോ.വര്‍ഗീസ് മാര്‍ ഓസ്നാത്തിയോസ്",
    "stockNumber": 1044,
    "price": null,
    "image": "books/1044.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അഗ്നിച്ചിറകുകൾ",
    "name_en": "Agnichchirakukaൾ",
    "author": "അരുൺ തീവരി",
    "stockNumber": 1045,
    "price": null,
    "image": "books/1045.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രണ്ടിടങ്ങഴി",
    "name_en": "Rantita~n~nazhi",
    "author": "തകഴി ശിവശങ്കരപ്പിള്ള",
    "stockNumber": 1046,
    "price": null,
    "image": "books/1046.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട നന്നാക്കുന്ന ചോയി",
    "name_en": "Kuta nannaakkunna choyi",
    "author": "എം.മുകുന്ദന്‍",
    "stockNumber": 1047,
    "price": null,
    "image": "books/1047.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഏകാന്തതയുടെ 100 വര്‍ഷം",
    "name_en": "Ekaantatayutè 100 var‍sham",
    "author": "ഗബ്രിയേല്‍ ഗാര്‍സ മാര്‍സിസ്",
    "stockNumber": 1048,
    "price": null,
    "image": "books/1048.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അന്യന്‍",
    "name_en": "Anyan‍",
    "author": "ആല്‍ബര്‍ കമ്മു",
    "stockNumber": 1049,
    "price": null,
    "image": "books/1049.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭൂമിക്ക് ഒരു ചരമഗീതം",
    "name_en": "Bhoomikk òru charamageetam",
    "author": "ഒഎന്‍വി",
    "stockNumber": 1050,
    "price": null,
    "image": "books/1050.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഞ്ഞത്തെച്ചി പൂങ്കുല പോലെ",
    "name_en": "Ma~n~nattèchchi poo~nkula polè",
    "author": "ബാലചന്ദ്രന്‍ ചുള്ളിക്കാട്",
    "stockNumber": 1051,
    "price": null,
    "image": "books/1051.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബാല്യകാല സ്മരണകള്‍",
    "name_en": "Baalyakaala smaranakal‍",
    "author": "മാധവിക്കുട്ടി",
    "stockNumber": 1052,
    "price": null,
    "image": "books/1052.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു തെരുവിൻ്റെ കഥ",
    "name_en": "Òru tèruviൻrè katha",
    "author": "എസ് കെ പൊട്ടക്കാട്",
    "stockNumber": 1053,
    "price": null,
    "image": "books/1053.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്വാതന്ത്ര്യം അര്‍ദ്ധ രാത്രിയില്‍",
    "name_en": "Svaatantryam ar‍ddha raatriyil‍",
    "author": "ലാരി കോളിന്‍സ് ഡൊമോണിക്",
    "stockNumber": 1054,
    "price": null,
    "image": "books/1054.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാപ്പിരികളുടെ നാട്ടില്‍",
    "name_en": "Kaappirikalutè naattil‍",
    "author": "എസ്കെ.പൊട്ടക്കാട്",
    "stockNumber": 1055,
    "price": null,
    "image": "books/1055.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എന്‍ മകജെ",
    "name_en": "Èn‍ makajè",
    "author": "അംബികാസുരന്‍ മാങ്ങാട്",
    "stockNumber": 1056,
    "price": null,
    "image": "books/1056.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ ജീവിത യാത്ര",
    "name_en": "Èൻrè jeevita yaatra",
    "author": "എപിജെ അബ്ദുള്‍ കലാം",
    "stockNumber": 1057,
    "price": null,
    "image": "books/1057.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഞാന്‍ മലാല",
    "name_en": "~naan‍ malaala",
    "author": "പി എസ് രാകേഷ്",
    "stockNumber": 1058,
    "price": null,
    "image": "books/1058.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്നത്തെ മഴ",
    "name_en": "Innattè mazha",
    "author": "എന്‍.മോഹനന്‍",
    "stockNumber": 1059,
    "price": null,
    "image": "books/1059.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പി എസ് സി കോഡ് മാസ്റ്റര്‍ 1",
    "name_en": "Pi ès si kod maasrrar‍ 1",
    "author": "സുനില്‍ ജോൺ.എസ്",
    "stockNumber": 1060,
    "price": null,
    "image": "books/1060.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പി എസ് സി കോഡ് മാസ്റ്റര്‍ 2",
    "name_en": "Pi ès si kod maasrrar‍ 2",
    "author": "സുനില്‍ ജോൺ എസ്",
    "stockNumber": 1061,
    "price": null,
    "image": "books/1061.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആന്‍ഫ്രാങ്കിൻ്റെ ഡയറി",
    "name_en": "Aan‍phraa~nkiൻrè dayari",
    "author": "ആന്‍ഫ്രാങ്ക്",
    "stockNumber": 1062,
    "price": null,
    "image": "books/1062.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വീണ പൂവ്",
    "name_en": "Veena poov",
    "author": "കുമാരനാശന്‍",
    "stockNumber": 1063,
    "price": null,
    "image": "books/1063.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ടോം സോയാര്‍",
    "name_en": "Tom soyaar‍",
    "author": "മാര്‍ക്ടൈന്‍",
    "stockNumber": 1064,
    "price": null,
    "image": "books/1064.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലീല",
    "name_en": "Leela",
    "author": "കുമാരനാശാന്‍ ഗന്ധകാവ്യം",
    "stockNumber": 1065,
    "price": null,
    "image": "books/1065.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിലാവില്‍ ഇറങ്ങി നടക്കരുത്",
    "name_en": "Nilaavil‍ ira~n~ni natakkarut",
    "author": "സുധ എസ് നന്ദന്‍",
    "stockNumber": 1066,
    "price": null,
    "image": "books/1066.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉണ്മകഥകള്‍",
    "name_en": "Unmakathakal‍",
    "author": "മാധവിക്കുട്ടി",
    "stockNumber": 1067,
    "price": null,
    "image": "books/1067.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഡ്രാക്കുള",
    "name_en": "Draakkula",
    "author": "ബ്രാംസ്റ്റോക്കര്‍",
    "stockNumber": 1068,
    "price": null,
    "image": "books/1068.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പാരിസ്",
    "name_en": "Paaris",
    "author": "എം മുകുന്ദന്‍",
    "stockNumber": 1069,
    "price": null,
    "image": "books/1069.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ ലോകം",
    "name_en": "Èൻrè lokam",
    "author": "മാധവിക്കുട്ടി",
    "stockNumber": 1070,
    "price": null,
    "image": "books/1070.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരച്ചന്‍ മക്കള്‍ അയച്ച കത്തുകള്‍",
    "name_en": "Òrachchan‍ makkal‍ ayachcha kattukal‍",
    "author": "അമ്പാടി എക്കവമ്മ",
    "stockNumber": 1071,
    "price": null,
    "image": "books/1071.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്ത്യന്‍ നാടോടികഥകള്‍",
    "name_en": "Intyan‍ naatotikathakal‍",
    "author": "എന്‍എം നമ്പൂതിരി",
    "stockNumber": 1072,
    "price": null,
    "image": "books/1072.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എന്റെ സത്യാന്വേഷണ പരീക്ഷണങ്ങള്‍",
    "name_en": "Ènrè satyaanveshana pareekshana~n~nal‍",
    "author": "എം കെ ഗാന്ധി",
    "stockNumber": 1073,
    "price": null,
    "image": "books/1073.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആരാച്ചാര്‍",
    "name_en": "Aaraachchaar‍",
    "author": "കെആര്‍ മീര",
    "stockNumber": 1074,
    "price": null,
    "image": "books/1074.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആദ്യാനുരാഗം",
    "name_en": "Aadyaanuraagam",
    "author": "ഇവാന്‍ തുര്‍ഗാനേവു",
    "stockNumber": 1075,
    "price": null,
    "image": "books/1075.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നമ്മുടെ ഇന്ത്യ",
    "name_en": "Nammutè intya",
    "author": "സത്യന്‍ കല്ലുരുട്ടി",
    "stockNumber": 1076,
    "price": null,
    "image": "books/1076.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരള നവോത്ഥാനം",
    "name_en": "Kerala navotthaanam",
    "author": "ജിഡി നായര്‍",
    "stockNumber": 1077,
    "price": null,
    "image": "books/1077.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മോട്ടോര്‍ സൈക്കിള്‍ ഡയറി",
    "name_en": "Mottor‍ saikkil‍ dayari",
    "author": "ഏണസ്റ്റോ ചെഗുവേര",
    "stockNumber": 1078,
    "price": null,
    "image": "books/1078.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്റ്റീഫന്‍ ഹോക്കിംഗ്",
    "name_en": "Srreephan‍ hokkimg",
    "author": "ഡോ. ശശികുമാര്‍",
    "stockNumber": 1079,
    "price": null,
    "image": "books/1079.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇയര്‍ ബുക്ക്",
    "name_en": "Iyar‍ bukk",
    "author": "മാതൃഭൂമി",
    "stockNumber": 1089,
    "price": null,
    "image": "books/1089.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നാസ്തികനായ ദൈവം",
    "name_en": "Naastikanaaya daivam",
    "author": "റിച്ചാര്‍ഡ് ഡോക്കിംഗ്സ്",
    "stockNumber": 1090,
    "price": null,
    "image": "books/1090.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രോഹിത് വെമുല",
    "name_en": "Rohit vèmula",
    "author": "ഒപി രവീന്ദ്രന്‍",
    "stockNumber": 1091,
    "price": null,
    "image": "books/1091.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അദ്ധ്യാത്മ രാമായണം",
    "name_en": "Addhyaatma raamaayanam",
    "author": "സി എസ് രാമകൃഷ്ണന്‍",
    "stockNumber": 1092,
    "price": null,
    "image": "books/1092.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തേരെഞ്ഞെടുത്ത കഥകള്‍",
    "name_en": "Terè~n~nètutta kathakal‍",
    "author": "പൊന്‍കുന്നം വര്‍ക്കി",
    "stockNumber": 1093,
    "price": null,
    "image": "books/1093.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അപരന്‍",
    "name_en": "Aparan‍",
    "author": "ദയാസ്തവിസ്കി",
    "stockNumber": 1094,
    "price": null,
    "image": "books/1094.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലയാളത്തിൻ്റെ സുവര്‍ണ കഥകള്‍",
    "name_en": "Malayaalattiൻrè suvar‍na kathakal‍",
    "author": "പുനത്തില്‍ കുഞ്ഞബ്ദുള്ള",
    "stockNumber": 1095,
    "price": null,
    "image": "books/1095.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റോബിന്‍സൺ ക്രൂസോ",
    "name_en": "Robin‍saൺ krooso",
    "author": "ഡാനിയല്‍ ഡിഫോ",
    "stockNumber": 1096,
    "price": null,
    "image": "books/1096.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗള്ളിവരുടെ യാത്രകള്‍",
    "name_en": "Gallivarutè yaatrakal‍",
    "author": "ജോനാഥന്‍ സ്വിഫ്റ്റ്",
    "stockNumber": 1097,
    "price": null,
    "image": "books/1097.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പുരുഷന്‍",
    "name_en": "Purushan‍",
    "author": "ഓഷൂ",
    "stockNumber": 1098,
    "price": null,
    "image": "books/1098.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചാരുലത",
    "name_en": "Chaarulata",
    "author": "രവീന്ദ്രനാഥ ടാഗോര്‍",
    "stockNumber": 1099,
    "price": null,
    "image": "books/1099.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "താഴ്വരകൾ",
    "name_en": "Taazhvarakaൾ",
    "author": "കോവിലന്‍",
    "stockNumber": 1100,
    "price": null,
    "image": "books/1100.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുറ്റവും ശിക്ഷും",
    "name_en": "Kurravum shikshum",
    "author": "ദോസ്തോയിവിസ്കി",
    "stockNumber": 1101,
    "price": null,
    "image": "books/1101.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഓഷോ : ജീവിതവും ദര്‍ശനവും",
    "name_en": "Osho : jeevitavum dar‍shanavum",
    "author": "കാവാലം അനില്‍",
    "stockNumber": 1102,
    "price": null,
    "image": "books/1102.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആല്‍ക്കെമിസ്റ്റ്",
    "name_en": "Aal‍kkèmisrr",
    "author": "പോളോ കീലോ",
    "stockNumber": 1103,
    "price": null,
    "image": "books/1103.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഞാൻ സ്റ്റീവ്",
    "name_en": "~naaൻ srreev",
    "author": "ജോസഫ് ലെയല്‍",
    "stockNumber": 1104,
    "price": null,
    "image": "books/1104.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നരക സാകേതത്തിലെ ഉള്ളറകള്‍",
    "name_en": "Naraka saaketattilè ullarakal‍",
    "author": "സുധീഷ് മിന്നി",
    "stockNumber": 1105,
    "price": null,
    "image": "books/1105.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അമൃതം തേടി",
    "name_en": "Amrritam teti",
    "author": "മലയാറ്റൂര്‍ രാമകൃഷ്ണന്‍",
    "stockNumber": 1106,
    "price": null,
    "image": "books/1106.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വണ്ടിക്കാളകൾ",
    "name_en": "Vantikkaalakaൾ",
    "author": "മാധവിക്കുട്ടി",
    "stockNumber": 1107,
    "price": null,
    "image": "books/1107.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുറ്റവും ശിക്ഷും",
    "name_en": "Kurravum shikshum",
    "author": "ദസ്തേവിശികി",
    "stockNumber": 1108,
    "price": null,
    "image": "books/1108.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പുള്ളിമാന്‍",
    "name_en": "Pullimaan‍",
    "author": "എസ്കെ പൊട്ട്ക്കാട്",
    "stockNumber": 1109,
    "price": null,
    "image": "books/1109.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേശവദേവിൻ്റെ സമ്പൂർണ്ണ കഥകള്‍",
    "name_en": "Keshavadeviൻrè sampooർnna kathakal‍",
    "author": "പി കേശവദേവ്",
    "stockNumber": 1110,
    "price": null,
    "image": "books/1110.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "യന്ത്രം",
    "name_en": "Yantram",
    "author": "മലയാറ്റൂര്‍",
    "stockNumber": 1111,
    "price": null,
    "image": "books/1111.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തത്വമസി",
    "name_en": "Tatvamasi",
    "author": "സുകുമാര്‍ അഴീക്കോട്",
    "stockNumber": 1112,
    "price": null,
    "image": "books/1112.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മെലൂഹയിലെ ചിരഞ്ജീവികൾ",
    "name_en": "Mèloohayilè chira~njeevikaൾ",
    "author": "അമീഷ്",
    "stockNumber": 1113,
    "price": null,
    "image": "books/1113.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉദവും സമാധാനവും",
    "name_en": "Udavum samaadhaanavum",
    "author": "ടോള്‍സ്റ്റോയ്",
    "stockNumber": 1114,
    "price": null,
    "image": "books/1114.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒളിവിലെ ഓര്‍മ്മകള്‍",
    "name_en": "Òlivilè or‍mmakal‍",
    "author": "തോപ്പില്‍ ഭാസി",
    "stockNumber": 1115,
    "price": null,
    "image": "books/1115.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വെരുകൾ",
    "name_en": "Vèrukaൾ",
    "author": "മലയാറ്റൂര്‍",
    "stockNumber": 1116,
    "price": null,
    "image": "books/1116.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു ദേശത്തിൻ്റെ കഥ",
    "name_en": "Òru deshattiൻrè katha",
    "author": "എസ്കെ പൊട്ടക്കാട്",
    "stockNumber": 1117,
    "price": null,
    "image": "books/1117.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനുഷ്യനൊ ഒരാമുഖം",
    "name_en": "Manushyanò òraamukham",
    "author": "സുഭാഷ് ചന്ദ്രന്‍",
    "stockNumber": 1118,
    "price": null,
    "image": "books/1118.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പുലയപ്പാട്ട്",
    "name_en": "Pulayappaatt",
    "author": "എം.മുകുന്ദന്‍",
    "stockNumber": 1119,
    "price": null,
    "image": "books/1119.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വെളുത്ത രാത്രികള്‍",
    "name_en": "Vèlutta raatrikal‍",
    "author": "ദയേസ്തവിസ്കി",
    "stockNumber": 1120,
    "price": null,
    "image": "books/1120.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മോപസാംഗ് പരിചാരകൻ്റെ ഓര്‍മ്മകള്‍",
    "name_en": "Mopasaamg parichaarakaൻrè or‍mmakal‍",
    "author": "ഫ്രാന്‍സ്വ തസര്‍",
    "stockNumber": 1121,
    "price": null,
    "image": "books/1121.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അഷിതയുടെ കഥകള്‍",
    "name_en": "Ashitayutè kathakal‍",
    "author": "അഷിത",
    "stockNumber": 1122,
    "price": null,
    "image": "books/1122.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബഹിഷ്കൃതര്‍",
    "name_en": "Bahishkrritar‍",
    "author": "ശരൺകുമാര്‍ ലിംബാലെ",
    "stockNumber": 1123,
    "price": null,
    "image": "books/1123.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നോൺ വെജ് പശുവും മറ്റുകഥകളും",
    "name_en": "Noൺ vèj pashuvum marrukathakalum",
    "author": "മഹാ ശ്വേതാ ദേവി",
    "stockNumber": 1124,
    "price": null,
    "image": "books/1124.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആൻഡമാന്‍ നിക്കോബാറിലെ നാടോടിക്കഥകള്‍",
    "name_en": "Aaൻdamaan‍ nikkobaarilè naatotikkathakal‍",
    "author": "വിജയന്‍ മടപ്പള്ളി",
    "stockNumber": 1125,
    "price": null,
    "image": "books/1125.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരച്ചന്‍ മക്കള്‍ അയച്ച കത്തുകള്‍",
    "name_en": "Òrachchan‍ makkal‍ ayachcha kattukal‍",
    "author": "അമ്പാടി എക്കവമ്മ",
    "stockNumber": 1126,
    "price": null,
    "image": "books/1126.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭ്രാന്തന്‍",
    "name_en": "Bhraantan‍",
    "author": "ഖലീല്‍ ജിബ്രാന്‍",
    "stockNumber": 1127,
    "price": null,
    "image": "books/1127.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കിച്ചൺ മാനിഫെസ്റ്റോ",
    "name_en": "Kichchaൺ maaniphèsrro",
    "author": "പുനത്തില്‍ കുഞ്ഞബ്ദുള്ള",
    "stockNumber": 1128,
    "price": null,
    "image": "books/1128.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദാസ് ക്യാപിറ്റല്‍",
    "name_en": "Daas kyaapirral‍",
    "author": "സുഭാഷ് ചന്ദ്രന്‍",
    "stockNumber": 1129,
    "price": null,
    "image": "books/1129.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മംഗലപുരം പൂതം",
    "name_en": "Mamgalapuram pootam",
    "author": "വികെഎന്‍",
    "stockNumber": 1130,
    "price": null,
    "image": "books/1130.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹൈമവത ഭൂവില്‍",
    "name_en": "Haimavata bhoovil‍",
    "author": "എംപി വീരേന്ദ്ര കുമാര്‍",
    "stockNumber": 1131,
    "price": null,
    "image": "books/1131.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്കൂള്‍ ഡയറി",
    "name_en": "Skool‍ dayari",
    "author": "അക്ബര്‍ കക്കെറ്റില്‍",
    "stockNumber": 1132,
    "price": null,
    "image": "books/1132.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രാവണന്‍ പാരാജിതരുടെ ഗാഥ",
    "name_en": "Raavanan‍ paaraajitarutè gaatha",
    "author": "ആനന്ദ് നീലകണ്ഠന്‍",
    "stockNumber": 1133,
    "price": null,
    "image": "books/1133.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ടോള്‍സ്റ്റോയി കഥകള്‍",
    "name_en": "Tol‍srroyi kathakal‍",
    "author": "എം. ദിവ്യ",
    "stockNumber": 1134,
    "price": null,
    "image": "books/1134.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അമ്മ",
    "name_en": "Amma",
    "author": "മാക്സിം ഗോര്‍ക്കി",
    "stockNumber": 1135,
    "price": null,
    "image": "books/1135.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്ദുലേഖ",
    "name_en": "Indulekha",
    "author": "ചന്ദുമേനോന്‍",
    "stockNumber": 1136,
    "price": null,
    "image": "books/1136.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വികൃതിയായ ടോം സോയാര്‍",
    "name_en": "Vikrritiyaaya tom soyaar‍",
    "author": "മാര്‍ക്ക് ത്യയിന്‍",
    "stockNumber": 1137,
    "price": null,
    "image": "books/1137.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "യുദ്ധവും സമാധാനവും",
    "name_en": "Yuddhavum samaadhaanavum",
    "author": "ടോള്‍സ്റ്റോയ്",
    "stockNumber": 1138,
    "price": null,
    "image": "books/1138.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അത്ഭുത ചെണ്ട",
    "name_en": "Atbhuta chènta",
    "author": "എന്‍പി ഹാഫിസ് മുഹമ്മദ്",
    "stockNumber": 1139,
    "price": null,
    "image": "books/1139.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മോണ്ടി ക്രിസ്റ്റോയില്‍ പ്രഭു",
    "name_en": "Monti krisrroyil‍ prabhu",
    "author": "അലക്സാണ്ടര്‍ സ്വമസ്",
    "stockNumber": 1140,
    "price": null,
    "image": "books/1140.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രവാചകന്‍",
    "name_en": "Pravaachakan‍",
    "author": "ജോസ് വാഴയില്‍",
    "stockNumber": 1141,
    "price": null,
    "image": "books/1141.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തക്ഷന്‍ കുന്ന് സ്വരൂപം",
    "name_en": "Takshan‍ kunn svaroopam",
    "author": "യുകെ കുമാരന്‍",
    "stockNumber": 1142,
    "price": null,
    "image": "books/1142.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബാബിലോണിയന്‍ ഗിത്താര്‍",
    "name_en": "Baabiloniyan‍ gittaar‍",
    "author": "ഏഴാച്ചേരി രാമചന്ദ്രന്‍",
    "stockNumber": 1143,
    "price": null,
    "image": "books/1143.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുന്‍പേ പറക്കുന്ന പക്ഷികള്‍",
    "name_en": "Mun‍pe parakkunna pakshikal‍",
    "author": "സി.രാധാകൃഷ്ണന്‍",
    "stockNumber": 1144,
    "price": null,
    "image": "books/1144.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹക്കൾബെറി ഫിന്‍",
    "name_en": "Hakkaൾbèri phin‍",
    "author": "മാര്‍ക്ക് ട്വയിന്‍",
    "stockNumber": 1145,
    "price": null,
    "image": "books/1145.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനോവിശകലനത്തീനു ഒരാമുഖം",
    "name_en": "Manovishakalanatteenu òraamukham",
    "author": "സിഗ്മാന്‍ഡ് ഫോസിസ്",
    "stockNumber": 1146,
    "price": null,
    "image": "books/1146.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഐതിഹ്യമാല",
    "name_en": "Aitihyamaala",
    "author": "കൊട്ടാരഹില്‍ ശങ്കുണ്ണി",
    "stockNumber": 1147,
    "price": null,
    "image": "books/1147.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അപരന്‍",
    "name_en": "Aparan‍",
    "author": "ദയേസ്തവിസ്കി",
    "stockNumber": 1148,
    "price": null,
    "image": "books/1148.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ പെൺകുട്ടികള്‍",
    "name_en": "Èൻrè pèൺkuttikal‍",
    "author": "തസ്ലീമ നസീര്‍",
    "stockNumber": 1149,
    "price": null,
    "image": "books/1149.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അത് പോലെ തന്നെ",
    "name_en": "At polè tannè",
    "author": "ഓഷൂ",
    "stockNumber": 1150,
    "price": null,
    "image": "books/1150.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലജ്ജ",
    "name_en": "Lajja",
    "author": "തസ്ലീമ നസീര്‍",
    "stockNumber": 1151,
    "price": null,
    "image": "books/1151.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഹാഭാരതം",
    "name_en": "Mahaabhaaratam",
    "author": "കെ.പി.ബാലചന്ദ്രന്‍",
    "stockNumber": 1152,
    "price": null,
    "image": "books/1152.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലയാളത്തിൻ്റെ സുവര്‍ണ കഥകള്‍",
    "name_en": "Malayaalattiൻrè suvar‍na kathakal‍",
    "author": "കാക്കനാടന്‍",
    "stockNumber": 1153,
    "price": null,
    "image": "books/1153.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുന്തിരി വള്ളിയും നെയ്യാമ്പലുകളും",
    "name_en": "Muntiri valliyum nèyyaampalukalum",
    "author": "ഗലീല്‍ ജിബ്രാന്‍",
    "stockNumber": 1154,
    "price": null,
    "image": "books/1154.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പുരുഷന്‍",
    "name_en": "Purushan‍",
    "author": "ഓഷൂ",
    "stockNumber": 1155,
    "price": null,
    "image": "books/1155.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്ത്രീ",
    "name_en": "Stree",
    "author": "ഓഷൂ",
    "stockNumber": 1156,
    "price": null,
    "image": "books/1156.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വെടിവെട്ടം",
    "name_en": "Vètivèttam",
    "author": "ഡോ.എസ്.പി.ബി.നമ്പൂതിരി",
    "stockNumber": 1157,
    "price": null,
    "image": "books/1157.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വായുപുത്രന്‍ മാരുടെ സപ്താഹം",
    "name_en": "Vaayuputran‍ maarutè saptaaham",
    "author": "അമീഷ്",
    "stockNumber": 1158,
    "price": null,
    "image": "books/1158.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നാഗന്‍മരുടെ രഹസ്യം",
    "name_en": "Naagan‍marutè rahasyam",
    "author": "അമീഷ്",
    "stockNumber": 1159,
    "price": null,
    "image": "books/1159.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മെലൂഹയിലെ ചിരഞ്ജീവികൾ",
    "name_en": "Mèloohayilè chira~njeevikaൾ",
    "author": "അമീഷ്",
    "stockNumber": 1160,
    "price": null,
    "image": "books/1160.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ വഴിയമ്പലങ്ങള്‍",
    "name_en": "Èൻrè vazhiyampala~n~nal‍",
    "author": "എസ്കെ പൊറ്റക്കാട്",
    "stockNumber": 1161,
    "price": null,
    "image": "books/1161.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ക്യാമറ്ക്കണ്ണുകൾ",
    "name_en": "Kyaamarkkannukaൾ",
    "author": "പുനത്തില്‍ കുഞ്ഞബ്ദുള്ള",
    "stockNumber": 1162,
    "price": null,
    "image": "books/1162.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ ബാല്യകാല സ്മരണകള്‍",
    "name_en": "Èൻrè baalyakaala smaranakal‍",
    "author": "ടാഗോര്‍",
    "stockNumber": 1163,
    "price": null,
    "image": "books/1163.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പാറപ്പുറത്തിൻ്റെ തിരഞ്ഞെടുത്ത കഥകള്‍",
    "name_en": "Paarappurattiൻrè tira~n~nètutta kathakal‍",
    "author": "പാറപ്പുറത്ത്",
    "stockNumber": 1164,
    "price": null,
    "image": "books/1164.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഹാപ്രസ്ഥാനം",
    "name_en": "Mahaaprasthaanam",
    "author": "മാടമ്പ് കുഞ്ഞിക്കുട്ടന്‍",
    "stockNumber": 1165,
    "price": null,
    "image": "books/1165.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ ലോകം",
    "name_en": "Èൻrè lokam",
    "author": "മാധവിക്കുട്ടി",
    "stockNumber": 1166,
    "price": null,
    "image": "books/1166.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ ജീവിത യാത്ര",
    "name_en": "Èൻrè jeevita yaatra",
    "author": "അബ്ദുള്‍ കലാം",
    "stockNumber": 1167,
    "price": null,
    "image": "books/1167.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മോട്ടോര്‍ സൈക്കിള്‍ ഡയറിക്കുറിപ്പുകള്‍",
    "name_en": "Mottor‍ saikkil‍ dayarikkurippukal‍",
    "author": "ചെഗുവേര",
    "stockNumber": 1168,
    "price": null,
    "image": "books/1168.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തുലാ വര്‍ഷപ്പച്ച",
    "name_en": "Tulaa var‍shappachcha",
    "author": "സുഗതകുമാരി",
    "stockNumber": 1169,
    "price": null,
    "image": "books/1169.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രകാശം പരത്തുന്ന പെൺകുട്ടി",
    "name_en": "Prakaasham parattunna pèൺkutti",
    "author": "ടി പത്മനാഭന്‍",
    "stockNumber": 1170,
    "price": null,
    "image": "books/1170.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലേഡി അരംബെല്ല മാര്‍ച്ച്",
    "name_en": "Ledi arambèlla maar‍chch",
    "author": "ബ്രാംസ്റ്റോക്കര്‍",
    "stockNumber": 1171,
    "price": null,
    "image": "books/1171.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തീര്‍ത്ഥാടനം",
    "name_en": "Teer‍tthaatanam",
    "author": "പോളോ കെയ്ലോ",
    "stockNumber": 1172,
    "price": null,
    "image": "books/1172.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭ്രാന്ത്",
    "name_en": "Bhraant",
    "author": "പരമന്‍",
    "stockNumber": 1173,
    "price": null,
    "image": "books/1173.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അഗ്നിസാക്ഷി",
    "name_en": "Agnisaakshi",
    "author": "ലളിതാംബിക അന്തര്‍ജനം",
    "stockNumber": 1174,
    "price": null,
    "image": "books/1174.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗോവര്‍ദ്ധൻ്റെ യാത്രകള്‍",
    "name_en": "Govar‍ddhaൻrè yaatrakal‍",
    "author": "ആനന്ദ്",
    "stockNumber": 1175,
    "price": null,
    "image": "books/1175.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "യന്ത്രം",
    "name_en": "Yantram",
    "author": "മലയത്തൂര്‍",
    "stockNumber": 1176,
    "price": null,
    "image": "books/1176.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹരിധ്വാരിയില്‍ മണികള്‍ മുഴങ്ങുന്നു",
    "name_en": "Haridhvaariyil‍ manikal‍ muzha~n~nunnu",
    "author": "എം മുകുന്ദന്‍",
    "stockNumber": 1177,
    "price": null,
    "image": "books/1177.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മയ്യഴിപ്പുഴയുടെ തീരങ്ങളില്‍",
    "name_en": "Mayyazhippuzhayutè teera~n~nalil‍",
    "author": "എം മുകുന്ദന്‍",
    "stockNumber": 1178,
    "price": null,
    "image": "books/1178.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനുഷ്യനൊരാമുഖം",
    "name_en": "Manushyanòraamukham",
    "author": "സുഭാഷ് ചന്ദ്രന്‍",
    "stockNumber": 1179,
    "price": null,
    "image": "books/1179.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗുരുസാഗരം",
    "name_en": "Gurusaagaram",
    "author": "ഛഢ വിജയന്‍",
    "stockNumber": 1180,
    "price": null,
    "image": "books/1180.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാനസി",
    "name_en": "Maanasi",
    "author": "മാധവിക്കുട്ടി",
    "stockNumber": 1181,
    "price": null,
    "image": "books/1181.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സുന്ദരികളും സുന്ദരന്മാരും",
    "name_en": "Sundarikalum sundaranmaarum",
    "author": "ഉറൂബ്",
    "stockNumber": 1182,
    "price": null,
    "image": "books/1182.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉമ്മാച്ചു",
    "name_en": "Ummaachchu",
    "author": "ഉറൂബ്",
    "stockNumber": 1183,
    "price": null,
    "image": "books/1183.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഡല്‍ഹി",
    "name_en": "Dal‍hi",
    "author": "എം.മുകുന്ദന്‍",
    "stockNumber": 1184,
    "price": null,
    "image": "books/1184.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അനശ്വരതയിലേക്ക്",
    "name_en": "Anashvaratayilekk",
    "author": "ഒഎന്‍വി",
    "stockNumber": 1185,
    "price": null,
    "image": "books/1185.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബിരിയാണി",
    "name_en": "Biriyaani",
    "author": "സന്തോഷ് എച്ചിക്കാനം",
    "stockNumber": 1186,
    "price": null,
    "image": "books/1186.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചാര സുന്ദരി",
    "name_en": "Chaara sundari",
    "author": "പോളോ കീലോ",
    "stockNumber": 1187,
    "price": null,
    "image": "books/1187.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മെയിന്‍ കാംഫ്",
    "name_en": "Mèyin‍ kaamph",
    "author": "അഡോള്‍ഫ് ഹിറ്റ്ലര്‍",
    "stockNumber": 1188,
    "price": null,
    "image": "books/1188.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാന്‍സര്‍ വാര്‍ഡില്‍ ചിരി",
    "name_en": "Kaan‍sar‍ vaar‍dil‍ chiri",
    "author": "ഇന്നസെൻ്റ്",
    "stockNumber": 1189,
    "price": null,
    "image": "books/1189.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇഎംഎസും പെൺകുട്ടിയും",
    "name_en": "Ièmèsum pèൺkuttiyum",
    "author": "ബെന്യാമിന്‍",
    "stockNumber": 1190,
    "price": null,
    "image": "books/1190.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കഥകള്‍ -കെആര്‍ മീര",
    "name_en": "Kathakal‍ -kèaar‍ meera",
    "author": "കെആര്‍ മീര",
    "stockNumber": 1191,
    "price": null,
    "image": "books/1191.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പിയോത",
    "name_en": "Piyota",
    "author": "ഹാനി ഭാസ്കരന്‍",
    "stockNumber": 1192,
    "price": null,
    "image": "books/1192.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാലം കണ്ണാടി നീട്ടുമ്പോള്‍",
    "name_en": "Kaalam kannaati neettumpol‍",
    "author": "കെ വി അച്യുതന്‍",
    "stockNumber": 1193,
    "price": null,
    "image": "books/1193.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തിരഞ്ഞെടുത്ത കഥകള്‍",
    "name_en": "Tira~n~nètutta kathakal‍",
    "author": "ഓഷൂ",
    "stockNumber": 1194,
    "price": null,
    "image": "books/1194.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റുപ്പുപ്പാക്കൊരാനേണ്ടാർന്ന്",
    "name_en": "Èൻruppuppaakkòraanentaaർnn",
    "author": "ബഷീര്‍",
    "stockNumber": 1195,
    "price": null,
    "image": "books/1195.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പാവപ്പട്ട്വരുടെ വേഷം",
    "name_en": "Paavappattvarutè vesham",
    "author": "ബഷീര്‍",
    "stockNumber": 1196,
    "price": null,
    "image": "books/1196.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വഡ്ഢികളുടെ സ്വര്‍ഗം",
    "name_en": "Vaddhikalutè svar‍gam",
    "author": "ബഷീര്‍",
    "stockNumber": 1197,
    "price": null,
    "image": "books/1197.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നീങ്ങൾക്കും ഐഎഎസ് നേടാം",
    "name_en": "Nee~n~naൾkkum aièès netaam",
    "author": "എസ് ഹരി കിഷോര്‍ ഐഎഎസ്",
    "stockNumber": 1198,
    "price": null,
    "image": "books/1198.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാലം",
    "name_en": "Kaalam",
    "author": "എംടി വാസുദേവന്‍ നായര്‍",
    "stockNumber": 1199,
    "price": null,
    "image": "books/1199.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തട്ടകം",
    "name_en": "Tattakam",
    "author": "കോവിലന്‍",
    "stockNumber": 1200,
    "price": null,
    "image": "books/1200.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മൃണാലം",
    "name_en": "Mrrinaalam",
    "author": "സി രാധാകൃഷ്ണന്‍",
    "stockNumber": 1201,
    "price": null,
    "image": "books/1201.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നാലുകെട്ട്",
    "name_en": "Naalukètt",
    "author": "എംടി വാസുദേവന്‍ നായര്‍",
    "stockNumber": 1202,
    "price": null,
    "image": "books/1202.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അര്‍ധനാരീശ്വരന്‍",
    "name_en": "Ar‍dhanaareeshvaran‍",
    "author": "പെരുമാള്‍ മുരുകന്‍",
    "stockNumber": 1203,
    "price": null,
    "image": "books/1203.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മയ്യഴിപ്പുഴയുടെ തീരങ്ങളില്‍",
    "name_en": "Mayyazhippuzhayutè teera~n~nalil‍",
    "author": "എം.മുകുന്ദന്‍",
    "stockNumber": 1204,
    "price": null,
    "image": "books/1204.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നൃത്തം",
    "name_en": "Nrrittam",
    "author": "എം.മുകുന്ദന്‍",
    "stockNumber": 1205,
    "price": null,
    "image": "books/1205.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അനുഭവം ഓര്‍മ യാത്ര",
    "name_en": "Anubhavam or‍ma yaatra",
    "author": "എം.മുകുന്ദന്‍",
    "stockNumber": 1206,
    "price": null,
    "image": "books/1206.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൃഷ്ണ ദര്‍ശനം",
    "name_en": "Krrishna dar‍shanam",
    "author": "ഓഷൂ",
    "stockNumber": 1207,
    "price": null,
    "image": "books/1207.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രണയത്തിൻ്റെ രാജകുമാരി",
    "name_en": "Pranayattiൻrè raajakumaari",
    "author": "മേരിലി വെയ്സ്ബോര്‍ഡ്",
    "stockNumber": 1208,
    "price": null,
    "image": "books/1208.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അപ്പുവിന്റെ ലോകം",
    "name_en": "Appuvinrè lokam",
    "author": "ബിഭൂതി ബൂഷന്‍ ബന്ധ്യോപാദ്യായ",
    "stockNumber": 1209,
    "price": null,
    "image": "books/1209.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രണയത്തിൻ്റെ രഹസ്യങ്ങള്‍",
    "name_en": "Pranayattiൻrè rahasya~n~nal‍",
    "author": "ഓഷൂ",
    "stockNumber": 1210,
    "price": null,
    "image": "books/1210.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എന്റെ സത്യാന്വേഷണ പരീക്ഷണങ്ങൾ",
    "name_en": "Ènrè satyaanveshana pareekshana~n~naൾ",
    "author": "എം കെ ഗാന്ധി",
    "stockNumber": 1211,
    "price": null,
    "image": "books/1211.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കോന്‍ ബനേഗ നാരായണ മൂര്‍ത്തി",
    "name_en": "Kon‍ banega naaraayana moor‍tti",
    "author": null,
    "stockNumber": 1212,
    "price": null,
    "image": "books/1212.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സയന്‍സ് ക്വിസ്",
    "name_en": "Sayan‍s kvis",
    "author": "വിജയന്‍ കുന്നുമക്കര",
    "stockNumber": 1213,
    "price": null,
    "image": "books/1213.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗാന്ധിജി -നമ്മുടെ രാഷ്ട്രപിതാവ്",
    "name_en": "Gaandhiji -nammutè raashtrapitaav",
    "author": "പിടി മുരുകച്ചന്‍",
    "stockNumber": 1214,
    "price": null,
    "image": "books/1214.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആശാന്‍ ഉള്ളൂര്‍ വള്ളത്തോള്‍ കുട്ടിക്കവിതകൾ",
    "name_en": "Aashaan‍ ulloor‍ vallattol‍ kuttikkavitakaൾ",
    "author": "ഡോ.മിനി നായര്‍",
    "stockNumber": 1215,
    "price": null,
    "image": "books/1215.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുഞ്ഞി കഥകളും കവിതകളും",
    "name_en": "Ku~n~ni kathakalum kavitakalum",
    "author": "സിന്ധു എസ്ആര്‍",
    "stockNumber": 1216,
    "price": null,
    "image": "books/1216.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഹാത്മാ ഗാന്ധി ക്വിസ്",
    "name_en": "Mahaatmaa gaandhi kvis",
    "author": "വിജയന്‍ കുന്നുമക്കര",
    "stockNumber": 1217,
    "price": null,
    "image": "books/1217.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പരുന്തിനെ തോല്‍പ്പിച്ച കുട്ടി",
    "name_en": "Paruntinè tol‍ppichcha kutti",
    "author": "കനക രാഘവന്‍",
    "stockNumber": 1218,
    "price": null,
    "image": "books/1218.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രണയ ജോഡി",
    "name_en": "Pranaya jodi",
    "author": "നിര്‍മ്മല്‍ വര്‍മ്മ",
    "stockNumber": 1219,
    "price": null,
    "image": "books/1219.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അനാമിക",
    "name_en": "Anaamika",
    "author": "ലഘു നോവല്‍ ശത്രുഗ്നന്‍",
    "stockNumber": 1220,
    "price": null,
    "image": "books/1220.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അവിചാരിതം",
    "name_en": "Avichaaritam",
    "author": "യുകെ കുമാരന്‍",
    "stockNumber": 1221,
    "price": null,
    "image": "books/1221.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചാവു നിലം",
    "name_en": "Chaavu nilam",
    "author": "കെ.കുമാരന്‍",
    "stockNumber": 1222,
    "price": null,
    "image": "books/1222.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരുമുറി തേടി",
    "name_en": "Òrumuri teti",
    "author": "യുകെ കുമാരന്‍",
    "stockNumber": 1223,
    "price": null,
    "image": "books/1223.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ധംശം",
    "name_en": "Dhamsham",
    "author": "ശത്രുഗ്നന്‍",
    "stockNumber": 1224,
    "price": null,
    "image": "books/1224.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അറിയപ്പേടാത്തവര്‍",
    "name_en": "Ariyappetaattavar‍",
    "author": "വില്ലകത്താര്‍",
    "stockNumber": 1225,
    "price": null,
    "image": "books/1225.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കറുമ്പന്‍",
    "name_en": "Karumpan‍",
    "author": "അണ്ണസേവല്‍",
    "stockNumber": 1226,
    "price": null,
    "image": "books/1226.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിഷ്കളങ്കരുടെ പലായനം",
    "name_en": "Nishkala~nkarutè palaayanam",
    "author": "പ്രേമാനന്ദ് ചമ്പാട്",
    "stockNumber": 1227,
    "price": null,
    "image": "books/1227.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു കൊച്ചു രാജകുമാരി",
    "name_en": "Òru kòchchu raajakumaari",
    "author": "പ്രേമാനന്ദ് ചമ്പാട്",
    "stockNumber": 1228,
    "price": null,
    "image": "books/1228.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "താരസ് ബുള്‍ബ",
    "name_en": "Taaras bul‍ba",
    "author": "പ്രേമാനന്ദ് ചമ്പാട്",
    "stockNumber": 1229,
    "price": null,
    "image": "books/1229.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വുതറിംഗ് ഹൈറ്റ്സ് ",
    "name_en": "Vutarimg hairrs ",
    "author": "പ്രേമാനന്ദ് ചമ്പാട്",
    "stockNumber": 1230,
    "price": null,
    "image": "books/1230.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പാണീഗ്രഹണം",
    "name_en": "Paaneegrahanam",
    "author": "പിആര്‍ നാട്",
    "stockNumber": 1231,
    "price": null,
    "image": "books/1231.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇരുട്ടില്‍",
    "name_en": "Iruttil‍",
    "author": "നിര്‍മ്മല്‍ വര്‍മ്മ",
    "stockNumber": 1232,
    "price": null,
    "image": "books/1232.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു ദിവസത്തേ അതിഥി",
    "name_en": "Òru divasatte atithi",
    "author": "നിര്‍മ്മല്‍ വര്‍മ്മ",
    "stockNumber": 1233,
    "price": null,
    "image": "books/1233.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രണയ ബാധിതര്‍ക്കൊരു പേടകം",
    "name_en": "Pranaya baadhitar‍kkòru petakam",
    "author": "ഡോ.എം.രാജീവ് കുമാര്‍",
    "stockNumber": 1234,
    "price": null,
    "image": "books/1234.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹിസ്റ്ററോബിയ",
    "name_en": "Hisrrarobiya",
    "author": "മനോജ് വീട്ടിക്കാട്",
    "stockNumber": 1235,
    "price": null,
    "image": "books/1235.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒറ്റ് സംഖ്യകള്‍",
    "name_en": "Òrr samkhyakal‍",
    "author": "ഷാജി പുല്‍പള്ളി",
    "stockNumber": 1236,
    "price": null,
    "image": "books/1236.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സീതയല്ല ജാനകി",
    "name_en": "Seetayalla jaanaki",
    "author": "സ്വപ്ന ബാബു",
    "stockNumber": 1237,
    "price": null,
    "image": "books/1237.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലിഫ്റ്റും കോമാളിയും",
    "name_en": "Liphrrum komaaliyum",
    "author": "ഐസക് ഈപ്പന്‍",
    "stockNumber": 1238,
    "price": null,
    "image": "books/1238.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സുല്‍ത്താന റസിയ",
    "name_en": "Sul‍ttaana rasiya",
    "author": "യുഎ കാധര്‍",
    "stockNumber": 1239,
    "price": null,
    "image": "books/1239.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാഡം കൂരി",
    "name_en": "Maadam koori",
    "author": "ഡോ.സി.ജി രാമചന്ദ്രന്‍ നായര്‍",
    "stockNumber": 1240,
    "price": null,
    "image": "books/1240.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വര്‍ഗീയതയും ഇന്ത്യന്‍ ചരിത്ര ശാസ്ത്രവും",
    "name_en": "Var‍geeyatayum intyan‍ charitra shaastravum",
    "author": "പ്രൊഫ.എം വി ശ്രീധരന്‍",
    "stockNumber": 1241,
    "price": null,
    "image": "books/1241.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പോഷണവും ആരോഗ്യവും",
    "name_en": "Poshanavum aarogyavum",
    "author": "ഡോ. രേഖ റെയ്ച്ചല്‍ ഫിലിപ്പ്",
    "stockNumber": 1242,
    "price": null,
    "image": "books/1242.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്ത്യൻ ശാസ്ത്ര പാരമ്പര്യം സത്യവും മിഥ്യയും",
    "name_en": "Intyaൻ shaastra paaramparyam satyavum mithyayum",
    "author": "കെ ടി രാധാകൃഷ്ണന്‍",
    "stockNumber": 1243,
    "price": null,
    "image": "books/1243.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൊതുകു ജന്യ രോഗങ്ങൾ",
    "name_en": "Kòtuku janya roga~n~naൾ",
    "author": "ഡോ വിജയ കുമാര്‍",
    "stockNumber": 1244,
    "price": null,
    "image": "books/1244.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അഗോള താപനം ശാസ്ത്രവും രാഷ്ട്രീയവും",
    "name_en": "Agola taapanam shaastravum raashtreeyavum",
    "author": "പ്രൊ.പി.കെ രവീന്ദ്രന്‍",
    "stockNumber": 1245,
    "price": null,
    "image": "books/1245.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അവൻ്റെ സ്മരണകള്‍",
    "name_en": "Avaൻrè smaranakal‍",
    "author": "തകഴി ശിവശങ്കരപ്പിള്ള",
    "stockNumber": 1246,
    "price": null,
    "image": "books/1246.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗുട്ടന്‍ ബര്‍ഗു മുതല്‍ സുക്കര്‍ ബര്‍ഗു വരെ",
    "name_en": "Guttan‍ bar‍gu mutal‍ sukkar‍ bar‍gu varè",
    "author": "ഡോ. സെബാസ്റ്റ്യന്‍ പോള്‍",
    "stockNumber": 1247,
    "price": null,
    "image": "books/1247.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്ത്യ അതിന്നു നമ്മേ എന്ത് പഠിപ്പിക്കുവാന്‍ കഴിയും",
    "name_en": "Intya atinnu namme ènt pathippikkuvaan‍ kazhiyum",
    "author": "കെകെവി നയന്‍",
    "stockNumber": 1248,
    "price": null,
    "image": "books/1248.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാറ്റു ചിക്കിയ തെളിമണലില്‍",
    "name_en": "Kaarru chikkiya tèlimanalil‍",
    "author": "ഏഴാച്ചേരി രാമചന്ദ്രന്‍",
    "stockNumber": 1249,
    "price": null,
    "image": "books/1249.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കവിതയുടെ പട്ടണ പ്രവേശം",
    "name_en": "Kavitayutè pattana pravesham",
    "author": "ഡോ. പി സോമന്‍",
    "stockNumber": 1250,
    "price": null,
    "image": "books/1250.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "യാനം",
    "name_en": "Yaanam",
    "author": "കെ വി കുമാരന്‍",
    "stockNumber": 1251,
    "price": null,
    "image": "books/1251.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സുഗതകുമാരിയുടെ സമ്പൂര്‍ണ കവിതകള്‍",
    "name_en": "Sugatakumaariyutè sampoor‍na kavitakal‍",
    "author": "സുഗതകുമാരി",
    "stockNumber": 1252,
    "price": null,
    "image": "books/1252.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വയലാര്‍ കൃതികള്‍",
    "name_en": "Vayalaar‍ krritikal‍",
    "author": "വയലാര്‍",
    "stockNumber": 1253,
    "price": null,
    "image": "books/1253.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാപ്പിരികളുടെ നാട്ടില്‍",
    "name_en": "Kaappirikalutè naattil‍",
    "author": "എസ്കെ പൊട്ടക്കാട്",
    "stockNumber": 1254,
    "price": null,
    "image": "books/1254.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പഥേര്‍ പാഞ്ചാലി",
    "name_en": "Pather‍ paa~nchaali",
    "author": "ബിഭൂതി ബൂഷന്‍ ബന്ധ്യോപാദ്യായ",
    "stockNumber": 1255,
    "price": null,
    "image": "books/1255.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്റ്റാച്ചു.പി.ഒ",
    "name_en": "Srraachchu.pi.ò",
    "author": "എസ്.ആര്‍.ലാല്‍",
    "stockNumber": 1256,
    "price": null,
    "image": "books/1256.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കഥകള്‍",
    "name_en": "Kathakal‍",
    "author": "കെആര്‍ മീര",
    "stockNumber": 1257,
    "price": null,
    "image": "books/1257.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തൂവലില്‍ കോരുത്ത തെരുവുകള്‍",
    "name_en": "Toovalil‍ korutta tèruvukal‍",
    "author": "സുനോജ് ബാബു",
    "stockNumber": 1258,
    "price": null,
    "image": "books/1258.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉണ്ണികളേ ഒരു കഥ കേള്‍ക്കാം",
    "name_en": "Unnikale òru katha kel‍kkaam",
    "author": "ലതീഷ് കീഴല്ലൂര്‍",
    "stockNumber": 1259,
    "price": null,
    "image": "books/1259.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കറങ്ങുന്ന ചക്രവും ചരിത്രവും",
    "name_en": "Kara~n~nunna chakravum charitravum",
    "author": "ഗിഫു മേലാറ്റൂര്‍",
    "stockNumber": 1260,
    "price": null,
    "image": "books/1260.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രസംഗം എന്ന വാജ്രായുധം",
    "name_en": "Prasamgam ènna vaajraayudham",
    "author": "എം കെ ദീപക്",
    "stockNumber": 1261,
    "price": null,
    "image": "books/1261.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒളിമങ്ങാത്ത ചരിത്ര നായകര്‍",
    "name_en": "Òlima~n~naatta charitra naayakar‍",
    "author": "പി വി സുകുമാരന്",
    "stockNumber": 1262,
    "price": null,
    "image": "books/1262.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദിയ",
    "name_en": "Diya",
    "author": "പി വി സുകുമാരൻ",
    "stockNumber": 1263,
    "price": null,
    "image": "books/1263.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൗതുകമുള്ള ശാസ്ത്ര കാര്യങ്ങൾ",
    "name_en": "Kaൗtukamulla shaastra kaarya~n~naൾ",
    "author": "ഡോ. സംഘീത ചേനം പുള്ളി",
    "stockNumber": 1264,
    "price": null,
    "image": "books/1264.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പുസ്തകകൂട്ട്",
    "name_en": "Pustakakoott",
    "author": "നാരായണൻ കാവുന്തായി",
    "stockNumber": 1265,
    "price": null,
    "image": "books/1265.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടത്തനാട്ട് മാധവിയമ്മ",
    "name_en": "Katattanaatt maadhaviyamma",
    "author": "രാജൻ തിരുവോത്ത്",
    "stockNumber": 1266,
    "price": null,
    "image": "books/1266.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാൾമാർക്ക്സ് ജീവ ചരിത്രം",
    "name_en": "Kaaൾmaaർkks jeeva charitram",
    "author": "ഹെൻട്രിച്ച് ഗ്യാംകോർ",
    "stockNumber": 1267,
    "price": null,
    "image": "books/1267.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരള നവോത്ഥാനം യുഗ സന്തതികൾ യുവ ശിൽപികൾ",
    "name_en": "Kerala navotthaanam yuga santatikaൾ yuva shiൽpikaൾ",
    "author": "പി ഗോവിന്ദപ്പിള്ള",
    "stockNumber": 1268,
    "price": null,
    "image": "books/1268.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വാക്ഭടാനന്ദൻ",
    "name_en": "Vaakbhataanandaൻ",
    "author": "ടി രാജൻ",
    "stockNumber": 1269,
    "price": null,
    "image": "books/1269.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തിളച്ച മണ്ണിൽ കൽനടായായി",
    "name_en": "Tilachcha manniൽ kaൽnataayaayi",
    "author": "ഡോ. പുലാശ്ശേരി രാമചന്ദ്രൻ",
    "stockNumber": 1270,
    "price": null,
    "image": "books/1270.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദക്ഷിണേന്ത്യയിലെ പക്ഷികൾ",
    "name_en": "Dakshinentyayilè pakshikaൾ",
    "author": "സി റഹീം",
    "stockNumber": 1271,
    "price": null,
    "image": "books/1271.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭൂമിയുടെ അവകാശികൾ",
    "name_en": "Bhoomiyutè avakaashikaൾ",
    "author": "ഡോ. വേണു തോന്നയ്ക്കൽ",
    "stockNumber": 1272,
    "price": null,
    "image": "books/1272.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു  മലർകാലത്തിൻ ഓർമ്മകൾ",
    "name_en": "Òru  malaർkaalattiൻ oർmmakaൾ",
    "author": "വിടി മുരളി",
    "stockNumber": 1273,
    "price": null,
    "image": "books/1273.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സുഗന്ത വിള കൃഷിയിലെ വിജയ വഴികൾ",
    "name_en": "Suganta vila krrishiyilè vijaya vazhikaൾ",
    "author": "പോൾസൺ തം",
    "stockNumber": 1274,
    "price": null,
    "image": "books/1274.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചോരപ്പുഴ",
    "name_en": "Chorappuzha",
    "author": "ഓ കൃഷ്ണൻ പാട്യം",
    "stockNumber": 1275,
    "price": null,
    "image": "books/1275.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തൊഴിലാളി വർഗത്തിൻ്റെ വിപ്ലവ ബഹുജന പാർട്ടി",
    "name_en": "Tòzhilaali vaർgattiൻrè viplava bahujana paaർtti",
    "author": "ഇഎംഎസ്",
    "stockNumber": 1276,
    "price": null,
    "image": "books/1276.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജന്തു ശാസ്ത്രം",
    "name_en": "Jantu shaastram",
    "author": "ബാലകൃഷ്ണൻ",
    "stockNumber": 1277,
    "price": null,
    "image": "books/1277.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനുഷ്യ ശരീരം എന്ന മഹാ യന്ത്രം",
    "name_en": "Manushya shareeram ènna mahaa yantram",
    "author": "DR PK സുകുമാരൻ",
    "stockNumber": 1278,
    "price": null,
    "image": "books/1278.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗണിത ശാസ്ത്ര പ്രതിഭകൾ ",
    "name_en": "Ganita shaastra pratibhakaൾ ",
    "author": "പള്ളിയറ ശ്രീധരൻ",
    "stockNumber": 1279,
    "price": null,
    "image": "books/1279.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രക്ത സാക്ഷികളുടെ കുട്ടിക്കാലം",
    "name_en": "Rakta saakshikalutè kuttikkaalam",
    "author": "ഹംസ ആലുങ്കൽ",
    "stockNumber": 1280,
    "price": null,
    "image": "books/1280.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സഫലമീ യാത്ര",
    "name_en": "Saphalamee yaatra",
    "author": "എൻഎൻ കക്കാട്",
    "stockNumber": 1281,
    "price": null,
    "image": "books/1281.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാടിതു കണ്ടായ കാന്ത",
    "name_en": "Kaatitu kantaaya kaanta",
    "author": "സാറാജോസഫ്",
    "stockNumber": 1282,
    "price": null,
    "image": "books/1282.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പെൺ പഞ്ച തന്ത്രം",
    "name_en": "Pèൺ pa~ncha tantram",
    "author": "കെആർ മീര",
    "stockNumber": 1283,
    "price": null,
    "image": "books/1283.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രക്തം പുരണ്ട മൺ തരികൾ",
    "name_en": "Raktam puranta maൺ tarikaൾ",
    "author": "എംടി വാസുദേവൻ നായർ",
    "stockNumber": 1284,
    "price": null,
    "image": "books/1284.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പയ്യൻ കഥകൾ",
    "name_en": "Payyaൻ kathakaൾ",
    "author": "വികെഎൻ",
    "stockNumber": 1285,
    "price": null,
    "image": "books/1285.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിലാപയാത്ര",
    "name_en": "Vilaapayaatra",
    "author": "എം ടി വാസുദേവൻ നായർ",
    "stockNumber": 1286,
    "price": null,
    "image": "books/1286.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അധ്യാപക കഥകൾ",
    "name_en": "Adhyaapaka kathakaൾ",
    "author": "അക്ബർ കക്കേറ്റിൽ",
    "stockNumber": 1287,
    "price": null,
    "image": "books/1287.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്കൂൾ ഡയറി",
    "name_en": "Skooൾ dayari",
    "author": "ലെഗനംഗൽ",
    "stockNumber": 1288,
    "price": null,
    "image": "books/1288.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഫിഡൽ കാസ്ട്രോ",
    "name_en": "Phidaൽ kaastro",
    "author": "കെഎം ലെനിൻ",
    "stockNumber": 1289,
    "price": null,
    "image": "books/1289.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കീഴാളൻ",
    "name_en": "Keezhaalaൻ",
    "author": "പെരുമാൾ മുരുകൻ",
    "stockNumber": 1290,
    "price": null,
    "image": "books/1290.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എഴുത്തിൻ്റെ ദിശകൾ",
    "name_en": "Èzhuttiൻrè dishakaൾ",
    "author": "സി വി ബാലകൃഷ്ണൻ",
    "stockNumber": 1291,
    "price": null,
    "image": "books/1291.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മതേതര ഭാരതം",
    "name_en": "Matetara bhaaratam",
    "author": "സുകുമാർ അഴീക്കോട്",
    "stockNumber": 1292,
    "price": null,
    "image": "books/1292.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വരൂ ഈ തെരുവുകളുടെ രക്തം കാണാം",
    "name_en": "Varoo ee tèruvukalutè raktam kaanaam",
    "author": "സച്ചിതാനന്ദൻ",
    "stockNumber": 1293,
    "price": null,
    "image": "books/1293.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എന്റെ വഴിയമ്പലങ്ങൾ",
    "name_en": "Ènrè vazhiyampala~n~naൾ",
    "author": "എസ്‌കെ പൊറ്റക്കാട്",
    "stockNumber": 1294,
    "price": null,
    "image": "books/1294.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാവിയിൽ പൊതിഞ്ഞ വിശുദ്ധ പശു",
    "name_en": "Kaaviyiൽ pòti~n~na vishuddha pashu",
    "author": "ഷഫീഖ് എച്ച്",
    "stockNumber": 1295,
    "price": null,
    "image": "books/1295.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അഗ്നിച്ചിറകുകൾ",
    "name_en": "Agnichchirakukaൾ",
    "author": "എപിജെ അബ്ദുൾ കലാം",
    "stockNumber": 1296,
    "price": null,
    "image": "books/1296.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഞ്ഞ വെയിൽ മരണങ്ങൽ",
    "name_en": "Ma~n~na vèyiൽ marana~n~naൽ",
    "author": "ബെന്യാമിൻ",
    "stockNumber": 1297,
    "price": null,
    "image": "books/1297.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാറ്റത്തി",
    "name_en": "Maarratti",
    "author": "സാറാജോസഫ്",
    "stockNumber": 1298,
    "price": null,
    "image": "books/1298.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്നേഹത്തിൻ്റെ സ്വർഗ വാതിലുകൾ",
    "name_en": "Snehattiൻrè svaർga vaatilukaൾ",
    "author": "മാധവിക്കുട്ടി ",
    "stockNumber": 1299,
    "price": null,
    "image": "books/1299.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാധവിക്കുട്ടിയുടെ പ്രണയ നോവലുകൾ",
    "name_en": "Maadhavikkuttiyutè pranaya novalukaൾ",
    "author": "മാധവിക്കുട്ടി ",
    "stockNumber": 1300,
    "price": null,
    "image": "books/1300.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാധവിക്കുട്ടിയുടെ പ്രേമ കഥകൾ",
    "name_en": "Maadhavikkuttiyutè prema kathakaൾ",
    "author": "മാധവിക്കുട്ടി ",
    "stockNumber": 1301,
    "price": null,
    "image": "books/1301.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു സ്ത്രീയും മറ്റു കഥകളും",
    "name_en": "Òru streeyum marru kathakalum",
    "author": "മാസിം ഗോർക്കി",
    "stockNumber": 1302,
    "price": null,
    "image": "books/1302.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കത്തി",
    "name_en": "Katti",
    "author": "പുനത്തിൽ കുഞ്ഞബ്ദുള്ള",
    "stockNumber": 1303,
    "price": null,
    "image": "books/1303.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സുഭാഷ് ചന്ദ്രൻ്റെ കഥകൾ",
    "name_en": "Subhaash chandraൻrè kathakaൾ",
    "author": "സുഭാഷ് ചന്ദ്രൻ",
    "stockNumber": 1304,
    "price": null,
    "image": "books/1304.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലെനിനോടുള്ള വിയോജനങ്ങൾ",
    "name_en": "Lèninotulla viyojana~n~naൾ",
    "author": "റോസലെക്സം ബാർഗ്",
    "stockNumber": 1305,
    "price": null,
    "image": "books/1305.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അക്കർമാരി",
    "name_en": "Akkaർmaari",
    "author": "ശരൺകുമാർ ലിംബാലെ",
    "stockNumber": 1306,
    "price": null,
    "image": "books/1306.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നൂറു സിംഹാസനങ്ങൾ",
    "name_en": "Nooru simhaasana~n~naൾ",
    "author": "ജയ മോഹനൻ",
    "stockNumber": 1307,
    "price": null,
    "image": "books/1307.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശരീര ശാസ്ത്രം",
    "name_en": "Shareera shaastram",
    "author": "ബെന്യാമിൻ",
    "stockNumber": 1308,
    "price": null,
    "image": "books/1308.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സൂര്യനെ അണിഞ്ഞ സ്ത്രീ",
    "name_en": "Sooryanè ani~n~na stree",
    "author": "കെആർ മീര",
    "stockNumber": 1309,
    "price": null,
    "image": "books/1309.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഞാനും ബുദ്ധനും",
    "name_en": "~naanum buddhanum",
    "author": "രാജേന്ദ്രൻ എടുത്തങ്കര",
    "stockNumber": 1310,
    "price": null,
    "image": "books/1310.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രണയത്തിൻ്റെ രാജകുമാരി",
    "name_en": "Pranayattiൻrè raajakumaari",
    "author": "മേർലിൻ വെയ്‌സ്ബോർഡ്",
    "stockNumber": 1311,
    "price": null,
    "image": "books/1311.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളം ജില്ലകളിലൂടെ",
    "name_en": "Keralam jillakalilootè",
    "author": "കെസി കൃഷ്ണകുമാർ",
    "stockNumber": 1312,
    "price": null,
    "image": "books/1312.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ക്വാണ്ടം മെക്കാനിക്സ് ഒരു ചരിത്ര വീക്ഷണം",
    "name_en": "Kvaantam mèkkaaniks òru charitra veekshanam",
    "author": "എം സി ശ്രീധരൻ",
    "stockNumber": 1313,
    "price": null,
    "image": "books/1313.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പകൽ സ്വപ്നത്തിൽ വെയിൽ കായാൻ വന്ന ഒരു നരി",
    "name_en": "Pakaൽ svapnattiൽ vèyiൽ kaayaaൻ vanna òru nari",
    "author": "സന്തോഷ് ഏച്ചിക്കാനം",
    "stockNumber": 1314,
    "price": null,
    "image": "books/1314.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അർബുത ലക്ഷണങ്ങൾ പ്രതിവിധികൾ",
    "name_en": "Aർbuta lakshana~n~naൾ pratividhikaൾ",
    "author": "ഡോ ജോൺ പനവത്തിൽ",
    "stockNumber": 1315,
    "price": null,
    "image": "books/1315.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നരനാ യും പറവയായും",
    "name_en": "Naranaa yum paravayaayum",
    "author": "സന്തോഷ് ഏച്ചിക്കാനം",
    "stockNumber": 1316,
    "price": null,
    "image": "books/1316.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലയാളത്തിൻ്റെ സുവർണ കഥകൾ",
    "name_en": "Malayaalattiൻrè suvaർna kathakaൾ",
    "author": "ടി.പത്മനാഭൻ",
    "stockNumber": 1317,
    "price": null,
    "image": "books/1317.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പാപത്തറ",
    "name_en": "Paapattara",
    "author": "സന ജോസഫ്",
    "stockNumber": 1318,
    "price": null,
    "image": "books/1318.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അധുനിക ഇന്ത്യ",
    "name_en": "Adhunika intya",
    "author": "വിപിൻ ചന്ദ്ര",
    "stockNumber": 1319,
    "price": null,
    "image": "books/1319.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉണ്ണിക്കോരൻ ഉപാധ്യായ",
    "name_en": "Unnikkoraൻ upaadhyaaya",
    "author": "പി.വൽസല",
    "stockNumber": 1320,
    "price": null,
    "image": "books/1320.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്ത്യൻ ഭരണ ഘടന",
    "name_en": "Intyaൻ bharana ghatana",
    "author": "ആര്യ",
    "stockNumber": 1321,
    "price": null,
    "image": "books/1321.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പാവങ്ങൾ",
    "name_en": "Paava~n~naൾ",
    "author": "വിക്ടർ ഹ്യൂഗോ",
    "stockNumber": 1322,
    "price": null,
    "image": "books/1322.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഷെർലോക് ഹോംസിൻ്റെ സാഹസങ്ങൾ",
    "name_en": "Shèർlok homsiൻrè saahasa~n~naൾ",
    "author": "അർത്ഥർ കോതൻ ഡോയൽ",
    "stockNumber": 1323,
    "price": null,
    "image": "books/1323.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ ജീവിത കഥ",
    "name_en": "Èൻrè jeevita katha",
    "author": "ഹെലൻ കെല്ലർ",
    "stockNumber": 1324,
    "price": null,
    "image": "books/1324.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗുഡ് നൈറ്റ്",
    "name_en": "Gud nairr",
    "author": "എൻഎൻ പിള്ള",
    "stockNumber": 1325,
    "price": null,
    "image": "books/1325.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റിപ്‌വാൻ വിങ്കിൾ",
    "name_en": "Rip‌vaaൻ vi~nkiൾ",
    "author": "വാഷിംഗ്ടൺ ഇർവിംഗ്",
    "stockNumber": 1326,
    "price": null,
    "image": "books/1326.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്റ്റീഫൻ ഹോക്കിംഗ് സ്ഥലകാ ലകളുടെ മഹാ മന്ത്രികൻ",
    "name_en": "Srreephaൻ hokkimg sthalakaa lakalutè mahaa mantrikaൻ",
    "author": "ശശി കുമാർ പുറമേരി",
    "stockNumber": 1327,
    "price": null,
    "image": "books/1327.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗണിതം റാങ്ക് ഫയൽ",
    "name_en": "Ganitam raa~nk phayaൽ",
    "author": "സജിത്ത് ഡികെ",
    "stockNumber": 1328,
    "price": null,
    "image": "books/1328.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പരിസ്ഥി ക്വിസ്",
    "name_en": "Paristhi kvis",
    "author": "പ്രമോദ് കുമാർ",
    "stockNumber": 1329,
    "price": null,
    "image": "books/1329.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പരീക്ഷ ഭയവും ആത്മ വിശ്വാസകുറവും",
    "name_en": "Pareeksha bhayavum aatma vishvaasakuravum",
    "author": "ശാന്ത കുമാർ",
    "stockNumber": 1330,
    "price": null,
    "image": "books/1330.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൊസാക്കുക്കൾ",
    "name_en": "Kòsaakkukkaൾ",
    "author": "ലിയോ ടോൾസ്റ്റോയ്",
    "stockNumber": 1331,
    "price": null,
    "image": "books/1331.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പഥേർ പാഞ്ചാലി",
    "name_en": "Patheർ paa~nchaali",
    "author": "ബിബൂതി ബൂഷൻ",
    "stockNumber": 1332,
    "price": null,
    "image": "books/1332.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തകർന്ന ഹൃദയങ്ങൾ",
    "name_en": "Takaർnna hrridaya~n~naൾ",
    "author": "കോവിലൻ",
    "stockNumber": 1333,
    "price": null,
    "image": "books/1333.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നോത്രദാമിലെ കൂനൻ",
    "name_en": "Notradaamilè koonaൻ",
    "author": "വിക്ടർ ഹ്യൂഗോ",
    "stockNumber": 1334,
    "price": null,
    "image": "books/1334.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജാപ്പനീസ് സെൻ കഥകൾ",
    "name_en": "Jaappanees sèൻ kathakaൾ",
    "author": "സലാം എലിക്കോട്ടിൽ",
    "stockNumber": 1335,
    "price": null,
    "image": "books/1335.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്വർണ ജാലകമുള്ള വീട്",
    "name_en": "Svaർna jaalakamulla veet",
    "author": "സുഭാഷ് ചന്ദ്രൻ",
    "stockNumber": 1336,
    "price": null,
    "image": "books/1336.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആകർഷകമായ വ്യക്‌തിത്വം രൂപപ്പെടുത്തുന്നത് എങ്ങനെ",
    "name_en": "Aakaർshakamaaya vyak‌titvam roopappètuttunnat è~n~nanè",
    "author": "മുരളീധരൻ",
    "stockNumber": 1337,
    "price": null,
    "image": "books/1337.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളത്തിലെ കോട്ടകൾ",
    "name_en": "Keralattilè kottakaൾ",
    "author": "സിപിഎഫ് വെങ്ങാട്",
    "stockNumber": 1338,
    "price": null,
    "image": "books/1338.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വൈദ്യുത വിസ്മയങ്ങൾ",
    "name_en": "Vaidyuta vismaya~n~naൾ",
    "author": "കെകെ വാസു",
    "stockNumber": 1339,
    "price": null,
    "image": "books/1339.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുല്ല നസ്രുദ്ധീൻ കഥകൾ",
    "name_en": "Mulla nasruddheeൻ kathakaൾ",
    "author": "സലാം എലിക്കോട്ടിൽ",
    "stockNumber": 1340,
    "price": null,
    "image": "books/1340.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജംഗിൾ ബുക്ക്",
    "name_en": "Jamgiൾ bukk",
    "author": "റൂഡിയൽസ് ക്ലിപ്പിംഗ്",
    "stockNumber": 1341,
    "price": null,
    "image": "books/1341.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സാഹസിക കഥകൾ ആൺകുട്ടികൾക്ക്",
    "name_en": "Saahasika kathakaൾ aaൺkuttikaൾkk",
    "author": "അനിത ജയനാഥ്",
    "stockNumber": 1342,
    "price": null,
    "image": "books/1342.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കർണൻ",
    "name_en": "Kaർnaൻ",
    "author": "പി.കുഞ്ഞിരാമൻ നായർ",
    "stockNumber": 1343,
    "price": null,
    "image": "books/1343.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പറുദീസ നഷ്ടപെട്ടവർ",
    "name_en": "Parudeesa nashtapèttavaർ",
    "author": "ജോയ് മുത്തോലി",
    "stockNumber": 1344,
    "price": null,
    "image": "books/1344.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രണ്ടു നഗരങ്ങളുടെ കഥ",
    "name_en": "Rantu nagara~n~nalutè katha",
    "author": "ചാൾസ് ഡിക്കൻസ്",
    "stockNumber": 1345,
    "price": null,
    "image": "books/1345.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലാറ്റിനമേരിക്ക പറഞ്ഞ കഥകൾ",
    "name_en": "Laarrinamerikka para~n~na kathakaൾ",
    "author": "അജിത്ത് നരിക്കുനി",
    "stockNumber": 1346,
    "price": null,
    "image": "books/1346.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രിയപ്പെട്ട ലിയോ",
    "name_en": "Priyappètta liyo",
    "author": "വേണു. വി.ദേശം",
    "stockNumber": 1347,
    "price": null,
    "image": "books/1347.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടനും കിട്ടനും",
    "name_en": "Kuttanum kittanum",
    "author": "ടോമി ജോസഫ്",
    "stockNumber": 1348,
    "price": null,
    "image": "books/1348.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ക്രിസ്മസ് കരോൾ",
    "name_en": "Krismas karoൾ",
    "author": "ചാൾസ് ഡിക്കൻസ്",
    "stockNumber": 1349,
    "price": null,
    "image": "books/1349.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ടോട്ടോചാൻ ജനാലയ്‌ക്കരികിലെ വികൃതിക്കുട്ടി",
    "name_en": "Tottochaaൻ janaalay‌kkarikilè vikrritikkutti",
    "author": "തെത്‌സുക്കോ കൊറോയനാഗി",
    "stockNumber": 1350,
    "price": null,
    "image": "books/1350.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റഷ്യൻ ക്ലാസിക് കഥകൾ",
    "name_en": "Rashyaൻ klaasik kathakaൾ",
    "author": "നിതന്ത് എൽ.രാജ്",
    "stockNumber": 1351,
    "price": null,
    "image": "books/1351.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടികളുടെ എം.ടി",
    "name_en": "Kuttikalutè èm.ti",
    "author": "അശോകൻ ഏങ്ങടിയത്ത്",
    "stockNumber": 1352,
    "price": null,
    "image": "books/1352.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കായംകുളം കൊച്ചുണ്ണി",
    "name_en": "Kaayamkulam kòchchunni",
    "author": "ഹുസൈൻ കാരട്ടി",
    "stockNumber": 1353,
    "price": null,
    "image": "books/1353.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹെലൻ കെല്ലർ ആത്മാവിൻ്റെ പൂമ്പാറ്റച്ചിറകുകൾ",
    "name_en": "Hèlaൻ kèllaർ aatmaaviൻrè poompaarrachchirakukaൾ",
    "author": "അനാമിക",
    "stockNumber": 1354,
    "price": null,
    "image": "books/1354.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബീർബൽ കഥകൾ",
    "name_en": "Beeർbaൽ kathakaൾ",
    "author": "പി. ശങ്കര നാരായണൻ",
    "stockNumber": 1355,
    "price": null,
    "image": "books/1355.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൗമാരക്കാർക്കു ഒരു വിജയമന്ത്രം",
    "name_en": "Kaൗmaarakkaaർkku òru vijayamantram",
    "author": "കെഎസ് ബാലകൃഷ്ണപ്പിള്ള",
    "stockNumber": 1356,
    "price": null,
    "image": "books/1356.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എ+ എങ്ങനെ നേടാം",
    "name_en": "È+ è~n~nanè netaam",
    "author": "മജീദ് മൂത്തേടത്ത്",
    "stockNumber": 1357,
    "price": null,
    "image": "books/1357.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലയാള നോവൽ രണ്ടായിരത്തിനു ശേഷം",
    "name_en": "Malayaala novaൽ rantaayirattinu shesham",
    "author": "കെ.കെ. ശിവദാസ്",
    "stockNumber": 1358,
    "price": null,
    "image": "books/1358.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജാതിക്കുമ്മി",
    "name_en": "Jaatikkummi",
    "author": "പണ്ഡിറ്റ് കറുപ്പൻ",
    "stockNumber": 1359,
    "price": null,
    "image": "books/1359.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഡ്രാക്കുള",
    "name_en": "Draakkula",
    "author": "ബ്രോം സ്റ്റോക്കർ",
    "stockNumber": 1360,
    "price": null,
    "image": "books/1360.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടികളെ കൂടുതൽ മിടുക്കരാക്കാം",
    "name_en": "Kuttikalè kootutaൽ mitukkaraakkaam",
    "author": "ഉണ്ണി അമ്മയമ്പലം",
    "stockNumber": 1361,
    "price": null,
    "image": "books/1361.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളത്തിലെ വന്യ ജീവികൾ",
    "name_en": "Keralattilè vanya jeevikaൾ",
    "author": "ഡോ. ടി.ആർ. ജയകുമാരി",
    "stockNumber": 1362,
    "price": null,
    "image": "books/1362.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പരിസ്ഥി ക്വിസ്",
    "name_en": "Paristhi kvis",
    "author": "പി. പ്രമോദ് കുമാർ",
    "stockNumber": 1363,
    "price": null,
    "image": "books/1363.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അബ്ദുൾ കലാം വചനങ്ങൾ",
    "name_en": "Abduൾ kalaam vachana~n~naൾ",
    "author": "സുരേഷ് എം.ജി",
    "stockNumber": 1364,
    "price": null,
    "image": "books/1364.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ടോമും രാജകുമാരനും",
    "name_en": "Tomum raajakumaaranum",
    "author": "മാർക്ക് ട്വിൽ",
    "stockNumber": 1365,
    "price": null,
    "image": "books/1365.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റെയിൽവേ കുട്ടികൾ",
    "name_en": "Rèyiൽve kuttikaൾ",
    "author": "ഈഡിത്ത് നെസ്ബിറ്റ്",
    "stockNumber": 1366,
    "price": null,
    "image": "books/1366.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നൈൽ ഡയറി",
    "name_en": "Naiൽ dayari",
    "author": "എസ്.കെ. പൊട്ടക്കാട്",
    "stockNumber": 1367,
    "price": null,
    "image": "books/1367.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സിംഹഭൂമി",
    "name_en": "Simhabhoomi",
    "author": "എസ്.കെ. പൊട്ടക്കാട്",
    "stockNumber": 1368,
    "price": null,
    "image": "books/1368.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സോവിയറ്റ് ഡയറി",
    "name_en": "Soviyarr dayari",
    "author": "എസ്.കെ. പൊട്ടക്കാട്",
    "stockNumber": 1369,
    "price": null,
    "image": "books/1369.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സഹനങ്ങളുടെ പാതയിൽ ഗോപുരം പോലെ",
    "name_en": "Sahana~n~nalutè paatayiൽ gopuram polè",
    "author": "കരിവെള്ളൂർ മുരളി",
    "stockNumber": 1370,
    "price": null,
    "image": "books/1370.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വോൾഗയിൽ മഞ്ഞു പെയ്യുമ്പോൾ",
    "name_en": "Voൾgayiൽ ma~n~nu pèyyumpoൾ",
    "author": "പുനത്തിൽ",
    "stockNumber": 1371,
    "price": null,
    "image": "books/1371.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബാസ്‌കർ വില്ലയിലെ വേട്ട നായ",
    "name_en": "Baas‌kaർ villayilè vetta naaya",
    "author": "സർ അൽതാർക്കോ ഷെൽനൻ ഡോയൽ",
    "stockNumber": 1372,
    "price": null,
    "image": "books/1372.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ പുരുഷൻ",
    "name_en": "Èൻrè purushaൻ",
    "author": "ഹണി ഭാസ്‌കരൻ",
    "stockNumber": 1373,
    "price": null,
    "image": "books/1373.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദക്ഷിണം",
    "name_en": "Dakshinam",
    "author": "സച്ചിതജൻ",
    "stockNumber": 1374,
    "price": null,
    "image": "books/1374.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചരിത്രമെഴുതി ചരിത്രമായവർ",
    "name_en": "Charitramèzhuti charitramaayavaർ",
    "author": "പന്ന്യൻ രവീന്ദ്രൻ",
    "stockNumber": 1375,
    "price": null,
    "image": "books/1375.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രസംഗ പരിശീലനം",
    "name_en": "Prasamga parisheelanam",
    "author": "റെജി. ടി.തോമസ്",
    "stockNumber": 1376,
    "price": null,
    "image": "books/1376.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലയാള സാഹിത്യത്തിൽ 30 സ്ത്രീ കഥാപത്രങ്ങൾ",
    "name_en": "Malayaala saahityattiൽ 30 stree kathaapatra~n~naൾ",
    "author": "കുഞ്ഞിക്കണ്ണൻ വാണിമേൽ",
    "stockNumber": 1377,
    "price": null,
    "image": "books/1377.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മേഘ ധ്വനി",
    "name_en": "Megha dhvani",
    "author": "സി.എൽ. ജോസഫ്",
    "stockNumber": 1378,
    "price": null,
    "image": "books/1378.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുളക്കോഴി",
    "name_en": "Kulakkozhi",
    "author": "പി. വത്സല",
    "stockNumber": 1379,
    "price": null,
    "image": "books/1379.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒറ്റ്",
    "name_en": "Òrr",
    "author": "പ്രദീപ് മണ്ടൂർ",
    "stockNumber": 1380,
    "price": null,
    "image": "books/1380.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നാഗമണ്ഡല",
    "name_en": "Naagamandala",
    "author": "ഗിരീഷ് കർണാർഡ്",
    "stockNumber": 1381,
    "price": null,
    "image": "books/1381.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബാല കവിതകൾ",
    "name_en": "Baala kavitakaൾ",
    "author": "ഉള്ളൂർ",
    "stockNumber": 1382,
    "price": null,
    "image": "books/1382.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുചേല വൃത്തം വഞ്ചിപ്പാട്ട്",
    "name_en": "Kuchela vrrittam va~nchippaatt",
    "author": "രാമപുരത്തു വാര്യർ",
    "stockNumber": 1383,
    "price": null,
    "image": "books/1383.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആംഗവീരൻ",
    "name_en": "Aamgaveeraൻ",
    "author": "യുറൂബ്",
    "stockNumber": 1384,
    "price": null,
    "image": "books/1384.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു ലക്ഷവും കാറും",
    "name_en": "Òru lakshavum kaarum",
    "author": "പി. കേശവദേവ്",
    "stockNumber": 1385,
    "price": null,
    "image": "books/1385.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒറ്റയടിപ്പാതകൾ",
    "name_en": "Òrrayatippaatakaൾ",
    "author": "സി. രാധാകൃഷ്ണൻ",
    "stockNumber": 1386,
    "price": null,
    "image": "books/1386.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അശോക",
    "name_en": "Ashoka",
    "author": "സാറാ ജോസഫ്",
    "stockNumber": 1387,
    "price": null,
    "image": "books/1387.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അപൂർവാനുരാഗത്തിൻ്റെ 26 ദിനങ്ങൾ",
    "name_en": "Apooർvaanuraagattiൻrè 26 dina~n~naൾ",
    "author": "അന്ന ദസ്തയേവ്‌സ്‌കി",
    "stockNumber": 1388,
    "price": null,
    "image": "books/1388.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹിരണ്യം",
    "name_en": "Hiranyam",
    "author": "ബാലചന്ദ്രൻ ചുള്ളിക്കാട്",
    "stockNumber": 1389,
    "price": null,
    "image": "books/1389.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സൂര്യനെ അണിഞ്ഞ ഒരു സ്ത്രീ",
    "name_en": "Sooryanè ani~n~na òru stree",
    "author": "കെ.ആർ. മീര",
    "stockNumber": 1390,
    "price": null,
    "image": "books/1390.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രതി പൂവൻ കോഴി",
    "name_en": "Prati poovaൻ kozhi",
    "author": "ഉണ്ണി. ആർ",
    "stockNumber": 1391,
    "price": null,
    "image": "books/1391.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മീശ",
    "name_en": "Meesha",
    "author": "എസ്. ഹരീഷ്",
    "stockNumber": 1392,
    "price": null,
    "image": "books/1392.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രണയ ജീവിതം",
    "name_en": "Pranaya jeevitam",
    "author": "വേണു. വി.ദേശം",
    "stockNumber": 1393,
    "price": null,
    "image": "books/1393.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തോറ്റ ചരിത്രം കേട്ടിട്ടില്ല",
    "name_en": "Torra charitram kettittilla",
    "author": "ജോർജ്ജ് പുളിക്കൽ",
    "stockNumber": 1394,
    "price": null,
    "image": "books/1394.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉപ്പ",
    "name_en": "Uppa",
    "author": "കുരീപ്പുഴ ശ്രീകുമാർ",
    "stockNumber": 1395,
    "price": null,
    "image": "books/1395.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "താജ്മഹൽ",
    "name_en": "Taajmahaൽ",
    "author": "ഒ.പി. സുരേഷ്",
    "stockNumber": 1396,
    "price": null,
    "image": "books/1396.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആസാധ്യതയിലെ സാദ്ധ്യത",
    "name_en": "Aasaadhyatayilè saaddhyata",
    "author": "എ.പി.ജെ.അബ്ദുൽകലാം",
    "stockNumber": 1397,
    "price": null,
    "image": "books/1397.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജ്വലിക്കുന്ന മനസ്സുകൾ",
    "name_en": "Jvalikkunna manassukaൾ",
    "author": "എ.പി.ജെ അബ്ദുൾ കലാം",
    "stockNumber": 1398,
    "price": null,
    "image": "books/1398.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടുവ",
    "name_en": "Katuva",
    "author": "പി.എസ്. റഫീഖ്",
    "stockNumber": 1399,
    "price": null,
    "image": "books/1399.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു ചരിത്ര കഥയിലെ നായാട്ടുകാരും കഥാപത്രങ്ങളും പങ്കെടുത്തവരും",
    "name_en": "Òru charitra kathayilè naayaattukaarum kathaapatra~n~nalum pa~nkètuttavarum",
    "author": "സന്തോഷ് ഏച്ചിക്കാനം",
    "stockNumber": 1400,
    "price": null,
    "image": "books/1400.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ ദിനങ്ങൽ",
    "name_en": "Èൻrè dina~n~naൽ",
    "author": "ആർ.കെ. നാരായണൻ",
    "stockNumber": 1401,
    "price": null,
    "image": "books/1401.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാളിദാസൻ്റെ മരണം",
    "name_en": "Kaalidaasaൻrè maranam",
    "author": "എം. നന്ദകുമാർ",
    "stockNumber": 1402,
    "price": null,
    "image": "books/1402.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബുദ്ധ",
    "name_en": "Buddha",
    "author": "ചന്ദ്ര ശേഖർ നാരായണൻ",
    "stockNumber": 1403,
    "price": null,
    "image": "books/1403.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പിറ",
    "name_en": "Pira",
    "author": "C.S. ചന്ദ്രിക",
    "stockNumber": 1404,
    "price": null,
    "image": "books/1404.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രുദ്ര പ്രയാഗിലെ നരഭോജി",
    "name_en": "Rudra prayaagilè narabhoji",
    "author": "ജിം കോർബറ്റ്",
    "stockNumber": 1405,
    "price": null,
    "image": "books/1405.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹൈസ്‌കൂൾ വിദ്യാർത്ഥികൾക്കുള്ള ഉപന്യാസങ്ങൾ",
    "name_en": "Hais‌kooൾ vidyaaർtthikaൾkkulla upanyaasa~n~naൾ",
    "author": "കെ.ജി. രാധാകൃഷ്ണൻ",
    "stockNumber": 1406,
    "price": null,
    "image": "books/1406.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉണ്ണി എക്സ്പ്രസ് ഡൽഹിന്നു മുത്തശ്ശി വീട്ടിലേക്ക്",
    "name_en": "Unni èkspras daൽhinnu muttashshi veettilekk",
    "author": "ഷാഹിന ഇ.കെ.",
    "stockNumber": 1407,
    "price": null,
    "image": "books/1407.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടങ്കവിതകളും കുട്ടിക്കവിതകളും",
    "name_en": "Kata~nkavitakalum kuttikkavitakalum",
    "author": "ചേപ്പാട് ഭാസ്‌കരൻ നായർ",
    "stockNumber": 1408,
    "price": null,
    "image": "books/1408.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചെറിയ കുട്ടിക്കവിതക്കൾ",
    "name_en": "Chèriya kuttikkavitakkaൾ",
    "author": "കുഞ്ഞുണ്ണി",
    "stockNumber": 1409,
    "price": null,
    "image": "books/1409.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുഞ്ഞിക്കൂനൻ",
    "name_en": "Ku~n~nikkoonaൻ",
    "author": "പി. നരേന്ദ്രനാഥ്",
    "stockNumber": 1410,
    "price": null,
    "image": "books/1410.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പൂമ്പാറ്റ",
    "name_en": "Poompaarra",
    "author": "ഷൈനി ടി.വി",
    "stockNumber": 1411,
    "price": null,
    "image": "books/1411.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പറന്നു പറന്ന് ചെക്കൂട്ടി പാവ",
    "name_en": "Parannu parann chèkkootti paava",
    "author": "വീരൻകുട്ടി",
    "stockNumber": 1412,
    "price": null,
    "image": "books/1412.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പശുവും പുലിയും",
    "name_en": "Pashuvum puliyum",
    "author": "സച്ചിതാനന്ദൻ",
    "stockNumber": 1413,
    "price": null,
    "image": "books/1413.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചെമ്മരിയാടിൻ്റെ സൂത്രം",
    "name_en": "Chèmmariyaatiൻrè sootram",
    "author": "അഷിത",
    "stockNumber": 1414,
    "price": null,
    "image": "books/1414.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൊറ്റിയും കുറുക്കനും",
    "name_en": "Kòrriyum kurukkanum",
    "author": "അഷിത",
    "stockNumber": 1415,
    "price": null,
    "image": "books/1415.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാലിഡോസ്കോപ്പ്",
    "name_en": "Kaalidoskopp",
    "author": "ഷഹാനാസ് എം.എ",
    "stockNumber": 1416,
    "price": null,
    "image": "books/1416.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പെണ്ണച്ചി",
    "name_en": "Pènnachchi",
    "author": "വള്ളിയോടൻ",
    "stockNumber": 1417,
    "price": null,
    "image": "books/1417.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബോഡി ബിൽഡിംഗ്",
    "name_en": "Bodi biൽdimg",
    "author": "ഡോ. കൃഷ്ണദാസ് ജെ",
    "stockNumber": 1418,
    "price": null,
    "image": "books/1418.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രഥമ ശുശ്രൂഷ",
    "name_en": "Prathama shushroosha",
    "author": "ഡോ. നളിനി ജനാർദനൻ",
    "stockNumber": 1419,
    "price": null,
    "image": "books/1419.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലോകപ്രശസ്തരുടെ മിനി കഥകൾ",
    "name_en": "Lokaprashastarutè mini kathakaൾ",
    "author": "വൈക്കം മുരളി",
    "stockNumber": 1420,
    "price": null,
    "image": "books/1420.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വാഴ കൃഷി - അറിയേണ്ടതെല്ലാം",
    "name_en": "Vaazha krrishi - ariyentatèllaam",
    "author": "സുരേഷ് മുതുകുളം",
    "stockNumber": 1421,
    "price": null,
    "image": "books/1421.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടികൾക്ക് കുറേ നാടൻ കളികൾ",
    "name_en": "Kuttikaൾkk kure naataൻ kalikaൾ",
    "author": "കാവാലം നാരായണൻകുട്ടി നായർ",
    "stockNumber": 1422,
    "price": null,
    "image": "books/1422.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഡ്രാക്കുള",
    "name_en": "Draakkula",
    "author": "ബ്രാം സ്റ്റോക്കർ",
    "stockNumber": 1423,
    "price": null,
    "image": "books/1423.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജീവിത ശൈലിയും വ്യക്തിത്വവും",
    "name_en": "Jeevita shailiyum vyaktitvavum",
    "author": "ഡോ. എസ്.ശാന്തകുമാർ",
    "stockNumber": 1424,
    "price": null,
    "image": "books/1424.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇസ്ലാമും സ്ത്രീകളും",
    "name_en": "Islaamum streekalum",
    "author": "ഫാത്തിമ മെർനീസി",
    "stockNumber": 1425,
    "price": null,
    "image": "books/1425.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഏകാധിപതികൾ അർഹിക്കുന്നത്ത്",
    "name_en": "Ekaadhipatikaൾ aർhikkunnatt",
    "author": "ബാർലിൻ കുഞ്ഞാനന്ദൻ നായർ",
    "stockNumber": 1426,
    "price": null,
    "image": "books/1426.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടിക്കൽക്ക് ഗൗതമ ബുദ്ധൻ്റെ ജീവചരിതം",
    "name_en": "Kuttikkaൽkk gaൗtama buddhaൻrè jeevacharitam",
    "author": "കൃഷ്ണൻ ചെലമ്പ്രം",
    "stockNumber": 1427,
    "price": null,
    "image": "books/1427.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടികളുടെ മദർ തെരേസ",
    "name_en": "Kuttikalutè madaർ tèresa",
    "author": "വീണാദേവി മീനാക്ഷി",
    "stockNumber": 1428,
    "price": null,
    "image": "books/1428.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടിക്കൽക്ക് സത്യജിത് റേയുടെ ജീവചരിത്രം",
    "name_en": "Kuttikkaൽkk satyajit reyutè jeevacharitram",
    "author": "അനിൽകുമാർ തിരുവോത്ത്",
    "stockNumber": 1429,
    "price": null,
    "image": "books/1429.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "25 രസതന്ത്ര പ്രതിഭകൾ",
    "name_en": "25 rasatantra pratibhakaൾ",
    "author": "ഗിഫു മേലാറ്റൂർ",
    "stockNumber": 1430,
    "price": null,
    "image": "books/1430.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശ്രീ നാരായണ ഗുരു - മൂന്നു വിചാരങ്ങൾ",
    "name_en": "Shree naaraayana guru - moonnu vichaara~n~naൾ",
    "author": "ഡോ. എം.കെ. മുനീർ",
    "stockNumber": 1431,
    "price": null,
    "image": "books/1431.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അമ്മ",
    "name_en": "Amma",
    "author": "മക്സിംഗോർക്കി",
    "stockNumber": 1432,
    "price": null,
    "image": "books/1432.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടിക്കാലം- വില്യം ഷേക്സ്പിയർ",
    "name_en": "Kuttikkaalam- vilyam shekspiyaർ",
    "author": "ഉണ്ണികൃഷ്ണൻ പുൽക്കൽ",
    "stockNumber": 1433,
    "price": null,
    "image": "books/1433.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കിണറു കൊണ്ടു പോകുന്ന പെൺകുട്ടികൾ",
    "name_en": "Kinaru kòntu pokunna pèൺkuttikaൾ",
    "author": "പവിത്രൻ തീക്കുരി",
    "stockNumber": 1434,
    "price": null,
    "image": "books/1434.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാൻസർ വരുന്ന വഴി",
    "name_en": "Kaaൻsaർ varunna vazhi",
    "author": "സുരേന്ദ്രൻ ചുനക്കര",
    "stockNumber": 1435,
    "price": null,
    "image": "books/1435.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൊമ്പനാനയും കട്ടുറുമ്പും",
    "name_en": "Kòmpanaanayum katturumpum",
    "author": "മുഹമ്മ രമണൻ",
    "stockNumber": 1436,
    "price": null,
    "image": "books/1436.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നാനോ ടെക്നോളജി",
    "name_en": "Naano tèknolaji",
    "author": "ഡോ. പി.കെ. സാബു",
    "stockNumber": 1437,
    "price": null,
    "image": "books/1437.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രാജാറാം മോഹൻ റോയ്",
    "name_en": "Raajaaraam mohaൻ roy",
    "author": "അനിൽ ജനാർദനൻ",
    "stockNumber": 1438,
    "price": null,
    "image": "books/1438.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലളിതം മലയാളം",
    "name_en": "Lalitam malayaalam",
    "author": "വട്ടപ്പറമ്പിൽ പീതാംബരൻ",
    "stockNumber": 1439,
    "price": null,
    "image": "books/1439.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇ.എം.എസ് ആത്മ കഥ",
    "name_en": "I.èm.ès aatma katha",
    "author": "ഇ.എം.എസ്",
    "stockNumber": 1440,
    "price": null,
    "image": "books/1440.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിർമ്മാല്യം",
    "name_en": "Niർmmaalyam",
    "author": "ഡോ. വി.മോഹനകൃഷ്ണൻ",
    "stockNumber": 1441,
    "price": null,
    "image": "books/1441.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉപ്പു സമരം",
    "name_en": "Uppu samaram",
    "author": "പയ്യന്നൂർ കുഞ്ഞിരാമൻ",
    "stockNumber": 1442,
    "price": null,
    "image": "books/1442.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രാഷ്ട്രം-രാഷ്ട്രീയം-രാഷ്ട്രസംവിധാനം",
    "name_en": "Raashtram-raashtreeyam-raashtrasamvidhaanam",
    "author": "ലെജു. പി. തോമസ് & ഡോ. ജോർജ്ജ് കെ. അലക്സ്",
    "stockNumber": 1443,
    "price": null,
    "image": "books/1443.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗണിതവും കമ്പ്യൂട്ടറും",
    "name_en": "Ganitavum kampyoottarum",
    "author": "പള്ളിയറ ശ്രീധരൻ",
    "stockNumber": 1444,
    "price": null,
    "image": "books/1444.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നമ്മുടെ പ്രപഞ്ചം",
    "name_en": "Nammutè prapa~ncham",
    "author": "ഡോ.എൻ ഷാജി",
    "stockNumber": 1445,
    "price": null,
    "image": "books/1445.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആപേക്ഷികതാ സിദ്ധാന്തം",
    "name_en": "Aapekshikataa siddhaantam",
    "author": "ഡോ.എം.എൻ. ശ്രീധരൻ നായർ",
    "stockNumber": 1446,
    "price": null,
    "image": "books/1446.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉത്സവ ചിന്ത്",
    "name_en": "Utsava chint",
    "author": "കെ.ടി. മാത്യു",
    "stockNumber": 1447,
    "price": null,
    "image": "books/1447.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നഗര സാകേതത്തിലെ ഉള്ളറകൾ",
    "name_en": "Nagara saaketattilè ullarakaൾ",
    "author": "സുധീഷ് മിന്നി",
    "stockNumber": 1448,
    "price": null,
    "image": "books/1448.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബട്ടൻസില്ലാത്ത ഷർട്ടും നിന്നുപോയ വാച്ചും",
    "name_en": "Battaൻsillaatta shaർttum ninnupoya vaachchum",
    "author": "ജോർജ് പുളിക്കൽ",
    "stockNumber": 1449,
    "price": null,
    "image": "books/1449.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പുന്നപ്ര വയലാർ നാടിൻ്റെ ഇതിഹാസം",
    "name_en": "Punnapra vayalaaർ naatiൻrè itihaasam",
    "author": "പി.വി. പങ്കജാക്ഷൻ",
    "stockNumber": 1450,
    "price": null,
    "image": "books/1450.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചുവന്ന മണ്ണും നടന്ന പാതകളും",
    "name_en": "Chuvanna mannum natanna paatakalum",
    "author": "പാലോളി മുഹമ്മദ് കുട്ടി",
    "stockNumber": 1451,
    "price": null,
    "image": "books/1451.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അമ്മിണിക്കോഴിയും കൂട്ടുകാരും",
    "name_en": "Amminikkozhiyum koottukaarum",
    "author": "അംബുജം കടമ്പൂർ",
    "stockNumber": 1452,
    "price": null,
    "image": "books/1452.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗണിതം വിസ്മയം",
    "name_en": "Ganitam vismayam",
    "author": "രമേശൻ വട്ട്യാര",
    "stockNumber": 1453,
    "price": null,
    "image": "books/1453.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചെറിയ(വലിയ) കണ്ടുപിടിത്തങ്ങൾ",
    "name_en": "Chèriya(valiya) kantupititta~n~naൾ",
    "author": "യഹ്യ ചൊർക്കല",
    "stockNumber": 1454,
    "price": null,
    "image": "books/1454.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജനാധിപത്യത്തിൻ്റെയും സാമൂഹിക നീതിയുടെയും സംരക്ഷണത്തിൽ",
    "name_en": "Janaadhipatyattiൻrèyum saamoohika neetiyutèyum samrakshanattiൽ",
    "author": "പി. കരുണാകരൻ",
    "stockNumber": 1455,
    "price": null,
    "image": "books/1455.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പഞ്ചകർമ്മ ചികിത്സ",
    "name_en": "Pa~nchakaർmma chikitsa",
    "author": "ഡോ. എസ്. നേശമണി, ഡോ. ലക്ഷ്മി. എ.എസ്",
    "stockNumber": 1456,
    "price": null,
    "image": "books/1456.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജന്തുശാസ്ത്രം ഒരു കൈപുസ്തകം",
    "name_en": "Jantushaastram òru kaipustakam",
    "author": "ബാലകൃഷ്ണൻ ചെറുപ്പ",
    "stockNumber": 1457,
    "price": null,
    "image": "books/1457.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എല്ലാവര്കും വ്യയാമം",
    "name_en": "Èllaavarkum vyayaamam",
    "author": "ഡോ. വി കെ ശ്രീകല",
    "stockNumber": 1458,
    "price": null,
    "image": "books/1458.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നക്ഷത്രങ്ങളുടെ ജാതകം",
    "name_en": "Nakshatra~n~nalutè jaatakam",
    "author": "സി. രാമചന്ദ്രൻ",
    "stockNumber": 1459,
    "price": null,
    "image": "books/1459.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശ്രീബുദ്ധൻ്റെയും പ്രകൃതിയുടെയും കഥകൾ",
    "name_en": "Shreebuddhaൻrèyum prakrritiyutèyum kathakaൾ",
    "author": "കെ.എസ്. രാമൻ",
    "stockNumber": 1460,
    "price": null,
    "image": "books/1460.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്വാമി വിവേകാനന്ദൻ",
    "name_en": "Svaami vivekaanandaൻ",
    "author": "പി.പി. സത്യൻ",
    "stockNumber": 1461,
    "price": null,
    "image": "books/1461.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "യുദ്ധവും സമാധാനവും",
    "name_en": "Yuddhavum samaadhaanavum",
    "author": "ലിയോ ടോൾസ്റ്റോയ്",
    "stockNumber": 1462,
    "price": null,
    "image": "books/1462.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടത്തനാട്ട് മാധവിയമ്മ",
    "name_en": "Katattanaatt maadhaviyamma",
    "author": "രാജൻ തിരുവോത്ത്",
    "stockNumber": 1463,
    "price": null,
    "image": "books/1463.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലോത്തിൻറ്റെ സന്തതി",
    "name_en": "Lottiൻrrè santati",
    "author": "എം. മഞ്ജു",
    "stockNumber": 1464,
    "price": null,
    "image": "books/1464.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടയുടെ കാറ്റിൽ",
    "name_en": "Katayutè kaarriൽ",
    "author": "ഇ.വി. ശ്രീധരൻ",
    "stockNumber": 1465,
    "price": null,
    "image": "books/1465.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എങ്ങനെ നല്ല കമ്മ്യൂണിസ്റ്റാകാം",
    "name_en": "È~n~nanè nalla kammyoonisrraakaam",
    "author": "ലൂ ഷാവ് ചി",
    "stockNumber": 1466,
    "price": null,
    "image": "books/1466.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഹാ ശാസ്ത്ര പ്രതിഭകൾ",
    "name_en": "Mahaa shaastra pratibhakaൾ",
    "author": "കെ.യുഷ",
    "stockNumber": 1467,
    "price": null,
    "image": "books/1467.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാൻ ഓഫ് ദ മാച്ച്",
    "name_en": "Maaൻ oph da maachch",
    "author": "സജിനി .എസ്",
    "stockNumber": 1468,
    "price": null,
    "image": "books/1468.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിലാപ വൃക്ഷത്തിലെ കാറ്റ്",
    "name_en": "Vilaapa vrrikshattilè kaarr",
    "author": "സതീഷ് ബാബു പയ്യന്നൂർ",
    "stockNumber": 1469,
    "price": null,
    "image": "books/1469.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അനുഭൂതികളുടെ ചരിത്ര ജീവിതം",
    "name_en": "Anubhootikalutè charitra jeevitam",
    "author": "സുനിൽ .പി ഇളയിടം",
    "stockNumber": 1470,
    "price": null,
    "image": "books/1470.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലമുകളിലെ അപ്പൂപ്പൻ",
    "name_en": "Malamukalilè appooppaൻ",
    "author": "ബി.എം. സുഹാര",
    "stockNumber": 1471,
    "price": null,
    "image": "books/1471.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അർദ്ധ നാരി",
    "name_en": "Aർddha naari",
    "author": "പെരുമാൾ മുരുകൻ",
    "stockNumber": 1472,
    "price": null,
    "image": "books/1472.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അറിവിൻ്റെ നുറുങ്ങുകൾ",
    "name_en": "Ariviൻrè nuru~n~nukaൾ",
    "author": "അനിൽ ജനാർദനൻ",
    "stockNumber": 1473,
    "price": null,
    "image": "books/1473.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സാമൂഹ്യ നീതിയും വികാസവും",
    "name_en": "Saamoohya neetiyum vikaasavum",
    "author": "പ്രൊഫ. കെ എൻ ഗംഗാധരൻ",
    "stockNumber": 1474,
    "price": null,
    "image": "books/1474.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചന്ദ്രനും ചന്ദ്രയാനും",
    "name_en": "Chandranum chandrayaanum",
    "author": "സി. രാമചന്ദ്രൻ",
    "stockNumber": 1475,
    "price": null,
    "image": "books/1475.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്ത്യൻ ബാലകഥകൾ",
    "name_en": "Intyaൻ baalakathakaൾ",
    "author": "പ്രൊഫ. എസ് ശിവദാസ്",
    "stockNumber": 1476,
    "price": null,
    "image": "books/1476.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സാരമേയം",
    "name_en": "Saarameyam",
    "author": "മാടമ്പു കുഞ്ഞുകുട്ടൻ",
    "stockNumber": 1477,
    "price": null,
    "image": "books/1477.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സൂക്ഷ്മ ജീവികളുടെ ലോകം",
    "name_en": "Sookshma jeevikalutè lokam",
    "author": "ഡോ. ടി.ആർ. ജയകുമാരി",
    "stockNumber": 1478,
    "price": null,
    "image": "books/1478.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അപ്പൂവിൻറെ അത്ഭുത ലോകം",
    "name_en": "Appooviൻrè atbhuta lokam",
    "author": "ഡോ. വി വി കുഞ്ഞികൃഷ്ണൻ",
    "stockNumber": 1479,
    "price": null,
    "image": "books/1479.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അവകാശ സംരക്ഷണം",
    "name_en": "Avakaasha samrakshanam",
    "author": "അഡ്വ. എം.യൂനുസ് കുഞ്ഞ്",
    "stockNumber": 1480,
    "price": null,
    "image": "books/1480.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പഞ്ചായത്ത് രാജ് കുട്ടിക്കൾക്ക്",
    "name_en": "Pa~nchaayatt raaj kuttikkaൾkk",
    "author": "എ. സുഹൃദ് കുമാർ",
    "stockNumber": 1481,
    "price": null,
    "image": "books/1481.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളീയ സ്ത്രീ നവോത്ഥാന ചരിത്രം",
    "name_en": "Keraleeya stree navotthaana charitram",
    "author": "ഡോ. എസ്.ശ്രീകുമാരി",
    "stockNumber": 1482,
    "price": null,
    "image": "books/1482.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഹാപ്രളയവും നന്മയുടെ പെട്ടകവും",
    "name_en": "Mahaapralayavum nanmayutè pèttakavum",
    "author": "പി.വി.കെ. പനയാൽ",
    "stockNumber": 1483,
    "price": null,
    "image": "books/1483.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അടുക്കള",
    "name_en": "Atukkala",
    "author": "പി.വി.കെ. പനയാൽ",
    "stockNumber": 1484,
    "price": null,
    "image": "books/1484.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കെ.എൻ. പണിക്കർ ചരിത്രമെന്ന പോർക്കളം",
    "name_en": "Kè.èൻ. panikkaർ charitramènna poർkkalam",
    "author": "പി.ജെ. വിൻസെൻ്റ്",
    "stockNumber": 1485,
    "price": null,
    "image": "books/1485.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എടലംകുടി പ്രണയ രേഖകൾ",
    "name_en": "Ètalamkuti pranaya rekhakaൾ",
    "author": "കെ വി മോഹൻ കുമാർ",
    "stockNumber": 1486,
    "price": null,
    "image": "books/1486.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്റ്റീഫൻ ഹോക്കിൻസ് നക്ഷത്ര ജീവിതം",
    "name_en": "Srreephaൻ hokkiൻs nakshatra jeevitam",
    "author": "സത്യൻ കല്ലുരുട്ടി",
    "stockNumber": 1487,
    "price": null,
    "image": "books/1487.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളത്തിലെ നാടൻ കലകൾ",
    "name_en": "Keralattilè naataൻ kalakaൾ",
    "author": "ഡോ. ശശിധരൻ പ്ലാരി",
    "stockNumber": 1488,
    "price": null,
    "image": "books/1488.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗറില്ലാ യുദ്ധം",
    "name_en": "Garillaa yuddham",
    "author": "ജി. ബാലമോഹൻ തമ്പി",
    "stockNumber": 1489,
    "price": null,
    "image": "books/1489.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗൗരി ലങ്കേഷ് ജീവിതം പോരാട്ടം രക്തസാക്ഷിത്വം",
    "name_en": "Gaൗri la~nkesh jeevitam poraattam raktasaakshitvam",
    "author": "കെ.ആർ. കിഷോർ",
    "stockNumber": 1490,
    "price": null,
    "image": "books/1490.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗാന്ധിയും മാർക്‌സും",
    "name_en": "Gaandhiyum maaർk‌sum",
    "author": "ടി.എ. രാജശേഖരൻ",
    "stockNumber": 1491,
    "price": null,
    "image": "books/1491.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടൽ അത്ഭുത ലോകം",
    "name_en": "Kataൽ atbhuta lokam",
    "author": "ഡോ. കെ.വി. തോമസ്",
    "stockNumber": 1492,
    "price": null,
    "image": "books/1492.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അലീസിൻ്റെ അത്ഭുത ലോകം",
    "name_en": "Aleesiൻrè atbhuta lokam",
    "author": "ഡോ. ബി. ഐ.കെ.ബാൽ",
    "stockNumber": 1493,
    "price": null,
    "image": "books/1493.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സംഘർഷങ്ങളുടേ രാഷ്ട്രീയം",
    "name_en": "Samghaർsha~n~nalute raashtreeyam",
    "author": "പി. ജയരാജൻ",
    "stockNumber": 1494,
    "price": null,
    "image": "books/1494.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളത്തിലെ കമ്മ്യൂണിസ്റ്റ് പാർട്ടി ചരിത്രം ഭാഗം 3",
    "name_en": "Keralattilè kammyoonisrr paaർtti charitram bhaagam 3",
    "author": null,
    "stockNumber": 1495,
    "price": null,
    "image": "books/1495.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളത്തിലെ കമ്മ്യൂണിസ്റ്റ് പാർട്ടി ചരിത്രം ഭാഗം 2",
    "name_en": "Keralattilè kammyoonisrr paaർtti charitram bhaagam 2",
    "author": null,
    "stockNumber": 1496,
    "price": null,
    "image": "books/1496.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളത്തിലെ കമ്മ്യൂണിസ്റ്റ് പാർട്ടി ചരിത്രം ഭാഗം 1",
    "name_en": "Keralattilè kammyoonisrr paaർtti charitram bhaagam 1",
    "author": null,
    "stockNumber": 1497,
    "price": null,
    "image": "books/1497.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചെഗുവേര",
    "name_en": "Chèguvera",
    "author": "രാജൻ തുവാര",
    "stockNumber": 1498,
    "price": null,
    "image": "books/1498.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വി.ആർ. കൃഷ്ണ അയ്യർ നീതിയുടെ പോരാളി",
    "name_en": "Vi.aaർ. krrishna ayyaർ neetiyutè poraali",
    "author": "രവി കുറ്റിക്കാട്",
    "stockNumber": 1499,
    "price": null,
    "image": "books/1499.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വൽനക്ഷത്രങ്ങളുടെ മായിക ലോകം",
    "name_en": "Vaൽnakshatra~n~nalutè maayika lokam",
    "author": "പി.എം. സിദ്ധാർത്ഥൻ",
    "stockNumber": 1500,
    "price": null,
    "image": "books/1500.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗോപാലും പരമാനന്ദും",
    "name_en": "Gopaalum paramaanandum",
    "author": null,
    "stockNumber": 1501,
    "price": null,
    "image": "books/1501.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പഞ്ചതന്ത്ര കഥകൾ",
    "name_en": "Pa~nchatantra kathakaൾ",
    "author": "ഷാനവാസ് കോനാരത്ത്",
    "stockNumber": 1502,
    "price": null,
    "image": "books/1502.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്കൂൾ ലീഡർ",
    "name_en": "Skooൾ leedaർ",
    "author": "ഹരീഷ് നമ്പൂതിരിപ്പാട്",
    "stockNumber": 1503,
    "price": null,
    "image": "books/1503.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹയ്യോ മീശ",
    "name_en": "Hayyo meesha",
    "author": "ബൈജു സി.പി., അബ്ദുൾ വാഹിദ്",
    "stockNumber": 1504,
    "price": null,
    "image": "books/1504.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൂട്ട്",
    "name_en": "Koott",
    "author": "സുനിൽ പെഴുങ്കാട്ട്, അജേഷ്",
    "stockNumber": 1505,
    "price": null,
    "image": "books/1505.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉള്ളഴങ്ങളിൽ കാ ത്തുവച്ചത്",
    "name_en": "Ullazha~n~naliൽ kaa ttuvachchat",
    "author": "ഹരിഫ ഹൈദർ",
    "stockNumber": 1506,
    "price": null,
    "image": "books/1506.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കത്തിതീരാതെ ഒരാത്മാവ്",
    "name_en": "Kattiteeraatè òraatmaav",
    "author": "മുംതാസ് മുഹമ്മദ്",
    "stockNumber": 1507,
    "price": null,
    "image": "books/1507.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പൂച്ച കുറിഞ്ഞ്യാര്",
    "name_en": "Poochcha kuri~n~nyaar",
    "author": "മാടമ്പു കുഞ്ഞുകുട്ടൻ",
    "stockNumber": 1508,
    "price": null,
    "image": "books/1508.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചന്ദ്രമതി മുതൽ അശ്വതി വരെ",
    "name_en": "Chandramati mutaൽ ashvati varè",
    "author": "ഡോ. എം.രാജീവ് കുമാർ",
    "stockNumber": 1509,
    "price": null,
    "image": "books/1509.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനുഷ്യമൃഗം",
    "name_en": "Manushyamrrigam",
    "author": "ഗോകുലം ഗോപാലകൃഷ്ണൻ",
    "stockNumber": 1510,
    "price": null,
    "image": "books/1510.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സൈക്യാട്രി വാർഡ്",
    "name_en": "Saikyaatri vaaർd",
    "author": "പ്രസന്ന കുമാർ. കെ",
    "stockNumber": 1511,
    "price": null,
    "image": "books/1511.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രാധാറാണി",
    "name_en": "Raadhaaraani",
    "author": "JI. ശങ്കരക്കുറുപ്പ്",
    "stockNumber": 1512,
    "price": null,
    "image": "books/1512.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചലച്ചിത്ര ജാലകം",
    "name_en": "Chalachchitra jaalakam",
    "author": "എ.എൻ. അജി കുമാർ",
    "stockNumber": 1513,
    "price": null,
    "image": "books/1513.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുമാരനാശൻ്റെ തിരഞ്ഞെടുത ലേഖനങ്ങൾ",
    "name_en": "Kumaaranaashaൻrè tira~n~nètuta lekhana~n~naൾ",
    "author": "കുമാരനാശാൻ",
    "stockNumber": 1514,
    "price": null,
    "image": "books/1514.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഫോട്ടോ",
    "name_en": "Photto",
    "author": "സതീഷ് ബാബു പയ്യന്നൂർ",
    "stockNumber": 1515,
    "price": null,
    "image": "books/1515.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബർസാതി",
    "name_en": "Baർsaati",
    "author": "കാക്കനാടൻ",
    "stockNumber": 1516,
    "price": null,
    "image": "books/1516.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തിരഞ്ഞെടുത്ത കഥകൾ",
    "name_en": "Tira~n~nètutta kathakaൾ",
    "author": "വെള്ളിയോടൻ",
    "stockNumber": 1517,
    "price": null,
    "image": "books/1517.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്നേഹമീ യാത്ര",
    "name_en": "Snehamee yaatra",
    "author": "സുകുമാരൻ വെങ്ങാട്ട്",
    "stockNumber": 1518,
    "price": null,
    "image": "books/1518.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അക്ഷര ക്ഷരം",
    "name_en": "Akshara ksharam",
    "author": "എം. കമലാസനൻ",
    "stockNumber": 1519,
    "price": null,
    "image": "books/1519.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രവാസ കൂടാരം",
    "name_en": "Pravaasa kootaaram",
    "author": "കെ.എസ്. പുരം രത്നാകരൻ",
    "stockNumber": 1520,
    "price": null,
    "image": "books/1520.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചോട്ട പീങ്ക",
    "name_en": "Chotta pee~nka",
    "author": "എം. കമലാസനൻ",
    "stockNumber": 1521,
    "price": null,
    "image": "books/1521.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മോഹസൗധം പണിയുന്നവർ",
    "name_en": "Mohasaൗdham paniyunnavaർ",
    "author": "സുകുമാരൻ വെങ്ങാട്ട്",
    "stockNumber": 1522,
    "price": null,
    "image": "books/1522.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഋതുപുഷ്പങ്ങൾ തേടി",
    "name_en": "Rritupushpa~n~naൾ teti",
    "author": "എം.എൻ. രഘു നന്ദനൻ",
    "stockNumber": 1523,
    "price": null,
    "image": "books/1523.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മായക്കറിയാം ജിന്നുകളാണ് മരുപ്പച്ചകൾ സൃഷ്ട്ടിച്ചതെന്നു",
    "name_en": "Maayakkariyaam jinnukalaan maruppachchakaൾ srrishttichchatènnu",
    "author": "ജോസ് ആൻ്റണി കുരിപ്പുഴ",
    "stockNumber": 1524,
    "price": null,
    "image": "books/1524.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രതിമയെ സ്നേഹിച്ചവൾ",
    "name_en": "Pratimayè snehichchavaൾ",
    "author": "ലീന വർഗീസ്",
    "stockNumber": 1525,
    "price": null,
    "image": "books/1525.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അജന്തയിലെ സുന്ദരി",
    "name_en": "Ajantayilè sundari",
    "author": "ഷീജ മുരളി",
    "stockNumber": 1526,
    "price": null,
    "image": "books/1526.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അഗ്നി പർവ്വതങ്ങൾ പുകയുന്നുണ്ടു",
    "name_en": "Agni paർvvata~n~naൾ pukayunnuntu",
    "author": "പി.വി.കെ. പനയാൽ",
    "stockNumber": 1527,
    "price": null,
    "image": "books/1527.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കണ്ണിൽ വിളക്കുള്ള മുനിമരങ്ങൾ",
    "name_en": "Kanniൽ vilakkulla munimara~n~naൾ",
    "author": "ഏഴച്ചേരി രാമചന്ദ്രൻ",
    "stockNumber": 1528,
    "price": null,
    "image": "books/1528.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നരകങ്ങലുടെ ഉപമ",
    "name_en": "Naraka~n~nalutè upama",
    "author": "ഇ. സന്തോഷ് കുമാർ",
    "stockNumber": 1529,
    "price": null,
    "image": "books/1529.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആസിഡ് ഫയിംസ്",
    "name_en": "Aasid phayims",
    "author": "ബാലൻ വേങ്ങര",
    "stockNumber": 1530,
    "price": null,
    "image": "books/1530.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നോബൽ കഥകൾ",
    "name_en": "Nobaൽ kathakaൾ",
    "author": "എ.വി. കുഞ്ഞാലു",
    "stockNumber": 1531,
    "price": null,
    "image": "books/1531.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കരൂർ- ഭൃത്യ വാത്സല്യവും മറ്റു കഥകളും",
    "name_en": "Karooർ- bhrritya vaatsalyavum marru kathakalum",
    "author": "കരൂർ",
    "stockNumber": 1532,
    "price": null,
    "image": "books/1532.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉറക്കം തൂങ്ങി മരങ്ങളുടെ നഗരം",
    "name_en": "Urakkam too~n~ni mara~n~nalutè nagaram",
    "author": "ജെക്കോബ് എബ്രഹാം",
    "stockNumber": 1533,
    "price": null,
    "image": "books/1533.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഞാൻ ഒരു ഭാഷയാണു",
    "name_en": "~naaൻ òru bhaashayaanu",
    "author": "കെ. സച്ചിദാനന്ദൻ",
    "stockNumber": 1534,
    "price": null,
    "image": "books/1534.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എല്ലാവർക്കും പണിയാണ്",
    "name_en": "Èllaavaർkkum paniyaan",
    "author": "അഷ്ടമൂർത്തി",
    "stockNumber": 1535,
    "price": null,
    "image": "books/1535.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അ വിശ്വാസികളുടെ ദൈവങ്ങൾ",
    "name_en": "A vishvaasikalutè daiva~n~naൾ",
    "author": "ഡോ. വി.വി. ഹരിദാസ്",
    "stockNumber": 1536,
    "price": null,
    "image": "books/1536.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചരിത്രത്തിൻ്റെ ആഴങ്ങളിൽ മാർക്കോപോളോ",
    "name_en": "Charitrattiൻrè aazha~n~naliൽ maaർkkopolo",
    "author": "ഡോ. ഫെർഡിനൻസ്",
    "stockNumber": 1537,
    "price": null,
    "image": "books/1537.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബഷീർ മലയാളത്തിൻ്റെ മഹാസുകൃതം",
    "name_en": "Basheeർ malayaalattiൻrè mahaasukrritam",
    "author": "എം. ചന്ദ്രപ്രകാശ്",
    "stockNumber": 1538,
    "price": null,
    "image": "books/1538.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭൂമിക്ക് വേണ്ടി ഒരു സ്കൂൾ കുട്ടിയുടെ പോരാട്ടം",
    "name_en": "Bhoomikk venti òru skooൾ kuttiyutè poraattam",
    "author": "ഡോ. ഫെർഡിനൻസ്",
    "stockNumber": 1539,
    "price": null,
    "image": "books/1539.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഓസിലെ മഹാമാന്ത്രികൻ",
    "name_en": "Osilè mahaamaantrikaൻ",
    "author": "ഡോ. അനിൽ കുമാർ",
    "stockNumber": 1540,
    "price": null,
    "image": "books/1540.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അണയാത്ത ദീപം",
    "name_en": "Anayaatta deepam",
    "author": "ഡോ. എം.ലീലാവതി",
    "stockNumber": 1541,
    "price": null,
    "image": "books/1541.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഞ്ഞു തുള്ളി",
    "name_en": "Ma~n~nu tulli",
    "author": "തിക്കോടിയൻ",
    "stockNumber": 1542,
    "price": null,
    "image": "books/1542.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇരപിടിയൻ കുന്നും കുറെ ശിക്കാരികളും",
    "name_en": "Irapitiyaൻ kunnum kurè shikkaarikalum",
    "author": "പി.വി. വിനോദ് കുമാർ",
    "stockNumber": 1543,
    "price": null,
    "image": "books/1543.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചതുരംഗം",
    "name_en": "Chaturamgam",
    "author": "രവീന്ദ്ര നാധ ടാഗോർ",
    "stockNumber": 1544,
    "price": null,
    "image": "books/1544.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജ്ഞാനപീഠത്തിലെ സ്ത്രീപർവ്വം",
    "name_en": "J~naanapeethattilè streepaർvvam",
    "author": "ഡോ. ARSU",
    "stockNumber": 1545,
    "price": null,
    "image": "books/1545.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തന്റേടം",
    "name_en": "Tanretam",
    "author": "ഡോ. സുനിത ടി.വി",
    "stockNumber": 1546,
    "price": null,
    "image": "books/1546.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അശ്വതി മുതൽ രേവതി വരെ",
    "name_en": "Ashvati mutaൽ revati varè",
    "author": "എൻ. നളിനി",
    "stockNumber": 1547,
    "price": null,
    "image": "books/1547.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭരണഘടനയെ അറിയാൻ",
    "name_en": "Bharanaghatanayè ariyaaൻ",
    "author": "ഡോ. എ, സുഹൃത് കുമാർ",
    "stockNumber": 1548,
    "price": null,
    "image": "books/1548.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വയലാറിൻ്റെ സർഗ നാനിധ്യം",
    "name_en": "Vayalaariൻrè saർga naanidhyam",
    "author": "പ്രൊഫ. വി.സുന്ദരേശൻ",
    "stockNumber": 1549,
    "price": null,
    "image": "books/1549.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗാന്ധിയും ഗാന്ധിസവും",
    "name_en": "Gaandhiyum gaandhisavum",
    "author": "ഇ.എം.എസ്",
    "stockNumber": 1550,
    "price": null,
    "image": "books/1550.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അവസാനമില്ലത യാത്രകൾ",
    "name_en": "Avasaanamillata yaatrakaൾ",
    "author": "മാനസി",
    "stockNumber": 1551,
    "price": null,
    "image": "books/1551.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അഷിതയുട് കത്തുകൽ",
    "name_en": "Ashitayut kattukaൽ",
    "author": "അഷിത",
    "stockNumber": 1552,
    "price": null,
    "image": "books/1552.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അടുക്കളയിൽ നിന്ന് അഡർക്കളത്തിലേക്ക് ആര്യ",
    "name_en": "Atukkalayiൽ ninn adaർkkalattilekk aarya",
    "author": "ഡോ. സുനിത ടി.വി",
    "stockNumber": 1553,
    "price": null,
    "image": "books/1553.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കങ്കണം",
    "name_en": "Ka~nkanam",
    "author": "പെരുമാൾ മുരുകൻ",
    "stockNumber": 1554,
    "price": null,
    "image": "books/1554.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എല്ലാവരും ഇന്ത്യക്കാർ പക്ഷേ കുടിയേറ്റക്കാർ",
    "name_en": "Èllaavarum intyakkaaർ pakshe kutiyerrakkaaർ",
    "author": "എം.എ. ഷിനാസ്",
    "stockNumber": 1555,
    "price": null,
    "image": "books/1555.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളത്തിൻ്റെ നവോത്ഥാന നായകർ",
    "name_en": "Keralattiൻrè navotthaana naayakaർ",
    "author": "ഡോ. പി.എഫ്. ഗോപകുമാർ",
    "stockNumber": 1556,
    "price": null,
    "image": "books/1556.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തീക്കടൽ കടഞ്ഞു തിരുമധുരം",
    "name_en": "Teekkataൽ kata~n~nu tirumadhuram",
    "author": "ഡോ. സി.രാധാകൃഷ്ണൻ",
    "stockNumber": 1557,
    "price": null,
    "image": "books/1557.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രതിഭാ റായിയുടെ തിരഞ്ഞെടുത കഥകൾ",
    "name_en": "Pratibhaa raayiyutè tira~n~nètuta kathakaൾ",
    "author": "ഡോ. ARSU",
    "stockNumber": 1558,
    "price": null,
    "image": "books/1558.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആറ്റുപോകാത്ത ഓർമ്മകൾ",
    "name_en": "Aarrupokaatta oർmmakaൾ",
    "author": "പ്രൊഫ. ടി.ജെ. ജോസഫ്",
    "stockNumber": 1559,
    "price": null,
    "image": "books/1559.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പരിസ്ഥി ദർശനം",
    "name_en": "Paristhi daർshanam",
    "author": "കെ.കെ.എസ്.ദാസ്",
    "stockNumber": 1560,
    "price": null,
    "image": "books/1560.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കോളനിയാനന്ദരപ്പാടം",
    "name_en": "Kolaniyaanandarappaatam",
    "author": "പി. പവിത്രൻ",
    "stockNumber": 1561,
    "price": null,
    "image": "books/1561.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലൈബ്രേറിയൻ",
    "name_en": "Laibreriyaൻ",
    "author": "സി.വി. ബാലകൃഷ്ണൻ",
    "stockNumber": 1562,
    "price": null,
    "image": "books/1562.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു ദേശം നുണ പറയുന്നു",
    "name_en": "Òru desham nuna parayunnu",
    "author": "എ. ശാന്ത കുമാർ",
    "stockNumber": 1563,
    "price": null,
    "image": "books/1563.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലയാളത്തിൻ്റെ സുവർണ കഥകൾ",
    "name_en": "Malayaalattiൻrè suvaർna kathakaൾ",
    "author": "ടി. പത്മനാഭൻ",
    "stockNumber": 1564,
    "price": null,
    "image": "books/1564.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാഡം മാറി ക്യൂറി രണ്ടാം പതിപ്പ്",
    "name_en": "Maadam maari kyoori rantaam patipp",
    "author": "പി.എം. സിദ്ധാർത്ഥൻ",
    "stockNumber": 1565,
    "price": null,
    "image": "books/1565.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജാഗ്രത",
    "name_en": "Jaagrata",
    "author": "സുഗതകുമാരി",
    "stockNumber": 1566,
    "price": null,
    "image": "books/1566.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മറവിയിൽ മറഞ്ഞതു മനുഷ്യൻ",
    "name_en": "Maraviyiൽ mara~n~natu manushyaൻ",
    "author": "അശോകൻ ചരുവിൽ",
    "stockNumber": 1567,
    "price": null,
    "image": "books/1567.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരള നവോത്ഥാനം- മാതാചാര്യൻ- മതനിഷേധികൾ",
    "name_en": "Kerala navotthaanam- maataachaaryaൻ- matanishedhikaൾ",
    "author": "പി. ഗോവിന്ദപ്പിള്ള",
    "stockNumber": 1568,
    "price": null,
    "image": "books/1568.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അറിയപ്പെടാത്ത അനന്തപുരി",
    "name_en": "Ariyappètaatta anantapuri",
    "author": "ഡോ. എ ജി ശശിഭൂഷൻ",
    "stockNumber": 1569,
    "price": null,
    "image": "books/1569.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രപഞ്ചം കണ്ണാടി നോക്കുമ്പോൾ",
    "name_en": "Prapa~ncham kannaati nokkumpoൾ",
    "author": "സാബു ജോസ്",
    "stockNumber": 1570,
    "price": null,
    "image": "books/1570.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സാറാ ജോസഫ് ബുധിനി",
    "name_en": "Saaraa josaph budhini",
    "author": "സാറാ ജോസഫ്",
    "stockNumber": 1571,
    "price": null,
    "image": "books/1571.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലയാളത്തിൻ്റെ പ്രിയ കവിതകൾ",
    "name_en": "Malayaalattiൻrè priya kavitakaൾ",
    "author": "അക്കിത്തം",
    "stockNumber": 1572,
    "price": null,
    "image": "books/1572.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബോട്ടപകടം- രവീന്ദ്രനാഥ ടാഗോർ",
    "name_en": "Bottapakatam- raveendranaatha taagoർ",
    "author": "കെ.ആർ. മീര",
    "stockNumber": 1573,
    "price": null,
    "image": "books/1573.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മൃത്യുഞ്ജയം കാവ്യജീവിതം",
    "name_en": "Mrrityu~njayam kaavyajeevitam",
    "author": "എം.കെ. സാനു",
    "stockNumber": 1574,
    "price": null,
    "image": "books/1574.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കർമ്മ ഭൂമി",
    "name_en": "Kaർmma bhoomi",
    "author": "പ്രേം ചന്ദ്",
    "stockNumber": 1575,
    "price": null,
    "image": "books/1575.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മീരയും മറ്റു കഥകളും",
    "name_en": "Meerayum marru kathakalum",
    "author": "ആനന്ദ്",
    "stockNumber": 1576,
    "price": null,
    "image": "books/1576.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രണ്ടു മത്സ്യങ്ങൾ",
    "name_en": "Rantu matsya~n~naൾ",
    "author": "അംബികാ സുതൻ",
    "stockNumber": 1577,
    "price": null,
    "image": "books/1577.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചരിത്രം ഉണ്ടകുന്നത്ത്",
    "name_en": "Charitram untakunnatt",
    "author": "കെ.എൻ. ഗണേഷ്",
    "stockNumber": 1578,
    "price": null,
    "image": "books/1578.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേദാർ ഗൗള",
    "name_en": "Kedaaർ gaൗla",
    "author": "കെ.ആർ. അജയൻ",
    "stockNumber": 1579,
    "price": null,
    "image": "books/1579.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രതിഭയുടെ വേരുകൾ തേടി",
    "name_en": "Pratibhayutè verukaൾ teti",
    "author": "എം.പി. വീരേന്ദ്രകുമാർ",
    "stockNumber": 1580,
    "price": null,
    "image": "books/1580.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒളിവിലെ ഓർമ്മകൾ",
    "name_en": "Òlivilè oർmmakaൾ",
    "author": "തിയോപ്പിൽ ഭാസി",
    "stockNumber": 1581,
    "price": null,
    "image": "books/1581.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മരിച്ചവരുടെ പനിനീർ പൂക്കൽ",
    "name_en": "Marichchavarutè panineeർ pookkaൽ",
    "author": "പി.കെ. പാറക്കടവ്",
    "stockNumber": 1582,
    "price": null,
    "image": "books/1582.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദൈവത്തിൻ്റെ മക്കൾ",
    "name_en": "Daivattiൻrè makkaൾ",
    "author": "വിജയരാജ മല്ലിക",
    "stockNumber": 1583,
    "price": null,
    "image": "books/1583.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബോട്ടപകടം",
    "name_en": "Bottapakatam",
    "author": "കെ.ആർ. മല്ലിക",
    "stockNumber": 1584,
    "price": null,
    "image": "books/1584.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചിന്താവിഷ്ടായ സീത",
    "name_en": "Chintaavishtaaya seeta",
    "author": "കുമാരനാശൻ",
    "stockNumber": 1585,
    "price": null,
    "image": "books/1585.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആരണ്യഗീതം",
    "name_en": "Aaranyageetam",
    "author": "പെരുമ്പടവം ശ്രീധരൻ",
    "stockNumber": 1586,
    "price": null,
    "image": "books/1586.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പറക്കുന്ന സുന്ദരികൾ",
    "name_en": "Parakkunna sundarikaൾ",
    "author": "അമ്പിക സുതൻ മാങ്ങാട്",
    "stockNumber": 1587,
    "price": null,
    "image": "books/1587.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "യു.എ. ഖാദർ കഥകൾ",
    "name_en": "Yu.è. khaadaർ kathakaൾ",
    "author": "യു.എ. ഖാദർ",
    "stockNumber": 1588,
    "price": null,
    "image": "books/1588.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരള നവോത്ഥാനം-യുഗ സന്തതികൾ - യുഗ ശിൽപികൾ",
    "name_en": "Kerala navotthaanam-yuga santatikaൾ - yuga shiൽpikaൾ",
    "author": "പി. ഗോവിന്ദപ്പിള്ള",
    "stockNumber": 1589,
    "price": null,
    "image": "books/1589.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചന്ദ്രസ്പർശം",
    "name_en": "Chandraspaർsham",
    "author": "ഹരിദാസ് കരിവെള്ളൂർ",
    "stockNumber": 1590,
    "price": null,
    "image": "books/1590.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പത്മനാഭൻ്റെ വഴിയിൽ",
    "name_en": "Patmanaabhaൻrè vazhiyiൽ",
    "author": "പയ്യന്നൂർ കുഞ്ഞിരാമൻ",
    "stockNumber": 1591,
    "price": null,
    "image": "books/1591.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉത്സവ ചിന്ത്",
    "name_en": "Utsava chint",
    "author": "കെ.ടി. മാത്യു",
    "stockNumber": 1592,
    "price": null,
    "image": "books/1592.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സസ്യ ലോകത്തിലെ കൗതുകങ്ങൾ",
    "name_en": "Sasya lokattilè kaൗtuka~n~naൾ",
    "author": "ഡോ. ഷീജ കുമാരി",
    "stockNumber": 1593,
    "price": null,
    "image": "books/1593.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിചിത്രം വിസ്മയം",
    "name_en": "Vichitram vismayam",
    "author": "നാരായണൻ കാവുമ്പായി",
    "stockNumber": 1594,
    "price": null,
    "image": "books/1594.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശ്രീ ബുദ്ധൻ്റെയും പ്രകൃതിയുടെയും കഥകൾ",
    "name_en": "Shree buddhaൻrèyum prakrritiyutèyum kathakaൾ",
    "author": "കെ.എസ്.രാമൻ",
    "stockNumber": 1595,
    "price": null,
    "image": "books/1595.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പരിസ്ഥി പ്രകൃതി ശാസ്ത്രം കുട്ടികൾക്കും മുതിർന്നവർക്കും",
    "name_en": "Paristhi prakrriti shaastram kuttikaൾkkum mutiർnnavaർkkum",
    "author": null,
    "stockNumber": 1596,
    "price": null,
    "image": "books/1596.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രണയവും രോഗവും",
    "name_en": "Pranayavum rogavum",
    "author": "ഡോ. വേണു തൊണ്ടയ്ക്കൽ",
    "stockNumber": 1597,
    "price": null,
    "image": "books/1597.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാർക്‌സിസത്തിൻ്റെ ഇസ്‌ലാം വയന",
    "name_en": "Maaർk‌sisattiൻrè is‌laam vayana",
    "author": "ഡോ. ഹുസൈൻ രണ്ടത്താണി",
    "stockNumber": 1598,
    "price": null,
    "image": "books/1598.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പാർട്ടിയും ബഹുജന സംഘടനകളും",
    "name_en": "Paaർttiyum bahujana samghatanakalum",
    "author": "ചിന്താ പ്രസിദ്ധീകരണങ്ങൾ",
    "stockNumber": 1599,
    "price": null,
    "image": "books/1599.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിയമം- നിയമത്തിൻ്റെ വഴികൾ",
    "name_en": "Niyamam- niyamattiൻrè vazhikaൾ",
    "author": "ഡോ. സെബാസ്റ്റ്യൻ പോൾ",
    "stockNumber": 1600,
    "price": null,
    "image": "books/1600.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മതം - മതഭ്രാന്ത്- മതേതരത്വം",
    "name_en": "Matam - matabhraant- matetaratvam",
    "author": "ഡോ. കെ ടി ജലീൽ",
    "stockNumber": 1601,
    "price": null,
    "image": "books/1601.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തദ്ദേശ ഭരണ തിരഞ്ഞെടുപ്പ് നിയമങ്ങളും, ചട്ടങ്ങളും",
    "name_en": "Taddesha bharana tira~n~nètupp niyama~n~nalum, chatta~n~nalum",
    "author": "ഡോ. സുഹൃത് കുമാർ",
    "stockNumber": 1602,
    "price": null,
    "image": "books/1602.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ ജീവിത കഥ",
    "name_en": "Èൻrè jeevita katha",
    "author": "എ.കെ. ഗോപാലൻ",
    "stockNumber": 1603,
    "price": null,
    "image": "books/1603.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രതിഭകൾ",
    "name_en": "Pratibhakaൾ",
    "author": "ഇ.കെ. നായനാർ",
    "stockNumber": 1604,
    "price": null,
    "image": "books/1604.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആൻമേരിയുടെ ചായക്കൂട്ടുകൾ",
    "name_en": "Aaൻmeriyutè chaayakkoottukaൾ",
    "author": "ഷൈന",
    "stockNumber": 1605,
    "price": null,
    "image": "books/1605.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തേനും വയമ്പും",
    "name_en": "Tenum vayampum",
    "author": "പ്രസന്ന രാജൻ",
    "stockNumber": 1606,
    "price": null,
    "image": "books/1606.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റോസാപ്പൂക്കളുടെ യുദ്ധം",
    "name_en": "Rosaappookkalutè yuddham",
    "author": "ഹക്കിം ചോലയിൽ",
    "stockNumber": 1607,
    "price": null,
    "image": "books/1607.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വേലവൂർ വഴി വെഞ്ഞാറമ്മൂട്",
    "name_en": "Velavooർ vazhi vè~n~naarammoot",
    "author": "പ്രതാപൻ",
    "stockNumber": 1608,
    "price": null,
    "image": "books/1608.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നേരിൻ്റേയും നിറവിൻ്റെയും കഥകൾ",
    "name_en": "Neriൻreyum niraviൻrèyum kathakaൾ",
    "author": "കെ.എസ്. രാമൻ",
    "stockNumber": 1609,
    "price": null,
    "image": "books/1609.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടികളുടെ അറബിക്കഥകൾ",
    "name_en": "Kuttikalutè arabikkathakaൾ",
    "author": "ബി.എം. സുഹാര",
    "stockNumber": 1610,
    "price": null,
    "image": "books/1610.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തച്ചോളി ഒതേനൻ",
    "name_en": "Tachcholi òtenaൻ",
    "author": "പന്ന്യന്നൂർ ഭാസി",
    "stockNumber": 1611,
    "price": null,
    "image": "books/1611.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പോക്കുവെയിൽ മണ്ണിലെഴുതിയത്ത്",
    "name_en": "Pokkuvèyiൽ mannilèzhutiyatt",
    "author": "ഒ.എൻ.വി.",
    "stockNumber": 1612,
    "price": null,
    "image": "books/1612.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനുഷ്യ യന്ത്രം",
    "name_en": "Manushya yantram",
    "author": "ഉണ്ണികൃഷ്ണൻ കീഴുത്താനി",
    "stockNumber": 1613,
    "price": null,
    "image": "books/1613.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വരൂ നമുക്കൽപം നടക്കം",
    "name_en": "Varoo namukkaൽpam natakkam",
    "author": "ടി.കെ. ബാജി",
    "stockNumber": 1614,
    "price": null,
    "image": "books/1614.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാമ്പഴം",
    "name_en": "Maampazham",
    "author": "മണിയൻ കക്കാട്",
    "stockNumber": 1615,
    "price": null,
    "image": "books/1615.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൈയ്യൊപ്പ്",
    "name_en": "Kaiyyòpp",
    "author": "പി.ശ്രീജ",
    "stockNumber": 1616,
    "price": null,
    "image": "books/1616.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഖുർ-ആൻ-ക്വിസ്",
    "name_en": "Khuർ-aaൻ-kvis",
    "author": "മുത്തലിബ്- കണ്ണൂർ",
    "stockNumber": 1617,
    "price": null,
    "image": "books/1617.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശ്രീഷ്മകാല പറവകൾ",
    "name_en": "Shreeshmakaala paravakaൾ",
    "author": "എം.വി. കരുണൻ മാസ്റ്റർ",
    "stockNumber": 1618,
    "price": null,
    "image": "books/1618.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മധു മൊഴികൾ",
    "name_en": "Madhu mòzhikaൾ",
    "author": "ജെ.കെ. പിള്ള",
    "stockNumber": 1619,
    "price": null,
    "image": "books/1619.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഹാത്മജിയുടെ ആശയ ലോകം",
    "name_en": "Mahaatmajiyutè aashaya lokam",
    "author": "ഡോ.അർസു",
    "stockNumber": 1620,
    "price": null,
    "image": "books/1620.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആയുരാരോഗ്യ സൗഖ്യം",
    "name_en": "Aayuraarogya saൗkhyam",
    "author": "എം.പി. APPU",
    "stockNumber": 1621,
    "price": null,
    "image": "books/1621.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "antonym synonym finder",
    "name_en": "Antonym synonym finder",
    "author": "ടി.ടി.തോമസ്",
    "stockNumber": 1622,
    "price": null,
    "image": "books/1622.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അകലെയല്ല ഐഎഎസ്",
    "name_en": "Akalèyalla aièès",
    "author": "നവാസ് മൂന്നാം കൈ",
    "stockNumber": 1623,
    "price": null,
    "image": "books/1623.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹിന്ദി സ്വയം പഠിക്കാം",
    "name_en": "Hindi svayam pathikkaam",
    "author": "വി. ബാലകൃഷ്ണൻ",
    "stockNumber": 1624,
    "price": null,
    "image": "books/1624.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വെള്ളാരൻ കല്ലുകൾ",
    "name_en": "Vèllaaraൻ kallukaൾ",
    "author": "പി.ടി. മുരളി മനോഹർ",
    "stockNumber": 1625,
    "price": null,
    "image": "books/1625.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭൗതിക ശാസ്ത്ര ക്വിസ്",
    "name_en": "Bhaൗtika shaastra kvis",
    "author": "ഗ്രീഷ്യസ് ബെഞ്ചമിൻ",
    "stockNumber": 1626,
    "price": null,
    "image": "books/1626.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജന്തുശാസ്ത്ര ക്വിസ്",
    "name_en": "Jantushaastra kvis",
    "author": "ഗ്രീസിയസ് ബെഞ്ചമിൻ",
    "stockNumber": 1627,
    "price": null,
    "image": "books/1627.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുഞ്ഞിപ്പാട്ടുകൾ",
    "name_en": "Ku~n~nippaattukaൾ",
    "author": "സത്യൻ കല്ലുരുട്ടി",
    "stockNumber": 1628,
    "price": null,
    "image": "books/1628.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ന്യൂറോ ഏരിയ",
    "name_en": "Nyooro eriya",
    "author": "ശിവൻ എടമന",
    "stockNumber": 1629,
    "price": null,
    "image": "books/1629.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വണ്ടർ ലസ്റ്റ്",
    "name_en": "Vantaർ lasrr",
    "author": "ചന്ദ്രമതി",
    "stockNumber": 1630,
    "price": null,
    "image": "books/1630.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നീരാളിയാൻ",
    "name_en": "Neeraaliyaaൻ",
    "author": "അമ്പിക സുതൻ മാങ്ങാട്",
    "stockNumber": 1631,
    "price": null,
    "image": "books/1631.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തൽപം",
    "name_en": "Taൽpam",
    "author": "സുഭാഷ് ചന്ദ്രൻ",
    "stockNumber": 1632,
    "price": null,
    "image": "books/1632.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രണ്ടു മത്സ്യങ്ങൾ",
    "name_en": "Rantu matsya~n~naൾ",
    "author": "അമ്പിക സുതൻ മാങ്ങാട്",
    "stockNumber": 1633,
    "price": null,
    "image": "books/1633.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റെ വഴി എൻ്റെ ശാരി",
    "name_en": "Èൻrè vazhi èൻrè shaari",
    "author": "രഘുറാം ജി.രാജൻ",
    "stockNumber": 1634,
    "price": null,
    "image": "books/1634.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചിരിക്കുന്ന മരപ്പാവ",
    "name_en": "Chirikkunna marappaava",
    "author": "ബഷീർ",
    "stockNumber": 1635,
    "price": null,
    "image": "books/1635.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പുളിനെല്ലി സ്റ്റേഷൻ",
    "name_en": "Pulinèlli srreshaൻ",
    "author": "അശോകൻ ചരുവിൽ",
    "stockNumber": 1636,
    "price": null,
    "image": "books/1636.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സർവ്വ മനുഷ്യരുടെയും രക്ഷയ്ക്ക് വേണ്ടിയുള്ള കൃപ",
    "name_en": "Saർvva manushyarutèyum rakshaykk ventiyulla krripa",
    "author": "ജിസ ജോസ്",
    "stockNumber": 1637,
    "price": null,
    "image": "books/1637.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തന്നതാൻ നഷ്ടപ്പെടും പിന്നെന്താണ് കണ്ടത്തിയും",
    "name_en": "Tannataaൻ nashtappètum pinnèntaan kantattiyum",
    "author": "സി.വി. ബാലകൃഷ്ണൻ",
    "stockNumber": 1638,
    "price": null,
    "image": "books/1638.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിങ്ങൾക്കും ജയിക്കം സിവിൽ സർവീസ്",
    "name_en": "Ni~n~naൾkkum jayikkam siviൽ saർvees",
    "author": null,
    "stockNumber": 1639,
    "price": null,
    "image": "books/1639.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉമ്മമാർക്കു വേണ്ടി ഒരു സങ്കടഹർജി",
    "name_en": "Ummamaaർkku venti òru sa~nkatahaർji",
    "author": "എം.എൻ കാരശ്ശേരി",
    "stockNumber": 1640,
    "price": null,
    "image": "books/1640.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രവാചകരുടെ രണ്ടാം പുസ്തകം",
    "name_en": "Pravaachakarutè rantaam pustakam",
    "author": "ബെന്യാമിൻ",
    "stockNumber": 1641,
    "price": null,
    "image": "books/1641.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുന്നോളമുണ്ടല്ലോ ഭൂതകാല കുളിർ",
    "name_en": "Kunnolamuntallo bhootakaala kuliർ",
    "author": "ദീപ നിശാന്ത്",
    "stockNumber": 1642,
    "price": null,
    "image": "books/1642.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നനഞ്ഞു തീർത്ഥ മഴകൾ",
    "name_en": "Nana~n~nu teeർttha mazhakaൾ",
    "author": "ദീപ നിശാന്ത്",
    "stockNumber": 1643,
    "price": null,
    "image": "books/1643.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഖബർ",
    "name_en": "Khabaർ",
    "author": "കെ ആർ മീര",
    "stockNumber": 1644,
    "price": null,
    "image": "books/1644.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗുഡ്‌ബൈ മലബാർ",
    "name_en": "Gud‌bai malabaaർ",
    "author": "കെ.ജെ. ബേബി",
    "stockNumber": 1645,
    "price": null,
    "image": "books/1645.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉപ്പ",
    "name_en": "Uppa",
    "author": "കീരിപ്പുഴശ്രീകുമാർ",
    "stockNumber": 1646,
    "price": null,
    "image": "books/1646.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഹാചരിതമാല",
    "name_en": "Mahaacharitamaala",
    "author": "രവീന്ദ്ര നാഥ ടാഗോർ",
    "stockNumber": 1647,
    "price": null,
    "image": "books/1647.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പടിഞ്ഞാറെ കൊല്ലം ചോരക്കാലം",
    "name_en": "Pati~n~naarè kòllam chorakkaalam",
    "author": "ജി.ആർ. ഇന്ദുഗോപൻ",
    "stockNumber": 1648,
    "price": null,
    "image": "books/1648.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വയലാർ കൃതികൾ",
    "name_en": "Vayalaaർ krritikaൾ",
    "author": "വയലാർ",
    "stockNumber": 1649,
    "price": null,
    "image": "books/1649.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉതുപ്പാന്റെ കിണർ",
    "name_en": "Utuppaanrè kinaർ",
    "author": "കരൂർ",
    "stockNumber": 1650,
    "price": null,
    "image": "books/1650.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹോർത്തൂസുകളുടെ ചോമി",
    "name_en": "Hoർttoosukalutè chomi",
    "author": "ഗഫൂർ അറയ്ക്കൽ",
    "stockNumber": 1651,
    "price": null,
    "image": "books/1651.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മണ്ടൻ ഇവാൻ",
    "name_en": "Mantaൻ ivaaൻ",
    "author": "പ്രൊഫ. സി.ചന്ദ്രമതി",
    "stockNumber": 1652,
    "price": null,
    "image": "books/1652.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒറ്റച്ചിലമ്പ്",
    "name_en": "Òrrachchilamp",
    "author": "ഡോ. കെ.ശ്രീകുമാർ",
    "stockNumber": 1653,
    "price": null,
    "image": "books/1653.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗ്രീൻ ഗെബിൽസിലെ ൽ ആൻ",
    "name_en": "Greeൻ gèbiൽsilè ൽ aaൻ",
    "author": "ലൈല സെൻ",
    "stockNumber": 1654,
    "price": null,
    "image": "books/1654.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സലിം അലി ഇന്ത്യൻ പക്ഷി ശാസ്ത്രത്തിൻ്റെ പിതാവ്",
    "name_en": "Salim ali intyaൻ pakshi shaastrattiൻrè pitaav",
    "author": "സി. റഹീം",
    "stockNumber": 1655,
    "price": null,
    "image": "books/1655.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭൂമിയിൽ നടക്കുന്നു",
    "name_en": "Bhoomiyiൽ natakkunnu",
    "author": "എസ്.ആർ. ലാൽ",
    "stockNumber": 1656,
    "price": null,
    "image": "books/1656.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചിന്ന മുണ്ടി",
    "name_en": "Chinna munti",
    "author": "അംബികാ സുതൻ",
    "stockNumber": 1657,
    "price": null,
    "image": "books/1657.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൊമല",
    "name_en": "Kòmala",
    "author": "സന്തോഷ് ഏച്ചിക്കാനം",
    "stockNumber": 1658,
    "price": null,
    "image": "books/1658.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കനലെരിയും കാലം",
    "name_en": "Kanalèriyum kaalam",
    "author": "കൂത്തട്ടുകുളം മേരി",
    "stockNumber": 1659,
    "price": null,
    "image": "books/1659.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉമ്മക്കുട്ടിയുടെ കുഞ്ഞി കിനാവുകൾ",
    "name_en": "Ummakkuttiyutè ku~n~ni kinaavukaൾ",
    "author": "ബി.എം. സുഹാര",
    "stockNumber": 1660,
    "price": null,
    "image": "books/1660.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലയാളത്തിൻ്റെ സുവർണ കഥകൾ",
    "name_en": "Malayaalattiൻrè suvaർna kathakaൾ",
    "author": "മാധവിക്കുട്ടി",
    "stockNumber": 1661,
    "price": null,
    "image": "books/1661.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഞാൻ ഹിഡിംബി",
    "name_en": "~naaൻ hidimbi",
    "author": "മിനി എം.ബി",
    "stockNumber": 1662,
    "price": null,
    "image": "books/1662.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഫെമിനിസം ചരിത്രപരമായ ഒരന്വേഷണം",
    "name_en": "Phèminisam charitraparamaaya òranveshanam",
    "author": "ഡോ. എം.ലീലാവതി",
    "stockNumber": 1663,
    "price": null,
    "image": "books/1663.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പരിസ്ഥി എഴുത്തിയ ജീവിതം",
    "name_en": "Paristhi èzhuttiya jeevitam",
    "author": "രാജൻ തുവര",
    "stockNumber": 1664,
    "price": null,
    "image": "books/1664.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചന്ദന സോപ്പ്",
    "name_en": "Chandana sopp",
    "author": "പി.കെ. ശ്രീനിവാസൻ",
    "stockNumber": 1665,
    "price": null,
    "image": "books/1665.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എസ്തർ",
    "name_en": "Èstaർ",
    "author": "സാറ ജോസഫ്",
    "stockNumber": 1666,
    "price": null,
    "image": "books/1666.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആൻഡമാനും ആഫ്രിക്കയും",
    "name_en": "Aaൻdamaanum aaphrikkayum",
    "author": "ബൈജു എൻ.നായർ",
    "stockNumber": 1667,
    "price": null,
    "image": "books/1667.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരള നവോത്ഥാനവും യുക്തി ചിന്തയും",
    "name_en": "Kerala navotthaanavum yukti chintayum",
    "author": "ഇ.ഡി. ഡേവിസ്",
    "stockNumber": 1668,
    "price": null,
    "image": "books/1668.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചങ്ങമ്പുഴ കൃഷ്ണപിള്ള - നക്ഷത്രങ്ങളുടെ സ്നേഹഭജനം",
    "name_en": "Cha~n~nampuzha krrishnapilla - nakshatra~n~nalutè snehabhajanam",
    "author": "എം.കെ.സാനു",
    "stockNumber": 1669,
    "price": null,
    "image": "books/1669.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഖനിജം",
    "name_en": "Khanijam",
    "author": "പി.വി.കെ. പനയാൽ",
    "stockNumber": 1670,
    "price": null,
    "image": "books/1670.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഓസോൺ മുതൽ തമോഗർത്തം വരെ",
    "name_en": "Osoൺ mutaൽ tamogaർttam varè",
    "author": "ഡോ. സംഗീത ചേനമ്പുളി",
    "stockNumber": 1671,
    "price": null,
    "image": "books/1671.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പെരുകൾ പെരുമറ്റങ്ങൾ",
    "name_en": "Pèrukaൾ pèrumarra~n~naൾ",
    "author": "ഇ പി രാജഗോപാലൻ",
    "stockNumber": 1672,
    "price": null,
    "image": "books/1672.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജൈവനീതി ദർശനം പി കവിതകൾ",
    "name_en": "Jaivaneeti daർshanam pi kavitakaൾ",
    "author": "ഡോ. വിപിപി മുസ്തഫ",
    "stockNumber": 1673,
    "price": null,
    "image": "books/1673.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രാമനും വാൽമീകിയും ഞാനും",
    "name_en": "Raamanum vaaൽmeekiyum ~naanum",
    "author": "കെ വി മോഹൻകുമാർ",
    "stockNumber": 1674,
    "price": null,
    "image": "books/1674.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചരിത്രത്തിനൊപ്പം നടന്ന ഒരാൾ",
    "name_en": "Charitrattinòppam natanna òraaൾ",
    "author": "അനിൽ കുമാർ എ.വി.",
    "stockNumber": 1675,
    "price": null,
    "image": "books/1675.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലബാർ കലാപം - ചരിത്രം രാഷ്ട്രീയം പ്രത്യയ ശാസ്ത്രം",
    "name_en": "Malabaaർ kalaapam - charitram raashtreeyam pratyaya shaastram",
    "author": "രാധാകൃഷ്ണൻ ചെറുവള്ളി",
    "stockNumber": 1676,
    "price": null,
    "image": "books/1676.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പാട്ടു പ്രസ്ഥാനം",
    "name_en": "Paattu prasthaanam",
    "author": "എ പി ശശിധരൻ",
    "stockNumber": 1677,
    "price": null,
    "image": "books/1677.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉപന്യാസ രചന",
    "name_en": "Upanyaasa rachana",
    "author": "കെ വിദ്യാധരൻ",
    "stockNumber": 1678,
    "price": null,
    "image": "books/1678.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വായനവഴിയിലെ മലയാള മുന്നേറ്റം",
    "name_en": "Vaayanavazhiyilè malayaala munnerram",
    "author": "ഷാജി വലിയാട്ടിൽ",
    "stockNumber": 1679,
    "price": null,
    "image": "books/1679.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭൂമിയിൽ നടക്കുന്നു",
    "name_en": "Bhoomiyiൽ natakkunnu",
    "author": "എസ്ആർ ലാൽ",
    "stockNumber": 1680,
    "price": null,
    "image": "books/1680.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പക്ഷിയുടെ മണം",
    "name_en": "Pakshiyutè manam",
    "author": "ബാലകൃഷ്ണൻ",
    "stockNumber": 1681,
    "price": null,
    "image": "books/1681.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നമുക്കൊരു സിനിമാ നിർമ്മാണം",
    "name_en": "Namukkòru sinimaa niർmmaanam",
    "author": "അനിൽ കുമാർ തിരുവോത്ത്",
    "stockNumber": 1682,
    "price": null,
    "image": "books/1682.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗതാഗതം അറിയേണ്ടതെല്ലാം",
    "name_en": "Gataagatam ariyentatèllaam",
    "author": "ഗിഫു മേലാറ്റൂർ",
    "stockNumber": 1683,
    "price": null,
    "image": "books/1683.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദൈവമേ കൈ തൊഴം",
    "name_en": "Daivame kai tòzham",
    "author": "പന്തളം കേരള വർമ്മ",
    "stockNumber": 1684,
    "price": null,
    "image": "books/1684.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുലീസത്ത്",
    "name_en": "Muleesatt",
    "author": "ശരത് മണ്ണൂർ",
    "stockNumber": 1685,
    "price": null,
    "image": "books/1685.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എംടി യുടെ തെരഞ്ഞെടുത്ത കഥകൾ",
    "name_en": "Èmti yutè tèra~n~nètutta kathakaൾ",
    "author": "എംടി വാസുദേവൻ നായർ",
    "stockNumber": 1686,
    "price": null,
    "image": "books/1686.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അലകൾ",
    "name_en": "Alakaൾ",
    "author": "ബാലചന്ദ്രൻ ചുള്ളിക്കാട്",
    "stockNumber": 1687,
    "price": null,
    "image": "books/1687.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചെറുംബ് അംഗം ദേശം",
    "name_en": "Chèrumb amgam desham",
    "author": "ടി പി രാമചന്ദ്രൻ",
    "stockNumber": 1688,
    "price": null,
    "image": "books/1688.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആവേ മറിയ",
    "name_en": "Aave mariya",
    "author": "കെ ആർ മീര",
    "stockNumber": 1689,
    "price": null,
    "image": "books/1689.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു കുരുവിയുടെ പതനം",
    "name_en": "Òru kuruviyutè patanam",
    "author": "സലിം അലി കെ വി പ്രസന്ന കുമാർ",
    "stockNumber": 1690,
    "price": null,
    "image": "books/1690.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തട്ടകം",
    "name_en": "Tattakam",
    "author": "കോവിലൻ",
    "stockNumber": 1691,
    "price": null,
    "image": "books/1691.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിഹിതം",
    "name_en": "Vihitam",
    "author": "സുഭാഷ് ചന്ദ്രൻ",
    "stockNumber": 1692,
    "price": null,
    "image": "books/1692.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അന്ദർവാഹിനി",
    "name_en": "Andaർvaahini",
    "author": "SK പൊട്ടക്കാട്",
    "stockNumber": 1693,
    "price": null,
    "image": "books/1693.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നാടൻ പ്രേമം",
    "name_en": "Naataൻ premam",
    "author": "SK പൊട്ടക്കാട്",
    "stockNumber": 1694,
    "price": null,
    "image": "books/1694.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഏഴിലം പാല",
    "name_en": "Ezhilam paala",
    "author": "എസ്കെ പൊട്ടക്കാട്",
    "stockNumber": 1695,
    "price": null,
    "image": "books/1695.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എൻ്റ്റെ മൂന്നാമത്തേ നോവൽ",
    "name_en": "Èൻrrè moonnaamatte novaൽ",
    "author": "ടി പത്മനാഭൻ",
    "stockNumber": 1696,
    "price": null,
    "image": "books/1696.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇവിടെ എല്ലാവർക്കും സുഖം തന്നെ",
    "name_en": "Ivitè èllaavaർkkum sukham tannè",
    "author": "സി രാധാകൃഷ്ണൻ",
    "stockNumber": 1697,
    "price": null,
    "image": "books/1697.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിവാഹവും കുടുംബ ആലോചനയും",
    "name_en": "Vivaahavum kutumba aalochanayum",
    "author": "മുരളീധരൻ മുല്ലമറ്റം",
    "stockNumber": 1698,
    "price": null,
    "image": "books/1698.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എസ്തർ",
    "name_en": "Èstaർ",
    "author": "സാറ ജോസഫ്",
    "stockNumber": 1699,
    "price": null,
    "image": "books/1699.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കവണ",
    "name_en": "Kavana",
    "author": "സന്തോഷ് എച്ചിക്കാനം",
    "stockNumber": 1700,
    "price": null,
    "image": "books/1700.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആത്മകഥ",
    "name_en": "Aatmakatha",
    "author": "കെആർ ഗൗരിയമ്മ",
    "stockNumber": 1701,
    "price": null,
    "image": "books/1701.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്കോട്ടിഷ് ദിനരാത്രങ്ങൾ",
    "name_en": "Skottish dinaraatra~n~naൾ",
    "author": "സി വി ബാലകൃഷ്ണൻ",
    "stockNumber": 1702,
    "price": null,
    "image": "books/1702.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജനാഫ്രസ് ഒരു കൊടിയ കാമുകൻ",
    "name_en": "Janaaphras òru kòtiya kaamukaൻ",
    "author": "ഇന്ദുമേനോൻ",
    "stockNumber": 1703,
    "price": null,
    "image": "books/1703.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സൂഫി കവിതകൾ ബുള്ളേഷ",
    "name_en": "Soophi kavitakaൾ bullesha",
    "author": "സച്ചിതാനന്ദൻ",
    "stockNumber": 1704,
    "price": null,
    "image": "books/1704.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മണ്ണിര",
    "name_en": "Mannira",
    "author": "താഹ മടായി",
    "stockNumber": 1705,
    "price": null,
    "image": "books/1705.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കപ്പിത്താന്റെ ഭാര്യ",
    "name_en": "Kappittaanrè bhaarya",
    "author": "വിപിൻ ചന്ദ്രൻ",
    "stockNumber": 1706,
    "price": null,
    "image": "books/1706.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആത്യന്തിക നീതി",
    "name_en": "Aatyantika neeti",
    "author": "അജിത് ഗംഗാധരൻ",
    "stockNumber": 1707,
    "price": null,
    "image": "books/1707.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബഷീർ സമ്പൂർണ കൃതികൾ രണ്ടു വല്യങ്ങൾ",
    "name_en": "Basheeർ sampooർna krritikaൾ rantu valya~n~naൾ",
    "author": "വൈക്കം മുഹമ്മദ് ബഷീർ",
    "stockNumber": 1708,
    "price": null,
    "image": "books/1708.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാൽവരിയിലേക്ക് വീണ്ടും",
    "name_en": "Kaaൽvariyilekk veentum",
    "author": "പെരുമ്പടവം",
    "stockNumber": 1709,
    "price": null,
    "image": "books/1709.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു ചിത്രകഥയിലെ നായാട്ടുകാരും കഥാപത്രങ്ങളും പങ്കെടുത്തവരും",
    "name_en": "Òru chitrakathayilè naayaattukaarum kathaapatra~n~nalum pa~nkètuttavarum",
    "author": "സന്തോഷ് ഏച്ചിക്കാനം",
    "stockNumber": 1710,
    "price": null,
    "image": "books/1710.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പെൺ പഞ്ചതന്ത്രം മറ്റു കഥകളും",
    "name_en": "Pèൺ pa~nchatantram marru kathakalum",
    "author": "കെ ആർ മീര",
    "stockNumber": 1711,
    "price": null,
    "image": "books/1711.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രണ്ടു ചിത്രകാരന്മാരും ഒരു യുവതിയും",
    "name_en": "Rantu chitrakaaranmaarum òru yuvatiyum",
    "author": "ഗ്രാസി",
    "stockNumber": 1712,
    "price": null,
    "image": "books/1712.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബിരിയാണി",
    "name_en": "Biriyaani",
    "author": "സന്തോഷ് എച്ചിക്കാനം",
    "stockNumber": 1713,
    "price": null,
    "image": "books/1713.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തമ്പ്",
    "name_en": "Tamp",
    "author": "നെടുമുടി വേണു",
    "stockNumber": 1714,
    "price": null,
    "image": "books/1714.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അർദ്ധ നാരീശ്വരൻ",
    "name_en": "Aർddha naareeshvaraൻ",
    "author": "പെരുമാൾ മുരുകൻ",
    "stockNumber": 1715,
    "price": null,
    "image": "books/1715.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിള്ളൽ",
    "name_en": "Villaൽ",
    "author": "ജിനേഷ് മടപ്പള്ളി",
    "stockNumber": 1716,
    "price": null,
    "image": "books/1716.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലൈബ്രേറിയൻ",
    "name_en": "Laibreriyaൻ",
    "author": "സി വി ബാലകൃഷ്ണൻ",
    "stockNumber": 1717,
    "price": null,
    "image": "books/1717.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടലിൻ്റെ ദാഹം",
    "name_en": "Kataliൻrè daaham",
    "author": "പികെ പാറക്കടവ്",
    "stockNumber": 1718,
    "price": null,
    "image": "books/1718.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പൂക്കളുടെ പുസ്തകം",
    "name_en": "Pookkalutè pustakam",
    "author": "എം സ്വരാജ്",
    "stockNumber": 1719,
    "price": null,
    "image": "books/1719.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാധവിക്കുട്ടിയുടെ നോവലുകൾ",
    "name_en": "Maadhavikkuttiyutè novalukaൾ",
    "author": "മാധവിക്കുട്ടി",
    "stockNumber": 1720,
    "price": null,
    "image": "books/1720.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുഞ്ഞാലി മരക്കാർ സമരവും സന്നിധ്യവും",
    "name_en": "Ku~n~naali marakkaaർ samaravum sannidhyavum",
    "author": "ജിനീഷ് പി.എസ്.",
    "stockNumber": 1721,
    "price": null,
    "image": "books/1721.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പെൻ കാക്ക",
    "name_en": "Pèൻ kaakka",
    "author": "ഹർഷാദ് ബത്തേരി",
    "stockNumber": 1722,
    "price": null,
    "image": "books/1722.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അഗ്നി ശലഭങ്ങൾ",
    "name_en": "Agni shalabha~n~naൾ",
    "author": "ഡോ. സതീദേവി",
    "stockNumber": 1723,
    "price": null,
    "image": "books/1723.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബുദ്ധ പദം",
    "name_en": "Buddha padam",
    "author": "വി ഷിനിലാൽ",
    "stockNumber": 1724,
    "price": null,
    "image": "books/1724.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പുഴമീനുകളെ കൊല്ലുന്ന വിധം",
    "name_en": "Puzhameenukalè kòllunna vidham",
    "author": "ബെന്യാമിൻ",
    "stockNumber": 1725,
    "price": null,
    "image": "books/1725.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചിൽ",
    "name_en": "Chiൽ",
    "author": "ഗോപി ജോസ് കട്ടിക്കാട്",
    "stockNumber": 1726,
    "price": null,
    "image": "books/1726.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആത്മകഥയ്ക്കൊരാമുഖം",
    "name_en": "Aatmakathaykkòraamukham",
    "author": "ലളിതാംബിക അന്തർജനം",
    "stockNumber": 1727,
    "price": null,
    "image": "books/1727.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എച്മുക്കുട്ടിയുടെ കഥകൾ",
    "name_en": "Èchmukkuttiyutè kathakaൾ",
    "author": "എച്മുക്കുറ്റി",
    "stockNumber": 1728,
    "price": null,
    "image": "books/1728.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇടത്താവളം",
    "name_en": "Itattaavalam",
    "author": "പെരുമ്പടവം",
    "stockNumber": 1729,
    "price": null,
    "image": "books/1729.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അസ്തമയത്തിന് നേരെ നടക്കുന്നവർ",
    "name_en": "Astamayattin nerè natakkunnavaർ",
    "author": "ബാലകൃഷ്ണൻ",
    "stockNumber": 1730,
    "price": null,
    "image": "books/1730.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തേവാരം",
    "name_en": "Tevaaram",
    "author": "പെരുമ്പടവം",
    "stockNumber": 1731,
    "price": null,
    "image": "books/1731.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആദ്യകാലം",
    "name_en": "Aadyakaalam",
    "author": "സിവി ബാലകൃഷ്ണൻ",
    "stockNumber": 1732,
    "price": null,
    "image": "books/1732.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചരിത്രത്തിൽ ഇല്ലാത്തവൻ",
    "name_en": "Charitrattiൽ illaattavaൻ",
    "author": "കെ രവി വർമ്മ",
    "stockNumber": 1733,
    "price": null,
    "image": "books/1733.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിശപ്പ്",
    "name_en": "Vishapp",
    "author": "ബേബി തോമസ്",
    "stockNumber": 1734,
    "price": null,
    "image": "books/1734.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അച്ഛൻ",
    "name_en": "Achchaൻ",
    "author": "പിവികെ പനയാൽ",
    "stockNumber": 1735,
    "price": null,
    "image": "books/1735.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പെരും ആൾ",
    "name_en": "Pèrum aaൾ",
    "author": "രമേശൻ ബ്ലാത്തൂർ",
    "stockNumber": 1736,
    "price": null,
    "image": "books/1736.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഡാർവിൻ പറഞ്ഞതും ഡാർവിൻ അറിയാതിരുന്നതും",
    "name_en": "Daaർviൻ para~n~natum daaർviൻ ariyaatirunnatum",
    "author": "കെ ഉഷ",
    "stockNumber": 1737,
    "price": null,
    "image": "books/1737.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശാസ്ത്ര ലോകത്തേ സൂപ്പർ സ്റ്റാറുകൾ",
    "name_en": "Shaastra lokatte sooppaർ srraarukaൾ",
    "author": "ഡോ. എം കെ ചന്ദ് രാജ് ഹരിദാസൻ",
    "stockNumber": 1738,
    "price": null,
    "image": "books/1738.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രാചുക്ക്",
    "name_en": "Raachukk",
    "author": "സി അനൂപ്",
    "stockNumber": 1739,
    "price": null,
    "image": "books/1739.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തീ പിടിച്ച പാള ങ്ങൾ",
    "name_en": "Tee pitichcha paala ~n~naൾ",
    "author": "കെ രാജഗോപാലൻ",
    "stockNumber": 1740,
    "price": null,
    "image": "books/1740.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചരരാശി",
    "name_en": "Chararaashi",
    "author": "ഷൈന",
    "stockNumber": 1741,
    "price": null,
    "image": "books/1741.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വാക്കുകൾ കേൾക്കാൻ ഒരു കാലം വരും",
    "name_en": "Vaakkukaൾ keൾkkaaൻ òru kaalam varum",
    "author": "മധുപാൽ",
    "stockNumber": 1742,
    "price": null,
    "image": "books/1742.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പുരുഷാരം",
    "name_en": "Purushaaram",
    "author": "സിവി ബാലകൃഷ്ണൻ",
    "stockNumber": 1743,
    "price": null,
    "image": "books/1743.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മന്ത്രികനായ റാംബാൾ ടിസ്കിൻ",
    "name_en": "Mantrikanaaya raambaaൾ tiskiൻ",
    "author": "ഹൈറ സുൽത്താൻ",
    "stockNumber": 1744,
    "price": null,
    "image": "books/1744.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടികളേ കഥ കേട്ടുറങ്ങാം",
    "name_en": "Kuttikale katha kettura~n~naam",
    "author": "ജലജ പ്രസാദ്",
    "stockNumber": 1745,
    "price": null,
    "image": "books/1745.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പള്ളിക്കൂടം കഥകൾ",
    "name_en": "Pallikkootam kathakaൾ",
    "author": "ജിഷ യു.സി",
    "stockNumber": 1746,
    "price": null,
    "image": "books/1746.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഷാപോണിയുടെ സാമ്രാജ്യം",
    "name_en": "Shaaponiyutè saamraajyam",
    "author": "ഷബ്ന പൊന്നാട്",
    "stockNumber": 1747,
    "price": null,
    "image": "books/1747.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടങ്കകഥകളുടെ കളിവീട്",
    "name_en": "Kata~nkakathakalutè kaliveet",
    "author": "പി കെ ഗോപി",
    "stockNumber": 1748,
    "price": null,
    "image": "books/1748.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിദ്യാർത്ഥികൽക്ക് വിജയമന്ത്രങ്ങൾ",
    "name_en": "Vidyaaർtthikaൽkk vijayamantra~n~naൾ",
    "author": "എപിജെ അബ്ദുൾ കലാം",
    "stockNumber": 1749,
    "price": null,
    "image": "books/1749.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അത്ഭുതമാണ് ജീവലോകം",
    "name_en": "Atbhutamaan jeevalokam",
    "author": "ഷാക്കിർ തോട്ടിക്കൽ",
    "stockNumber": 1750,
    "price": null,
    "image": "books/1750.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പത്താം ക്ലാസ് പാസ്സാകാൻ",
    "name_en": "Pattaam klaas paassaakaaൻ",
    "author": "ജേക്കബ് കോച്ചേരി",
    "stockNumber": 1751,
    "price": null,
    "image": "books/1751.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാളിപ്പാട്ടം",
    "name_en": "Kaalippaattam",
    "author": "ജുമൈല ഷാഫി കരിപ്പൂർ",
    "stockNumber": 1752,
    "price": null,
    "image": "books/1752.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആൻ്റിഗണി",
    "name_en": "Aaൻrigani",
    "author": "പി കെ വേണുക്കുട്ടൻ നായർ",
    "stockNumber": 1753,
    "price": null,
    "image": "books/1753.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭൂമധ്യ രേഖ",
    "name_en": "Bhoomadhya rekha",
    "author": "സജിൽ ശ്രീധർ",
    "stockNumber": 1754,
    "price": null,
    "image": "books/1754.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്ദുലേഖ",
    "name_en": "Indulekha",
    "author": "ഓ ചന്ദുമേനോൻ",
    "stockNumber": 1755,
    "price": null,
    "image": "books/1755.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കോറൽ ഐലൻഡ്",
    "name_en": "Koraൽ ailaൻd",
    "author": "RM ബെല്ലൻ്റൈൻ",
    "stockNumber": 1756,
    "price": null,
    "image": "books/1756.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിഴലുകൾ മരിക്കുംബോൾ",
    "name_en": "Nizhalukaൾ marikkumboൾ",
    "author": "കിടങ്ങയം ഭരതൻ",
    "stockNumber": 1757,
    "price": null,
    "image": "books/1757.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്വാതന്ത്ര്യം അർദ്ധ രാത്രിയിൽ",
    "name_en": "Svaatantryam aർddha raatriyiൽ",
    "author": "ലാരി കോളിൻസ് ഡൊമെനിക് ലാപ്പിയാർ",
    "stockNumber": 1758,
    "price": null,
    "image": "books/1758.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കഥാ മാലിക 3 മന്ത്രിക്കന്മാർ",
    "name_en": "Kathaa maalika 3 mantrikkanmaaർ",
    "author": "സുഭാഷ് ചന്ദ്രൻ",
    "stockNumber": 1759,
    "price": null,
    "image": "books/1759.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആനകാര്യം",
    "name_en": "Aanakaaryam",
    "author": "അക്ബർ കക്കട്ടിൽ",
    "stockNumber": 1760,
    "price": null,
    "image": "books/1760.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സർവീസ് സ്റ്റോറി എൻ്റെ ഐഎഎസ് ദിനങ്ങൾ",
    "name_en": "Saർvees srrori èൻrè aièès dina~n~naൾ",
    "author": "മലയാറ്റൂർ",
    "stockNumber": 1761,
    "price": null,
    "image": "books/1761.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉണ്ണിക്കുട്ടൻ്റെ ലോകം",
    "name_en": "Unnikkuttaൻrè lokam",
    "author": "നന്ദനാര്‍",
    "stockNumber": 1762,
    "price": null,
    "image": "books/1762.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിരീശ്വരന്‍",
    "name_en": "Nireeshvaran‍",
    "author": "വിജെ ജെയിംസ്",
    "stockNumber": 1763,
    "price": null,
    "image": "books/1763.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കോളറക്കാലത്തെ പ്രണയം",
    "name_en": "Kolarakkaalattè pranayam",
    "author": "ഗാബ്രിയേല്‍ ഗാര്‍ബിയ",
    "stockNumber": 1764,
    "price": null,
    "image": "books/1764.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റിച്ച് ഡാഡ് പുവർ ഡാഡ്",
    "name_en": "Richch daad puvaർ daad",
    "author": "റോബര്‍ട്ട് ടി കിയോസകി",
    "stockNumber": 1765,
    "price": null,
    "image": "books/1765.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അച്ചൂട്ടിയുടെ വിശേഷങ്ങള്‍",
    "name_en": "Achchoottiyutè vishesha~n~nal‍",
    "author": "കെ വിഷ്ണു നാരായണന്‍",
    "stockNumber": 1766,
    "price": null,
    "image": "books/1766.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാൻ്റ്ര്‍ വില്ലയിലെ പ്രേതം",
    "name_en": "Kaaൻrr‍ villayilè pretam",
    "author": "സുധീര്‍ പൂച്ചാലി",
    "stockNumber": 1767,
    "price": null,
    "image": "books/1767.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചുവന്ന കടല്‍",
    "name_en": "Chuvanna katal‍",
    "author": "തിക്കോടിയന്‍",
    "stockNumber": 1768,
    "price": null,
    "image": "books/1768.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനുഷ്യ വേട്ടക്കാരന്‍",
    "name_en": "Manushya vettakkaaran‍",
    "author": "പവിത്രന്‍ തീക്കുനി",
    "stockNumber": 1769,
    "price": null,
    "image": "books/1769.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മറുപിറവിയും മറ്റു കഥകളും",
    "name_en": "Marupiraviyum marru kathakalum",
    "author": "എന്‍ പ്രഭാകരന്‍",
    "stockNumber": 1770,
    "price": null,
    "image": "books/1770.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാര്‍ക്സിസത്തിൻ്റെ സമകാലികത",
    "name_en": "Maar‍ksisattiൻrè samakaalikata",
    "author": "സുനില്‍ പി ഇളയിടം",
    "stockNumber": 1771,
    "price": null,
    "image": "books/1771.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നീനോ",
    "name_en": "Neeno",
    "author": "പിഎം ഗിരീഷ്",
    "stockNumber": 1772,
    "price": null,
    "image": "books/1772.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭൂട്ടാൻ ശാന്തിയുടെ കളിവീട്",
    "name_en": "Bhoottaaൻ shaantiyutè kaliveet",
    "author": "പിജി ടോമി",
    "stockNumber": 1773,
    "price": null,
    "image": "books/1773.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആത്മവിൻ്റെ പ്രതിചായ",
    "name_en": "Aatmaviൻrè pratichaaya",
    "author": "ഖലീല്‍ ജിബ്രാന്‍",
    "stockNumber": 1774,
    "price": null,
    "image": "books/1774.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇവാൻ ഇലീച്ചിന്റെ മരണം ",
    "name_en": "Ivaaൻ ileechchinrè maranam ",
    "author": "വേണു വി ദേശം ",
    "stockNumber": 1775,
    "price": null,
    "image": "books/1775.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭാര്യയെ വില്‍ക്കാനുണ്ട്",
    "name_en": "Bhaaryayè vil‍kkaanunt",
    "author": "അന്തന്‍ ചെക്കോവ്",
    "stockNumber": 1776,
    "price": null,
    "image": "books/1776.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒടിഞ്ഞ ചിറകുകള്‍",
    "name_en": "Òti~n~na chirakukal‍",
    "author": "ഖലീല്‍ ജിബ്രാന്‍",
    "stockNumber": 1777,
    "price": null,
    "image": "books/1777.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്വപ്നങ്ങളുടെ വ്യാഖ്യാനം",
    "name_en": "Svapna~n~nalutè vyaakhyaanam",
    "author": "പിപി സത്യന്‍",
    "stockNumber": 1778,
    "price": null,
    "image": "books/1778.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മതത്തെ പറ്റി",
    "name_en": "Matattè parri",
    "author": "മാര്‍ക്ക്സ് എംഗല്‍സ് ലെനിന്‍",
    "stockNumber": 1779,
    "price": null,
    "image": "books/1779.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പന്തിനൊപ്പം പറന്നവര്‍",
    "name_en": "Pantinòppam parannavar‍",
    "author": "കെവി കോമളവല്ലി",
    "stockNumber": 1780,
    "price": null,
    "image": "books/1780.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാര്‍ക്സിസം തുടക്കക്കാര്‍ക്ക്",
    "name_en": "Maar‍ksisam tutakkakkaar‍kk",
    "author": "ഇ രാമചന്ദ്രന്‍",
    "stockNumber": 1781,
    "price": null,
    "image": "books/1781.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മൂന്ന്റാത്തല്‍ നാടന്‍ പൂച്ച",
    "name_en": "Moonnraattal‍ naatan‍ poochcha",
    "author": "ജയരാജ് മിത്ര",
    "stockNumber": 1782,
    "price": null,
    "image": "books/1782.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രപഞ്ചം ചുരുങ്ങിയ വാക്കുകളില്‍",
    "name_en": "Prapa~ncham churu~n~niya vaakkukalil‍",
    "author": "ഡോ. എ രാജഗോപാല്‍",
    "stockNumber": 1783,
    "price": null,
    "image": "books/1783.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മണിക്കുട്ടി പഠിക്കുന്നു",
    "name_en": "Manikkutti pathikkunnu",
    "author": "എം വി മോഹനന്‍",
    "stockNumber": 1784,
    "price": null,
    "image": "books/1784.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നായ",
    "name_en": "Naaya",
    "author": "ഡോ. എ കെ നാരായണന്‍",
    "stockNumber": 1785,
    "price": null,
    "image": "books/1785.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹാന്‍ നദിക്കരയിലൂടെ",
    "name_en": "Haan‍ nadikkarayilootè",
    "author": "രാജേശ്വരി നായര്‍",
    "stockNumber": 1786,
    "price": null,
    "image": "books/1786.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രണയവും ധ്യാനവും",
    "name_en": "Pranayavum dhyaanavum",
    "author": "ഖലീല്‍ ജിബ്രാന്‍",
    "stockNumber": 1787,
    "price": null,
    "image": "books/1787.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ധര്‍മ്മ യോദ്ധ കല്‍ക്കി",
    "name_en": "Dhar‍mma yoddha kal‍kki",
    "author": "കെവിന്‍ മിസല്‍",
    "stockNumber": 1788,
    "price": null,
    "image": "books/1788.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പെണ്ണായാലെന്താ",
    "name_en": "Pènnaayaalèntaa",
    "author": "ഡോ. ശ്രീകുമാര്‍",
    "stockNumber": 1789,
    "price": null,
    "image": "books/1789.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആദ്യ സ്വാതന്ത്ര്യ സമരത്തിൻ്റെ കഥ",
    "name_en": "Aadya svaatantrya samarattiൻrè katha",
    "author": "കെ രാധാകൃഷ്ണന്‍",
    "stockNumber": 1790,
    "price": null,
    "image": "books/1790.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആയിരം കണ്ണുള്ള അമ്മ",
    "name_en": "Aayiram kannulla amma",
    "author": "ഡോ. രാധിക സി നായര്‍",
    "stockNumber": 1791,
    "price": null,
    "image": "books/1791.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പന്ത്രണ്ട് പുരാണ കഥകള്‍",
    "name_en": "Pantrant puraana kathakal‍",
    "author": "ഗ്രാസി",
    "stockNumber": 1792,
    "price": null,
    "image": "books/1792.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചാച്ചാജിയുടെ കഥ",
    "name_en": "Chaachchaajiyutè katha",
    "author": "മലയത്ത് അപ്പുണ്ണി",
    "stockNumber": 1793,
    "price": null,
    "image": "books/1793.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നൈല്‍ ഡയറി",
    "name_en": "Nail‍ dayari",
    "author": "ടഗ പൊട്ടക്കാട്",
    "stockNumber": 1794,
    "price": null,
    "image": "books/1794.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഏണസ്റ്റ് ഹെമിംഗ്ൻ്റെ തിരഞ്ഞെടുത്ത കഥകള്‍",
    "name_en": "Enasrr hèmimgൻrè tira~n~nètutta kathakal‍",
    "author": "ബാബു ജോസഫ്",
    "stockNumber": 1795,
    "price": null,
    "image": "books/1795.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സെന്‍",
    "name_en": "Sèn‍",
    "author": "റോഷ്നി ലൂയി",
    "stockNumber": 1796,
    "price": null,
    "image": "books/1796.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രോഗ ശാന്തിക്ക് യോഗ",
    "name_en": "Roga shaantikk yoga",
    "author": "ഡോ. കെ വി ദിലീപ് കുമാര്‍. സി ഹരിദാസന്‍",
    "stockNumber": 1797,
    "price": null,
    "image": "books/1797.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭരണ ഘടന ചരിത്രവും സംസ്കാരവും",
    "name_en": "Bharana ghatana charitravum samskaaravum",
    "author": "പി. രാജീവ്",
    "stockNumber": 1798,
    "price": null,
    "image": "books/1798.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കത്തി",
    "name_en": "Katti",
    "author": "പുനത്തില്‍",
    "stockNumber": 1799,
    "price": null,
    "image": "books/1799.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഓസ്കാന്‍ വൈല്‍ഡ് തടവറയില്‍",
    "name_en": "Oskaan‍ vail‍d tatavarayil‍",
    "author": "ശരത് കുമാര്‍ ജി.എല്‍.",
    "stockNumber": 1800,
    "price": null,
    "image": "books/1800.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുനൂര്‍ മഠം",
    "name_en": "Kunoor‍ matham",
    "author": "സുനില്‍ പരമേശ്വരന്‍",
    "stockNumber": 1801,
    "price": null,
    "image": "books/1801.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടവാവലുകളുടെ ഗ്രാമം",
    "name_en": "Katavaavalukalutè graamam",
    "author": "സുനില്‍ പരമേശ്വരന്‍",
    "stockNumber": 1802,
    "price": null,
    "image": "books/1802.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്യേടത്തി",
    "name_en": "Kutyetatti",
    "author": "എം ടി വാസുദേവന്‍ നായര്‍",
    "stockNumber": 1803,
    "price": null,
    "image": "books/1803.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "യാത്ര ഇന്ത്യന്‍ ചരിത്ര സ്മാരകങ്ങളിലൂടെ",
    "name_en": "Yaatra intyan‍ charitra smaaraka~n~nalilootè",
    "author": "കെ വിശ്വാസ്",
    "stockNumber": 1804,
    "price": null,
    "image": "books/1804.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബുദ്ധൻ്റെ ചിരി",
    "name_en": "Buddhaൻrè chiri",
    "author": "എംപി വീരേന്ദ്ര കുമാര്‍",
    "stockNumber": 1805,
    "price": null,
    "image": "books/1805.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നാടൻ പ്രേമം",
    "name_en": "Naataൻ premam",
    "author": "ടഗ പൊട്ടക്കാട്",
    "stockNumber": 1806,
    "price": null,
    "image": "books/1806.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആത്മ കഥ",
    "name_en": "Aatma katha",
    "author": "സുഭാഷ് ചന്ദ്ര ബോസ്",
    "stockNumber": 1807,
    "price": null,
    "image": "books/1807.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കപ്പിത്താൻ്റെ ഭാര്യ",
    "name_en": "Kappittaaൻrè bhaarya",
    "author": "വിപിന്‍ ചന്ദ്രന്‍",
    "stockNumber": 1808,
    "price": null,
    "image": "books/1808.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഫ്രെഡറിക് എംഗല്‍സ് സഹോദര്യ ഭാവനയുടെ വിപ്ലവ മൂല്യം",
    "name_en": "Phrèdarik èmgal‍s sahodarya bhaavanayutè viplava moolyam",
    "author": "സുനില്‍ പി ഇളയിടം",
    "stockNumber": 1809,
    "price": null,
    "image": "books/1809.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുതാര്‍ കുന്നിലെ മുസല്ലകൾ",
    "name_en": "Mutaar‍ kunnilè musallakaൾ",
    "author": "യാസര്‍ അറഫത്ത്",
    "stockNumber": 1810,
    "price": null,
    "image": "books/1810.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അഷിതയുടെ കഥകള്‍",
    "name_en": "Ashitayutè kathakal‍",
    "author": "പ്രിയ നായര്‍",
    "stockNumber": 1811,
    "price": null,
    "image": "books/1811.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആന്‍ടു ദിസ് ലാസ്റ്റ്",
    "name_en": "Aan‍tu dis laasrr",
    "author": "ജോൺ റെസ്കിന്‍",
    "stockNumber": 1812,
    "price": null,
    "image": "books/1812.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അപ്പൻ്റെ ബ്രാണ്ടിക്കുപ്പി",
    "name_en": "Appaൻrè braantikkuppi",
    "author": "എം മുകുന്തന്‍",
    "stockNumber": 1813,
    "price": null,
    "image": "books/1813.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനസിൻ്റെ അത്ഭുതങ്ങള്‍",
    "name_en": "Manasiൻrè atbhuta~n~nal‍",
    "author": "ഡോ. ജോസഫ് മാര്‍ഫി",
    "stockNumber": 1814,
    "price": null,
    "image": "books/1814.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇക്കിഗായ്",
    "name_en": "Ikkigaay",
    "author": "കെ കണ്ണന്‍",
    "stockNumber": 1815,
    "price": null,
    "image": "books/1815.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വേരുകൾ",
    "name_en": "Verukaൾ",
    "author": "മലയാറ്റൂര്‍",
    "stockNumber": 1816,
    "price": null,
    "image": "books/1816.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനുഷ്യന് ഒരാമുഖം",
    "name_en": "Manushyan òraamukham",
    "author": "സുഭാഷ് ചന്ദ്രന്‍",
    "stockNumber": 1817,
    "price": null,
    "image": "books/1817.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അലെഫ്",
    "name_en": "Alèph",
    "author": "പൗലോ കൊയ്ലോ",
    "stockNumber": 1818,
    "price": null,
    "image": "books/1818.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജീവിതം ഒരു മോണാലിസച്ചിരിയാണ്",
    "name_en": "Jeevitam òru monaalisachchiriyaan",
    "author": "ദീപ നിശാന്ത്",
    "stockNumber": 1819,
    "price": null,
    "image": "books/1819.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇനി ഞാന്‍ ഉറങ്ങട്ടെ",
    "name_en": "Ini ~naan‍ ura~n~nattè",
    "author": "പികെ ബാലകൃഷ്ണന്‍",
    "stockNumber": 1820,
    "price": null,
    "image": "books/1820.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എംടി യുടെ കഥകള്‍",
    "name_en": "Èmti yutè kathakal‍",
    "author": "എം ടി വാസുദേവന്‍ നായര്‍",
    "stockNumber": 1821,
    "price": null,
    "image": "books/1821.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗൗരിയും മറ്റു കഥകളും",
    "name_en": "Gaൗriyum marru kathakalum",
    "author": "ടി പത്മനാഭന്‍",
    "stockNumber": 1822,
    "price": null,
    "image": "books/1822.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലന്തന്‍ ബത്തേരിയിലെ ലൂത്തീനിയകൾ",
    "name_en": "Lantan‍ batteriyilè lootteeniyakaൾ",
    "author": "എന്‍ എസ് മാധവന്‍",
    "stockNumber": 1823,
    "price": null,
    "image": "books/1823.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാല്‍ഗുഡി ദിനങ്ങല്‍",
    "name_en": "Maal‍gudi dina~n~nal‍",
    "author": "ആര്‍കെ നാരായണന്‍",
    "stockNumber": 1824,
    "price": null,
    "image": "books/1824.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എന്റെ സത്യാന്വേഷണ പരീക്ഷണങ്ങൾ",
    "name_en": "Ènrè satyaanveshana pareekshana~n~naൾ",
    "author": "സി പി ഗംഗാധരന്‍",
    "stockNumber": 1825,
    "price": null,
    "image": "books/1825.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആത്മ കഥ ഓഷോ",
    "name_en": "Aatma katha osho",
    "author": "മാ ബോധി പ്രമോദ",
    "stockNumber": 1826,
    "price": null,
    "image": "books/1826.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഓട്ടോറിക്ഷക്കാരൻ്റെ ഭാര്യ",
    "name_en": "Ottorikshakkaaraൻrè bhaarya",
    "author": "എം മുകുന്തന്‍",
    "stockNumber": 1827,
    "price": null,
    "image": "books/1827.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദൈവത്തിൻ്റെ ചാരന്മാര്‍",
    "name_en": "Daivattiൻrè chaaranmaar‍",
    "author": "ജോസഫ് അന്നംകുട്ടി ജോസ്",
    "stockNumber": 1828,
    "price": null,
    "image": "books/1828.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുകുന്തേട്ടൻ്റെ കുട്ടികള്‍",
    "name_en": "Mukuntettaൻrè kuttikal‍",
    "author": "എം മുകുന്തന്‍",
    "stockNumber": 1829,
    "price": null,
    "image": "books/1829.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അറിവിൻ്റെ അത്ഭുത ലോകത്തില്‍",
    "name_en": "Ariviൻrè atbhuta lokattil‍",
    "author": "പ്രൊഫ. എസ് ശിവദാസ്",
    "stockNumber": 1830,
    "price": null,
    "image": "books/1830.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജാലിയന്‍ വാലബാഗിൻ്റെ കഥ",
    "name_en": "Jaaliyan‍ vaalabaagiൻrè katha",
    "author": "പ്രതാപന്‍ തായാട്ട്",
    "stockNumber": 1831,
    "price": null,
    "image": "books/1831.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാക്ക ദേശത്തെ ഉറുമ്പുകള്‍",
    "name_en": "Kaakka deshattè urumpukal‍",
    "author": "ഇ സന്തോഷ് കുമാര്‍",
    "stockNumber": 1832,
    "price": null,
    "image": "books/1832.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മിസോയ് സാന്‍",
    "name_en": "Misoy saan‍",
    "author": "ഷീബ ഇ.കെ",
    "stockNumber": 1833,
    "price": null,
    "image": "books/1833.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗന്ധര്‍വന്‍",
    "name_en": "Gandhar‍van‍",
    "author": "വിആര്‍ സുധീഷ്",
    "stockNumber": 1834,
    "price": null,
    "image": "books/1834.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വൃത്തം ഭേദിച്ച വനിതകള്‍",
    "name_en": "Vrrittam bhedichcha vanitakal‍",
    "author": "കെ രാമ പി കെ ശിവദാസ് കെ അനശ്വര",
    "stockNumber": 1835,
    "price": null,
    "image": "books/1835.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചിത്രമിതപൂര്‍ണം",
    "name_en": "Chitramitapoor‍nam",
    "author": "കദീജ മുംതാസ്",
    "stockNumber": 1836,
    "price": null,
    "image": "books/1836.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഹാ വ്യസനങ്ങളുടെ നദി",
    "name_en": "Mahaa vyasana~n~nalutè nadi",
    "author": "എന്‍ ശശിധരന്‍",
    "stockNumber": 1837,
    "price": null,
    "image": "books/1837.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അടിയാള പ്രേതം",
    "name_en": "Atiyaala pretam",
    "author": "പിഎഫ് മാത്യൂസ്",
    "stockNumber": 1838,
    "price": null,
    "image": "books/1838.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കഥയെഴുത്ത് ",
    "name_en": "Kathayèzhutt ",
    "author": "കെആര്‍ മീര",
    "stockNumber": 1839,
    "price": null,
    "image": "books/1839.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്ത്യന്‍ ഭരണഘടനയുടെ പെൺശിൽപ്പങ്ങല്‍",
    "name_en": "Intyan‍ bharanaghatanayutè pèൺshiൽppa~n~nal‍",
    "author": "ഡോ. രാധാ കൃഷ്ണന്‍",
    "stockNumber": 1840,
    "price": null,
    "image": "books/1840.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഡെല്‍ കര്‍ണഗി",
    "name_en": "Dèl‍ kar‍nagi",
    "author": "എന്‍ മൂസക്കുട്ടി",
    "stockNumber": 1841,
    "price": null,
    "image": "books/1841.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പൊലി ",
    "name_en": "Pòli ",
    "author": null,
    "stockNumber": 1842,
    "price": null,
    "image": "books/1842.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇരുള്‍ക്കാലം",
    "name_en": "Irul‍kkaalam",
    "author": "മുഖ്യമന്ത്രി വിനയ ചന്ദ്രന്‍",
    "stockNumber": 1843,
    "price": null,
    "image": "books/1843.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജൈവ കൃഷി എന്ത് എങ്ങനെ",
    "name_en": "Jaiva krrishi ènt è~n~nanè",
    "author": null,
    "stockNumber": 1844,
    "price": null,
    "image": "books/1844.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പാത്തുമ്മയുടെ ആട്",
    "name_en": "Paattummayutè aat",
    "author": "ബഷീര്‍",
    "stockNumber": 1845,
    "price": null,
    "image": "books/1845.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വര്‍ഗീയത",
    "name_en": "Var‍geeyata",
    "author": "വേണു ഗോപാലന്‍ കെ.എ",
    "stockNumber": 1846,
    "price": null,
    "image": "books/1846.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദുരവസ്ഥ",
    "name_en": "Duravastha",
    "author": "ഭാസ്കരന്‍ ഇയ്യക്കാട്",
    "stockNumber": 1847,
    "price": null,
    "image": "books/1847.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു ഭഗവത് ഗീതയും കുറേ മുലകളും",
    "name_en": "Òru bhagavat geetayum kure mulakalum",
    "author": "ബഷീര്‍",
    "stockNumber": 1848,
    "price": null,
    "image": "books/1848.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രേമ കഥകള്‍",
    "name_en": "Prema kathakal‍",
    "author": "മാധവിക്കുട്ടി",
    "stockNumber": 1849,
    "price": null,
    "image": "books/1849.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാട്ടിറച്ചിയുടെ മഹാഭാരതം",
    "name_en": "Maattirachchiyutè mahaabhaaratam",
    "author": "സ്വാമി വിവേകാനന്ദ ശക്തി ബോധി",
    "stockNumber": 1850,
    "price": null,
    "image": "books/1850.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എച്ചില്‍ ജീവിതം",
    "name_en": "Èchchil‍ jeevitam",
    "author": "വേണു കല്ലാര്‍",
    "stockNumber": 1851,
    "price": null,
    "image": "books/1851.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വര്‍ഗീയ രാഷ്ട്രീയം",
    "name_en": "Var‍geeya raashtreeyam",
    "author": "പി പി സത്യന്‍",
    "stockNumber": 1852,
    "price": null,
    "image": "books/1852.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തത്വ ശാസ്ത്രം കുട്ടിക്കൾക്ക്",
    "name_en": "Tatva shaastram kuttikkaൾkk",
    "author": "പിടി ഭാസ്കര പണിക്കര്‍",
    "stockNumber": 1853,
    "price": null,
    "image": "books/1853.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശൈലി ശില്‍പം",
    "name_en": "Shaili shil‍pam",
    "author": "കെഎം പ്രഭാകര വാരിയര്‍",
    "stockNumber": 1854,
    "price": null,
    "image": "books/1854.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഓര്‍മകളില്‍ ഡാര്‍വിന്‍",
    "name_en": "Or‍makalil‍ daar‍vin‍",
    "author": "പിപികെ പൊതുവല്‍",
    "stockNumber": 1855,
    "price": null,
    "image": "books/1855.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആത്മ വെളിച്ചം",
    "name_en": "Aatma vèlichcham",
    "author": "എകെ അബ്ദുള്‍ മജീദ്",
    "stockNumber": 1856,
    "price": null,
    "image": "books/1856.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനുഷ്യ രാശിയുടെ വെളിച്ചങ്ങള്‍",
    "name_en": "Manushya raashiyutè vèlichcha~n~nal‍",
    "author": null,
    "stockNumber": 1857,
    "price": null,
    "image": "books/1857.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബത് ലഹേമിലെ നക്ഷത്രങ്ങള്‍",
    "name_en": "Bat lahemilè nakshatra~n~nal‍",
    "author": "നാസര്‍ ബേപ്പൂര്‍",
    "stockNumber": 1858,
    "price": null,
    "image": "books/1858.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സൂര്യൻ്റെ കൊക്കിലെ കാക്ക",
    "name_en": "Sooryaൻrè kòkkilè kaakka",
    "author": "സത്യന്‍ മടക്കര",
    "stockNumber": 1859,
    "price": null,
    "image": "books/1859.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നവംബര്‍ 26 2008",
    "name_en": "Navambar‍ 26 2008",
    "author": "മധു കാനായി",
    "stockNumber": 1860,
    "price": null,
    "image": "books/1860.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അണയാത്ത തെരുവ് വിളക്കുകള്‍",
    "name_en": "Anayaatta tèruv vilakkukal‍",
    "author": "സബിന്‍ വില്‍ഫ്രഡ്",
    "stockNumber": 1861,
    "price": null,
    "image": "books/1861.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലവ് ജുനൂൻ",
    "name_en": "Lav junooൻ",
    "author": "റഫീഖ് മേമുഡെ",
    "stockNumber": 1862,
    "price": null,
    "image": "books/1862.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഞ്ഞ കൂടാരങ്ങള്‍",
    "name_en": "Ma~n~na kootaara~n~nal‍",
    "author": "സോമന്‍ കരിവെള്ളൂര്‍",
    "stockNumber": 1863,
    "price": null,
    "image": "books/1863.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിഴല്‍ രൂപങ്ങള്‍",
    "name_en": "Nizhal‍ roopa~n~nal‍",
    "author": "വിജയന്‍ തീര്‍ഥങ്കര്‍",
    "stockNumber": 1864,
    "price": null,
    "image": "books/1864.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നെഹ്രുവിൻ്റെ ലോക ചരിത്രാവലോകനം",
    "name_en": "Nèhruviൻrè loka charitraavalokanam",
    "author": "മലയിന്‍കീഴ് ഗോപാല കൃഷ്ണന്‍",
    "stockNumber": 1865,
    "price": null,
    "image": "books/1865.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാക്കനാടന്‍ ധിക്കാരിയുടെ സര്‍ഗ സാക്ഷ്യങ്ങള്‍",
    "name_en": "Kaakkanaatan‍ dhikkaariyutè sar‍ga saakshya~n~nal‍",
    "author": "ഡോ. ജോബിന്‍ ചാമക്കല്‍",
    "stockNumber": 1866,
    "price": null,
    "image": "books/1866.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രദേശിക ചരിത്രം രചനയും നീതി ശാന്ത്രവും",
    "name_en": "Pradeshika charitram rachanayum neeti shaantravum",
    "author": "ഡോ. കെകെഎന്‍ കുറുപ്പ്",
    "stockNumber": 1867,
    "price": null,
    "image": "books/1867.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എഴുതാതെ പോയ ആത്മകഥയിൽ ഒരു കാഞ്ഞിരമരം വളരുംമ്പോള്‍",
    "name_en": "Èzhutaatè poya aatmakathayiൽ òru kaa~n~niramaram valarummpol‍",
    "author": "യു എം അബൂബക്കര്‍",
    "stockNumber": 1868,
    "price": null,
    "image": "books/1868.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശീര്‍ഷകം എന്തയിരിക്കണം",
    "name_en": "Sheer‍shakam èntayirikkanam",
    "author": "മനാഫ് കേച്ചേരി",
    "stockNumber": 1869,
    "price": null,
    "image": "books/1869.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആയ",
    "name_en": "Aaya",
    "author": "വെള്ളിയോടന്‍",
    "stockNumber": 1870,
    "price": null,
    "image": "books/1870.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മനുഷ്യ രക്തം കത്തീയപ്പോള്‍",
    "name_en": "Manushya raktam katteeyappol‍",
    "author": "കമലാസനന്‍",
    "stockNumber": 1871,
    "price": null,
    "image": "books/1871.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അറബിക്കഥകൾ",
    "name_en": "Arabikkathakaൾ",
    "author": "എസ് കൃഷ്ണ കുമാര്‍",
    "stockNumber": 1872,
    "price": null,
    "image": "books/1872.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹൃദയത്തിലെ നൂറ് കഥകള്‍",
    "name_en": "Hrridayattilè noor kathakal‍",
    "author": "ഷാബിന്‍ ഷാന്‍ എസ്ആര്‍",
    "stockNumber": 1873,
    "price": null,
    "image": "books/1873.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഡ്ബ്ലൂ ഡ്ബ്ലൂ ഡ്ബ്ലൂ.അശ്വതി.കോം",
    "name_en": "Dbloo dbloo dbloo.ashvati.kom",
    "author": "സുകുമാരന്‍ വെങ്ങാട്ട്",
    "stockNumber": 1874,
    "price": null,
    "image": "books/1874.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മണല്‍ക്കാട്ടിലെ രാപ്പാടികൾ",
    "name_en": "Manal‍kkaattilè raappaatikaൾ",
    "author": "രാജന്‍ മാവേലിക്കര",
    "stockNumber": 1875,
    "price": null,
    "image": "books/1875.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുടിയിറക്കപ്പട്ടവൻ്റെ നിലവിളികള്‍",
    "name_en": "Kutiyirakkappattavaൻrè nilavilikal‍",
    "author": "ബിജു സി പറവൂര്‍",
    "stockNumber": 1876,
    "price": null,
    "image": "books/1876.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നമ്മുടെ പ്രപഞ്ചം",
    "name_en": "Nammutè prapa~ncham",
    "author": "ഡോ. എന്‍ ഷാജി",
    "stockNumber": 1877,
    "price": null,
    "image": "books/1877.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നരക സാകേതത്തിലെ ഉള്ളറകള്‍",
    "name_en": "Naraka saaketattilè ullarakal‍",
    "author": "സുധീഷ് മിന്നി",
    "stockNumber": 1878,
    "price": null,
    "image": "books/1878.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തുന്നല്‍ പക്ഷിയുടെ വീട്",
    "name_en": "Tunnal‍ pakshiyutè veet",
    "author": "സലീം അയ്യനാഥ്",
    "stockNumber": 1879,
    "price": null,
    "image": "books/1879.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാലം കലഹിച്ച കാവ്യം",
    "name_en": "Kaalam kalahichcha kaavyam",
    "author": "രാജീവ് കെ മുരളി",
    "stockNumber": 1880,
    "price": null,
    "image": "books/1880.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിലാപങ്ങൾക്കുമപ്പുറം",
    "name_en": "Vilaapa~n~naൾkkumappuram",
    "author": "രാജന്‍ മാവേലിക്കര",
    "stockNumber": 1881,
    "price": null,
    "image": "books/1881.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മരച്ചില്ലകളില്‍ മഴയോഴിയുമ്പോള്‍",
    "name_en": "Marachchillakalil‍ mazhayozhiyumpol‍",
    "author": "മുരളി മുല്ലക്കര",
    "stockNumber": 1882,
    "price": null,
    "image": "books/1882.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭാഷാ കൊണ്ട് കളിക്കാം",
    "name_en": "Bhaashaa kònt kalikkaam",
    "author": "രാജഗോപാല്‍ നാട്ടുകല്‍",
    "stockNumber": 1883,
    "price": null,
    "image": "books/1883.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കഥപറയും കടല്‍ ദേശത്ത്",
    "name_en": "Kathaparayum katal‍ deshatt",
    "author": "വിജയന്‍ മടപ്പള്ളി",
    "stockNumber": 1884,
    "price": null,
    "image": "books/1884.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വൈലോപ്പിള്ളി ശ്ലോകങ്ങള്‍",
    "name_en": "Vailoppilli shloka~n~nal‍",
    "author": "കെ കെ യതീന്ദ്രന്‍",
    "stockNumber": 1885,
    "price": null,
    "image": "books/1885.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗണിത ശാസ്ത്ര മനീഷികള്‍",
    "name_en": "Ganita shaastra maneeshikal‍",
    "author": "സിഎ സ്കറിയ കുട്ടി",
    "stockNumber": 1886,
    "price": null,
    "image": "books/1886.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വായിച്ചു വളര്‍ന്ന കഥ",
    "name_en": "Vaayichchu valar‍nna katha",
    "author": "സുകുമാര്‍ അഴീക്കോട്",
    "stockNumber": 1887,
    "price": null,
    "image": "books/1887.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചാച്ചാജിയുടെ കഥകള്‍",
    "name_en": "Chaachchaajiyutè kathakal‍",
    "author": "പയ്യന്നൂര്‍ കുഞ്ഞിമാന്‍",
    "stockNumber": 1889,
    "price": null,
    "image": "books/1889.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുപ്പായമിടാത്ത അപ്പൂപ്പന്‍",
    "name_en": "Kuppaayamitaatta appooppan‍",
    "author": "പയ്യന്നൂര്‍ കുഞ്ഞിമാന്‍",
    "stockNumber": 1890,
    "price": null,
    "image": "books/1890.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വന യാത്ര",
    "name_en": "Vana yaatra",
    "author": "ഡോ. ടി.ആര്‍.ജയകുമാരി",
    "stockNumber": 1891,
    "price": null,
    "image": "books/1891.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ധര്‍മ്മക്ഷേത്ര കുരുക്ഷേത്ര",
    "name_en": "Dhar‍mmakshetra kurukshetra",
    "author": "ജി ശങ്കരപിള്ള",
    "stockNumber": 1892,
    "price": null,
    "image": "books/1892.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കലപ്പ",
    "name_en": "Kalappa",
    "author": "ചന്ദ്രന്‍ നെല്ലെക്കാട്",
    "stockNumber": 1893,
    "price": null,
    "image": "books/1893.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സംഗമക്കവിതകള്‍",
    "name_en": "Samgamakkavitakal‍",
    "author": "ചെന്നൈ കവിസംഗമം",
    "stockNumber": 1894,
    "price": null,
    "image": "books/1894.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചക്രങ്ങളുടെ ലോകം",
    "name_en": "Chakra~n~nalutè lokam",
    "author": "ഡോ. അച്യുതന്‍",
    "stockNumber": 1895,
    "price": null,
    "image": "books/1895.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കരളും കിഡ്നിയും",
    "name_en": "Karalum kidniyum",
    "author": "ഡോ. പി കെ ജനാര്‍ദനന്‍",
    "stockNumber": 1896,
    "price": null,
    "image": "books/1896.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹാര്‍ട്ട് അറ്റാക്ക്",
    "name_en": "Haar‍tt arraakk",
    "author": "ഡോ. പി കെ ജനാര്‍ദനന്‍",
    "stockNumber": 1897,
    "price": null,
    "image": "books/1897.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പൂജാ മുറി",
    "name_en": "Poojaa muri",
    "author": "ജി ശങ്കരപിള്ള",
    "stockNumber": 1898,
    "price": null,
    "image": "books/1898.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇടാന്‍ മാറന്ന ഇഴ",
    "name_en": "Itaan‍ maaranna izha",
    "author": "ജി ശങ്കരപിള്ള",
    "stockNumber": 1899,
    "price": null,
    "image": "books/1899.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്നേഹ ദൂതന്‍",
    "name_en": "Sneha dootan‍",
    "author": "ജി ശങ്കരപിള്ള",
    "stockNumber": 1900,
    "price": null,
    "image": "books/1900.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കരുണ",
    "name_en": "Karuna",
    "author": "കുമാരനാശാന്‍",
    "stockNumber": 1901,
    "price": null,
    "image": "books/1901.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സംഗമക്കവിതകള്‍",
    "name_en": "Samgamakkavitakal‍",
    "author": "ചെന്നൈ കവിസംഗമം",
    "stockNumber": 1902,
    "price": null,
    "image": "books/1902.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മണ്ണാങ്കട്ട",
    "name_en": "Mannaa~nkatta",
    "author": "കെ ശ്രീകുമാര്‍",
    "stockNumber": 1903,
    "price": null,
    "image": "books/1903.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇസ്ലാം ഭീകരതയല്ല",
    "name_en": "Islaam bheekaratayalla",
    "author": "സ്വാമി ലക്ഷ്മി ശങ്കരാചാര്യ",
    "stockNumber": 1904,
    "price": null,
    "image": "books/1904.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നിഴല്‍ രൂപങ്ങള്‍",
    "name_en": "Nizhal‍ roopa~n~nal‍",
    "author": "വിജയന്‍ തീര്‍ഥങ്കര്‍",
    "stockNumber": 1905,
    "price": null,
    "image": "books/1905.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൈപ്പാട് കൂന ",
    "name_en": "Kaippaat koona ",
    "author": "ഉദയ ശങ്കർ",
    "stockNumber": 1906,
    "price": null,
    "image": "books/1906.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രണയ ഗീതം ",
    "name_en": "Pranaya geetam ",
    "author": "ഖലീൽ ജിബ്രാൻ",
    "stockNumber": 1907,
    "price": null,
    "image": "books/1907.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്വപ്ന പരമ്പര ",
    "name_en": "Svapna parampara ",
    "author": "സി രാധാകൃഷ്ണൻ",
    "stockNumber": 1908,
    "price": null,
    "image": "books/1908.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "യോഗ നിത്യജീവിതത്തിൽ ",
    "name_en": "Yoga nityajeevitattiൽ ",
    "author": "യോഗാചാര്യ ഗുരു പ്രസാദ്",
    "stockNumber": 1909,
    "price": null,
    "image": "books/1909.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലയാളം നല്ല ഉത്തരങ്ങൾ ",
    "name_en": "Malayaalam nalla uttara~n~naൾ ",
    "author": "ദേവേശൻ പേരൂർ",
    "stockNumber": 1910,
    "price": null,
    "image": "books/1910.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗണിത വിമയങ്ങൾ ",
    "name_en": "Ganita vimaya~n~naൾ ",
    "author": "സി പി മുഹമ്മദ്",
    "stockNumber": 1911,
    "price": null,
    "image": "books/1911.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പേർഷ്യൻ നാടോടി കഥകൾ ",
    "name_en": "Peർshyaൻ naatoti kathakaൾ ",
    "author": "പി കെ ൻ പണിക്കർ",
    "stockNumber": 1912,
    "price": null,
    "image": "books/1912.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഘജ് രാഹോ ",
    "name_en": "Ghaj raaho ",
    "author": "രാധാകൃഷ്ണൻ വേലായുധൻ",
    "stockNumber": 1913,
    "price": null,
    "image": "books/1913.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒറ്റപ്പെട്ടവരുടെ റയിൽവേസ്റ്റേഷൻ ",
    "name_en": "Òrrappèttavarutè rayiൽvesrreshaൻ ",
    "author": "ഗോകുൽ രാജ്",
    "stockNumber": 1914,
    "price": null,
    "image": "books/1914.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലാല ",
    "name_en": "Malaala ",
    "author": 1.0,
    "stockNumber": 1915,
    "price": null,
    "image": "books/1915.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലക്ഷ്യങ്ങൾ ",
    "name_en": "Lakshya~n~naൾ ",
    "author": "ബിജു റൊക്കി",
    "stockNumber": 1916,
    "price": null,
    "image": "books/1916.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ക്ലിയോപാട്രയുടെ നാട്ടിൽ ",
    "name_en": "Kliyopaatrayutè naattiൽ ",
    "author": "എസ് കെ പൊറ്റക്കാട്",
    "stockNumber": 1917,
    "price": null,
    "image": "books/1917.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "താക്കോൽ ",
    "name_en": "Taakkoൽ ",
    "author": "ആനന്ദ്",
    "stockNumber": 1918,
    "price": null,
    "image": "books/1918.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മറുകര ",
    "name_en": "Marukara ",
    "author": "സിവി ബാലകൃഷ്‌ണൻ",
    "stockNumber": 1919,
    "price": null,
    "image": "books/1919.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജീവിതം എന്ന ദിവ്യാനുഭവം ",
    "name_en": "Jeevitam ènna divyaanubhavam ",
    "author": "വി പി ഗംഗാധരൻ",
    "stockNumber": 1920,
    "price": null,
    "image": "books/1920.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അന്ധകാര നാഴി",
    "name_en": "Andhakaara naazhi",
    "author": "ഇ സന്തോഷ് കുമാർ",
    "stockNumber": 1921,
    "price": null,
    "image": "books/1921.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചെറി മരം ",
    "name_en": "Chèri maram ",
    "author": "റെക്സിൻ ബോണ്ട്",
    "stockNumber": 1922,
    "price": null,
    "image": "books/1922.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുത്തശ്ശി കഥകൾ ",
    "name_en": "Muttashshi kathakaൾ ",
    "author": "കമൽ അകമ്പാടം",
    "stockNumber": 1924,
    "price": null,
    "image": "books/1924.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിസ്മയ പുലരി ",
    "name_en": "Vismaya pulari ",
    "author": "ടോം മാത്യു ",
    "stockNumber": 1923,
    "price": null,
    "image": "books/1923.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മരങ്ങൾ  നട്ട മനുഷ്യൻ ",
    "name_en": "Mara~n~naൾ  natta manushyaൻ ",
    "author": "ഴാൻ ജോനോ ",
    "stockNumber": 1925,
    "price": null,
    "image": "books/1925.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉറുമ്പ് കഥകൾ  ",
    "name_en": "Urump kathakaൾ  ",
    "author": "കെ സുജിത് കുമാർ ",
    "stockNumber": 1926,
    "price": null,
    "image": "books/1926.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രസകരമായ മുല്ല കഥകൾ ",
    "name_en": "Rasakaramaaya mulla kathakaൾ ",
    "author": "മലയത്ത് അപ്പുണ്ണി ",
    "stockNumber": 1927,
    "price": null,
    "image": "books/1927.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചെമ്പനീർ പൂക്കൾ ",
    "name_en": "Chèmpaneeർ pookkaൾ ",
    "author": "സീനാഷ് ",
    "stockNumber": 1928,
    "price": null,
    "image": "books/1928.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റഷ്യൻ നാടോടി കഥകൾ ",
    "name_en": "Rashyaൻ naatoti kathakaൾ ",
    "author": "ബി എം സുഹറ ",
    "stockNumber": 1929,
    "price": null,
    "image": "books/1929.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുമാരനാശാന്റെ ബാല കാവിതകൾ ",
    "name_en": "Kumaaranaashaanrè baala kaavitakaൾ ",
    "author": "കുമാരനാശാൻ ",
    "stockNumber": 1930,
    "price": null,
    "image": "books/1930.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുന്നോളം ചിന്തിച്ച കുരുന്നുകൾ ",
    "name_en": "Kunnolam chintichcha kurunnukaൾ ",
    "author": "ബഷീർ ചുങ്കത്തറ",
    "stockNumber": 1931,
    "price": null,
    "image": "books/1931.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഓലച്ചൂട്ടിന്റെ വെളിച്ചം ",
    "name_en": "Olachchoottinrè vèlichcham ",
    "author": "പി കെ ഗോപി ",
    "stockNumber": 1932,
    "price": null,
    "image": "books/1932.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തിത്തിമി തകതിമി ",
    "name_en": "Tittimi takatimi ",
    "author": "ശ്രീജിത്ത് പെരുന്തത്തച്ഛൻ ",
    "stockNumber": 1933,
    "price": null,
    "image": "books/1933.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അവർ മൂവരും മഴവില്ലും ",
    "name_en": "Avaർ moovarum mazhavillum ",
    "author": "രഘുനാഥ് പലേരി ",
    "stockNumber": 1934,
    "price": null,
    "image": "books/1934.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടികളുടെ ചന്ദ്രയാൻ ",
    "name_en": "Kuttikalutè chandrayaaൻ ",
    "author": "മാത്യുസ് ആർപ്പുകര ",
    "stockNumber": 1935,
    "price": null,
    "image": "books/1935.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഗാന്ധിജിയുടെ അവസാന ദിനങ്ങൾ ",
    "name_en": "Gaandhijiyutè avasaana dina~n~naൾ ",
    "author": "എസ് ജയചന്ദ്രന് നായർ ",
    "stockNumber": 1936,
    "price": null,
    "image": "books/1936.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വെള്ളി മൂങ്ങ ",
    "name_en": "Vèlli moo~n~na ",
    "author": "ജി ആർ ഇന്ദുഗോപൻ ",
    "stockNumber": 1937,
    "price": null,
    "image": "books/1937.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മാധ്യമം വിനിമയവും വിചിന്തനവും ",
    "name_en": "Maadhyamam vinimayavum vichintanavum ",
    "author": "ഡോ ജൈനിമോൾ കെ വി ",
    "stockNumber": 1938,
    "price": null,
    "image": "books/1938.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചേതി ",
    "name_en": "Cheti ",
    "author": "സന്ധ്യ എൻ പി ",
    "stockNumber": 1939,
    "price": null,
    "image": "books/1939.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അമ്മയുടെ ഓർമപുസ്തകം ",
    "name_en": "Ammayutè oർmapustakam ",
    "author": "മാധവൻ കുറച്ചേരി ",
    "stockNumber": 1940,
    "price": null,
    "image": "books/1940.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആബിത് വീണ്ടും വന്നപ്പോൾ ",
    "name_en": "Aabit veentum vannappoൾ ",
    "author": "ബാനു മുസ്താക്ക് ",
    "stockNumber": 1941,
    "price": null,
    "image": "books/1941.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മതേതര സംസ്കാരം ഭാഷയും ഭാവനയും ",
    "name_en": "Matetara samskaaram bhaashayum bhaavanayum ",
    "author": "കെ മനോഹരൻ ",
    "stockNumber": 1942,
    "price": null,
    "image": "books/1942.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭരണഘടനയുടെ കാവലാൾ ",
    "name_en": "Bharanaghatanayutè kaavalaaൾ ",
    "author": "തീസ്ത സെതൽവാദ് ",
    "stockNumber": 1943,
    "price": null,
    "image": "books/1943.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഓർമചീളുകൾ ",
    "name_en": "Oർmacheelukaൾ ",
    "author": "യു എ ഖാദർ ",
    "stockNumber": 1944,
    "price": null,
    "image": "books/1944.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അമ്മ ",
    "name_en": "Amma ",
    "author": "ഗ്രസിയ ഡിലെഡ്ഡ",
    "stockNumber": 1945,
    "price": null,
    "image": "books/1945.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രണ്ട് സംഭാഷങ്ങൾ ",
    "name_en": "Rant sambhaasha~n~naൾ ",
    "author": "കെ അരവിന്താക്ഷൻ ",
    "stockNumber": 1946,
    "price": null,
    "image": "books/1946.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രണയകാലം ",
    "name_en": "Pranayakaalam ",
    "author": "ഖലീൽ ജിബ്രാൻ",
    "stockNumber": 1947,
    "price": null,
    "image": "books/1947.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉന്മദി ",
    "name_en": "Unmadi ",
    "author": "ഖലീൽ ജിബ്രാൻ",
    "stockNumber": 1948,
    "price": null,
    "image": "books/1948.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അനുഭവം ഓർമ യാത്ര ",
    "name_en": "Anubhavam oർma yaatra ",
    "author": "ശിഹാബുദ്ദീൻ പോയത്തുംകടവ് ",
    "stockNumber": 1949,
    "price": null,
    "image": "books/1949.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മഹാത്മജി മാനവ ഹൃദയങ്ങളിൽ ",
    "name_en": "Mahaatmaji maanava hrridaya~n~naliൽ ",
    "author": "എസ് ഡി ചുള്ളിമാനൂർ ",
    "stockNumber": 1950,
    "price": null,
    "image": "books/1950.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കോട്ടയം ഡയറി ",
    "name_en": "Kottayam dayari ",
    "author": "സ്മിത ഗിരീഷ് ",
    "stockNumber": 1951,
    "price": null,
    "image": "books/1951.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അമ്പിളിത്താലവും കുഞ്ഞാടും ",
    "name_en": "Ampilittaalavum ku~n~naatum ",
    "author": "രാമരാജ് വേളാപുരം ",
    "stockNumber": 1952,
    "price": null,
    "image": "books/1952.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിക്രമതിഥ്യ കഥകൾ ",
    "name_en": "Vikramatithya kathakaൾ ",
    "author": "എം ജയകൃഷ്ണന് ",
    "stockNumber": 1953,
    "price": null,
    "image": "books/1953.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചീമേനിയിലെ കിരാതപർവ്വം ",
    "name_en": "Cheemeniyilè kiraatapaർvvam ",
    "author": "കൈനി രാജൻ ",
    "stockNumber": 1954,
    "price": null,
    "image": "books/1954.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പൊസോളിഗേ സമരചരിത്രം ",
    "name_en": "Pòsolige samaracharitram ",
    "author": "സി ജി മാത്യു ",
    "stockNumber": 1955,
    "price": null,
    "image": "books/1955.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആടുകളെ വളർത്തുന്ന വായനക്കാരി ",
    "name_en": "Aatukalè valaർttunna vaayanakkaari ",
    "author": "യൂ കെ കുമാരൺ ",
    "stockNumber": 1956,
    "price": null,
    "image": "books/1956.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹോജ കഥകൾ ",
    "name_en": "Hoja kathakaൾ ",
    "author": "ഡോ വി എം ഡി നമ്പൂതിരി ",
    "stockNumber": 1957,
    "price": null,
    "image": "books/1957.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുസൃതി കുഞ്ഞുണ്ണി ",
    "name_en": "Kusrriti ku~n~nunni ",
    "author": "കിളിരൂര് രാധാകൃഷ്ണൻ ",
    "stockNumber": 1958,
    "price": null,
    "image": "books/1958.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മണിയൻ പൂച്ചയുടെ കൊട്ടാരം ",
    "name_en": "Maniyaൻ poochchayutè kòttaaram ",
    "author": "രാമരാജ് വേളാപുരം ",
    "stockNumber": 1959,
    "price": null,
    "image": "books/1959.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റഷ്യൻ നാടോടി കഥകൾ ",
    "name_en": "Rashyaൻ naatoti kathakaൾ ",
    "author": "പ്രിയ ദിനേശ് ",
    "stockNumber": 1960,
    "price": null,
    "image": "books/1960.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അവൾ ",
    "name_en": "Avaൾ ",
    "author": "ഉറൂബ് ",
    "stockNumber": 1961,
    "price": null,
    "image": "books/1961.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ക എന്ന കാക്കയും കൂ എന്ന കുയിലും ",
    "name_en": "Ka ènna kaakkayum koo ènna kuyilum ",
    "author": "ബീരാൻ കുട്ടി ",
    "stockNumber": 1962,
    "price": null,
    "image": "books/1962.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അമ്മമ്മ ",
    "name_en": "Ammamma ",
    "author": "പി സുരേന്ദ്രൻ ",
    "stockNumber": 1963,
    "price": null,
    "image": "books/1963.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജാക്കും ബീൻസ്റ്റാക്കും ",
    "name_en": "Jaakkum beeൻsrraakkum ",
    "author": "കനക രാജൻ ",
    "stockNumber": 1964,
    "price": null,
    "image": "books/1964.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തെന്നാലിരാമനും കള്ളന്മാരും ",
    "name_en": "Tènnaaliraamanum kallanmaarum ",
    "author": "കനക രാജൻ ",
    "stockNumber": 1965,
    "price": null,
    "image": "books/1965.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചെമ്പൻപരുന്തും ഉണ്ണികുട്ടനും ",
    "name_en": "Chèmpaൻparuntum unnikuttanum ",
    "author": "മാക്സിമിന് നെട്ടൂർ ",
    "stockNumber": 1966,
    "price": null,
    "image": "books/1966.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തത്തമ്മയും പൂച്ചമ്മയും ",
    "name_en": "Tattammayum poochchammayum ",
    "author": "മുഹമ്മ ശശിധരപണിക്കർ ",
    "stockNumber": 1967,
    "price": null,
    "image": "books/1967.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പുതുമ്പിയുടെ സ്വർഗ്ഗയാത്ര ",
    "name_en": "Putumpiyutè svaർggayaatra ",
    "author": "രാജി കല്ലൂർ ",
    "stockNumber": 1968,
    "price": null,
    "image": "books/1968.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടികളക്കുള്ള രസകരമായ കഥകൾ ",
    "name_en": "Kuttikalakkulla rasakaramaaya kathakaൾ ",
    "author": "സത്യൻ താന്നിപ്പുഴ ",
    "stockNumber": 1969,
    "price": null,
    "image": "books/1969.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരള നവോദ്ധാനം പി എസ് സി ",
    "name_en": "Kerala navoddhaanam pi ès si ",
    "author": "രാജശ്രീ എം ജി ",
    "stockNumber": 1970,
    "price": null,
    "image": "books/1970.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എന്റെ പ്രിയപ്പെട്ട കഥകൾ ",
    "name_en": "Ènrè priyappètta kathakaൾ ",
    "author": "യൂ എ ഖാദർ ",
    "stockNumber": 1971,
    "price": null,
    "image": "books/1971.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എന്റെ പ്രിയപ്പെട്ട കഥകൾ ",
    "name_en": "Ènrè priyappètta kathakaൾ ",
    "author": "സേതു ",
    "stockNumber": 1972,
    "price": null,
    "image": "books/1972.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തൃഷ്ണ ",
    "name_en": "Trrishna ",
    "author": "പെരുമ്പടവം ",
    "stockNumber": 1973,
    "price": null,
    "image": "books/1973.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കിഴവനും കടലും ",
    "name_en": "Kizhavanum katalum ",
    "author": "കെ പി ബാലചന്ദ്രൻ ",
    "stockNumber": 1974,
    "price": null,
    "image": "books/1974.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പറയിപെറ്റ പന്തിരുകുലം ",
    "name_en": "Parayipèrra pantirukulam ",
    "author": "കെ വി ശ്രീദേവി ",
    "stockNumber": 1975,
    "price": null,
    "image": "books/1975.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നൃത്തം ചെയ്യുന്ന കുടകൾ ",
    "name_en": "Nrrittam chèyyunna kutakaൾ ",
    "author": "എം മുകുന്ദൻ ",
    "stockNumber": 1976,
    "price": null,
    "image": "books/1976.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മരുന്ന് ",
    "name_en": "Marunn ",
    "author": "പുനത്തിൽ കുഞ്ഞബ്ദുള്ള  ",
    "stockNumber": 1977,
    "price": null,
    "image": "books/1977.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഡാവിഞ്ചി കോഡ് ",
    "name_en": "Daavi~nchi kod ",
    "author": "ഡാൻ ബ്രൌൺ ",
    "stockNumber": 1978,
    "price": null,
    "image": "books/1978.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പൊന്നി ",
    "name_en": "Pònni ",
    "author": "മലയാറ്റൂർ ",
    "stockNumber": 1979,
    "price": null,
    "image": "books/1979.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആയുസ്സിന്റെ പുസ്തകം ",
    "name_en": "Aayussinrè pustakam ",
    "author": "സി വി ബാലകൃഷ്ണൻ",
    "stockNumber": 1980,
    "price": null,
    "image": "books/1980.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മരുഭൂമികൾ ഉണ്ടാകുന്നത് ",
    "name_en": "Marubhoomikaൾ untaakunnat ",
    "author": "ആനന്ദ് ",
    "stockNumber": 1981,
    "price": null,
    "image": "books/1981.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പച്ച മഞ്ഞ ചുവപ്പ് ",
    "name_en": "Pachcha ma~n~na chuvapp ",
    "author": "ടി ഡി രാധാകൃഷ്ണൻ ",
    "stockNumber": 1982,
    "price": null,
    "image": "books/1982.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സുഗന്ധി എന്ന ആണ്ടാൾ ദേവനായകി ",
    "name_en": "Sugandhi ènna aantaaൾ devanaayaki ",
    "author": "ടി ഡി രാധാകൃഷ്ണൻ ",
    "stockNumber": 1983,
    "price": null,
    "image": "books/1983.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പെണ്ണും ചെറുക്കനും ",
    "name_en": "Pènnum chèrukkanum ",
    "author": "ഉണ്ണി ആർ ",
    "stockNumber": 1984,
    "price": null,
    "image": "books/1984.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പോസ്റ്റ്മോർടം ടേബിൾ ",
    "name_en": "Posrrmoർtam tebiൾ ",
    "author": "ഡോ ഷെറലി വാസു ",
    "stockNumber": 1985,
    "price": null,
    "image": "books/1985.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഏകാന്തതയുടെ 100 വര്‍ഷങ്ങൾ ",
    "name_en": "Ekaantatayutè 100 var‍sha~n~naൾ ",
    "author": "ഡോ എസ് വേലaയുദ്ധൻ ",
    "stockNumber": 1986,
    "price": null,
    "image": "books/1986.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹിപ്പി ",
    "name_en": "Hippi ",
    "author": "പൗലോ കൊയ്‌ലോ",
    "stockNumber": 1987,
    "price": null,
    "image": "books/1987.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശാമ്യ മാധവം ",
    "name_en": "Shaamya maadhavam ",
    "author": "പ്രഭാവർമ ",
    "stockNumber": 1988,
    "price": null,
    "image": "books/1988.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പോർട്ടോബെല്ലോയിലെ മന്ത്രവാദിനി ",
    "name_en": "Poർttobèlloyilè mantravaadini ",
    "author": "പൗലോ കൊയ്‌ലോ",
    "stockNumber": 1989,
    "price": null,
    "image": "books/1989.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അപ്പം ചുടുന്ന കുങ്കിയമ്മ ",
    "name_en": "Appam chutunna ku~nkiyamma ",
    "author": "എം മുകുന്ദൻ ",
    "stockNumber": 1990,
    "price": null,
    "image": "books/1990.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അമ്മുവിന്റെ ആട്ടിൻകുട്ടിയും ",
    "name_en": "Ammuvinrè aattiൻkuttiyum ",
    "author": "ആർ രാമദാസ് ",
    "stockNumber": 1991,
    "price": null,
    "image": "books/1991.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൊതിയൻ കാക്ക ",
    "name_en": "Kòtiyaൻ kaakka ",
    "author": "അഷിത ",
    "stockNumber": 1992,
    "price": null,
    "image": "books/1992.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കൊറ്റിയും കുറുക്കനും",
    "name_en": "Kòrriyum kurukkanum",
    "author": "അഷിത ",
    "stockNumber": 1993,
    "price": null,
    "image": "books/1993.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുഞ്ഞുഞണ്ടും അമ്മ ഞണ്ടും ",
    "name_en": "Ku~n~nu~nantum amma ~nantum ",
    "author": "അഷിത ",
    "stockNumber": 1994,
    "price": null,
    "image": "books/1994.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കഥയിറങ്ങി വരുന്നവരാര് ",
    "name_en": "Kathayira~n~ni varunnavaraar ",
    "author": "നിതീഷ് നടേരി ",
    "stockNumber": 1995,
    "price": null,
    "image": "books/1995.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദയ എന്ന പെൺകുട്ടി ",
    "name_en": "Daya ènna pèൺkutti ",
    "author": "എം ടി ",
    "stockNumber": 1996,
    "price": null,
    "image": "books/1996.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുഞ്ഞാവ ",
    "name_en": "Ku~n~naava ",
    "author": "കെ ടി ബാബുരാജ് ",
    "stockNumber": 1997,
    "price": null,
    "image": "books/1997.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടലത്തീരത്ത് ",
    "name_en": "Katalatteeratt ",
    "author": "ഓ വി വിജയൻ ",
    "stockNumber": 1998,
    "price": null,
    "image": "books/1998.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മലയാള അക്ഷരമാല ",
    "name_en": "Malayaala aksharamaala ",
    "author": null,
    "stockNumber": 1999,
    "price": null,
    "image": "books/1999.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരു പോലീസ് സർജന്റെ ഓർമക്കുറിപ്പുകൾ ",
    "name_en": "Òru polees saർjanrè oർmakkurippukaൾ ",
    "author": "ഡോ വി ഉമാദത്തൻ ",
    "stockNumber": 2000,
    "price": null,
    "image": "books/2000.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദൈവത്തിന്റെ ചാരന്മാർ ",
    "name_en": "Daivattinrè chaaranmaaർ ",
    "author": "ജോസഫ് അന്നക്കുട്ടി ജോസ് ",
    "stockNumber": 2001,
    "price": null,
    "image": "books/2001.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കളിവീട് ",
    "name_en": "Kaliveet ",
    "author": "എം ടി ",
    "stockNumber": 2002,
    "price": null,
    "image": "books/2002.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തേന്മാവ് ",
    "name_en": "Tenmaav ",
    "author": "ബഷീർ ",
    "stockNumber": 2003,
    "price": null,
    "image": "books/2003.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "MANGO CHRISTMAS CAROL",
    "name_en": "Maango chreestmaas caarol",
    "author": "GILL THAVNER",
    "stockNumber": 2004,
    "price": null,
    "image": "books/2004.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "MANGO CLASSICS OLIVER TWIST",
    "name_en": "Maango claasseecs oleever tweest",
    "author": "ANNA KIRWAN",
    "stockNumber": 2005,
    "price": null,
    "image": "books/2005.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രമണീയം ഈ ജീവിതം ",
    "name_en": "Ramaneeyam ee jeevitam ",
    "author": "ബോബി ജോസ് കാട്ടിക്കാട് ",
    "stockNumber": 2006,
    "price": null,
    "image": "books/2006.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കോ മാല ",
    "name_en": "Ko maala ",
    "author": "സന്തോഷ് എച്ചിക്കാനം ",
    "stockNumber": 2007,
    "price": null,
    "image": "books/2007.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തിരുട്ട് നഗരം ",
    "name_en": "Tirutt nagaram ",
    "author": "ടി പവിത്രൻ ",
    "stockNumber": 2008,
    "price": null,
    "image": "books/2008.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഓർമകളുടെ നിഴലാളങ്ങൾ ",
    "name_en": "Oർmakalutè nizhalaala~n~naൾ ",
    "author": "ബിന്ദു മരങ്ങാട് ",
    "stockNumber": 2009,
    "price": null,
    "image": "books/2009.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പി പി രാമചന്ദ്രന്റെ കവിതകൾ ",
    "name_en": "Pi pi raamachandranrè kavitakaൾ ",
    "author": "പി പി രാമചന്ദ്രൻ ",
    "stockNumber": 2010,
    "price": null,
    "image": "books/2010.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അഭിമാന പൂർവ്വം ",
    "name_en": "Abhimaana pooർvvam ",
    "author": "അഡ്വ പി അപ്പുക്കുട്ടൻ ",
    "stockNumber": 2011,
    "price": null,
    "image": "books/2011.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഖബർ ",
    "name_en": "Khabaർ ",
    "author": "കെ ആർ മീര",
    "stockNumber": 2012,
    "price": null,
    "image": "books/2012.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അധികാര വികേന്ദ്രീകരണത്തെ പറ്റി ",
    "name_en": "Adhikaara vikendreekaranattè parri ",
    "author": "ഇ എം എസ് ",
    "stockNumber": 2013,
    "price": null,
    "image": "books/2013.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഈ ചൂട്ട് ഓന്ന് കത്തിച്ചുതര്വോ  ",
    "name_en": "Ee choott onn kattichchutarvo  ",
    "author": "സുനിൽ കെ ചെറിയാൻ ",
    "stockNumber": 2014,
    "price": null,
    "image": "books/2014.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "1001 DAYS",
    "name_en": "1001 daays",
    "author": "T PAVITHRAN",
    "stockNumber": 2015,
    "price": null,
    "image": "books/2015.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നാടകങ്ങൾ ",
    "name_en": "Naataka~n~naൾ ",
    "author": "എ ശാന്തകുമാർ ",
    "stockNumber": 2016,
    "price": null,
    "image": "books/2016.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നങ്ങേലിയും മാതേവനും ",
    "name_en": "Na~n~neliyum maatevanum ",
    "author": "രാജി കല്ലൂർ ",
    "stockNumber": 2017,
    "price": null,
    "image": "books/2017.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പൂവൻ കൂവാതായപ്പോൾ",
    "name_en": "Poovaൻ koovaataayappoൾ",
    "author": "മടവൂർ ശശി ",
    "stockNumber": 2018,
    "price": null,
    "image": "books/2018.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കിങ് ലിയൽ ",
    "name_en": "Ki~n liyaൽ ",
    "author": "വില്ല്യം ഷേക്സ്പിയർ ",
    "stockNumber": 2019,
    "price": null,
    "image": "books/2019.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "SLEEPING BEAUTY",
    "name_en": "Sleepeeng beaaooty",
    "author": "BEENA GEORGE",
    "stockNumber": 2020,
    "price": null,
    "image": "books/2020.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കീട്ടുന്നതിൽ പാതി ",
    "name_en": "Keettunnatiൽ paati ",
    "author": "മടവൂർ ശശി ",
    "stockNumber": 2021,
    "price": null,
    "image": "books/2021.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സംഗീതപ്രിയനായ കഴുത ",
    "name_en": "Samgeetapriyanaaya kazhuta ",
    "author": "കനകാ രാഘവൻ ",
    "stockNumber": 2022,
    "price": null,
    "image": "books/2022.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കോഴിയും കുറുക്കനും ",
    "name_en": "Kozhiyum kurukkanum ",
    "author": "മടവൂർ ശശി ",
    "stockNumber": 2023,
    "price": null,
    "image": "books/2023.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുഞ്ഞുണ്ണിയും വല്ല്യുണ്ണിയും  ",
    "name_en": "Ku~n~nunniyum vallyunniyum  ",
    "author": "ഹരീഷ് ആർ നമ്പൂതിരിപ്പാട് ",
    "stockNumber": 2024,
    "price": null,
    "image": "books/2024.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബുദ്ധിയാണ് ശക്തി ",
    "name_en": "Buddhiyaan shakti ",
    "author": "മടവൂർ ശശി ",
    "stockNumber": 2025,
    "price": null,
    "image": "books/2025.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചെമ്പൻ കുരങ്ങും ചാരൻ കുരങ്ങും  ",
    "name_en": "Chèmpaൻ kura~n~num chaaraൻ kura~n~num  ",
    "author": "വർഗീസ് അരിമ്പൂർ ",
    "stockNumber": 2026,
    "price": null,
    "image": "books/2026.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കമ്പ്യൂട്ടർ ഡിഷിനറി ",
    "name_en": "Kampyoottaർ dishinari ",
    "author": "ജോൺസൺ വേലുപ്പാടം ",
    "stockNumber": 2027,
    "price": null,
    "image": "books/2027.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ലോകരാഷ്ട്രങ്ങൾ ",
    "name_en": "Lokaraashtra~n~naൾ ",
    "author": "തോംസൺ പി സി ",
    "stockNumber": 2028,
    "price": null,
    "image": "books/2028.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "SOLAR SYSTEM",
    "name_en": "Solaar system",
    "author": "JILI JAMAMUS",
    "stockNumber": 2029,
    "price": null,
    "image": "books/2029.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എടലാക്കുടി പ്രണയരേഖകൾ ",
    "name_en": "Ètalaakkuti pranayarekhakaൾ ",
    "author": "കെ വി മോഹൻ കുമാർ",
    "stockNumber": 2030,
    "price": null,
    "image": "books/2030.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തനിച്ച് നനഞ മഴകൾ ",
    "name_en": "Tanichch nana~na mazhakaൾ ",
    "author": "സുധകുട്ടി",
    "stockNumber": 2031,
    "price": null,
    "image": "books/2031.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശ്രീനാരായണഗുരുവിന്റെ ആത്മദർശനം ",
    "name_en": "Shreenaaraayanaguruvinrè aatmadaർshanam ",
    "author": "ഡോ ശശികുമാർ പുറമേരി ",
    "stockNumber": 2032,
    "price": null,
    "image": "books/2032.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സതി കല ",
    "name_en": "Sati kala ",
    "author": "ഡോ എ എം ശ്രീധരൻ ",
    "stockNumber": 2033,
    "price": null,
    "image": "books/2033.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്ദ്യയുടെ സ്വപ്നചിറകുകൾ ",
    "name_en": "Indyayutè svapnachirakukaൾ ",
    "author": "സി അനൂപ് ",
    "stockNumber": 2034,
    "price": null,
    "image": "books/2034.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "THE TEMPEST",
    "name_en": "The tempest",
    "author": "BEENA GEORGE",
    "stockNumber": 2035,
    "price": null,
    "image": "books/2035.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്വപ്നത്തിലെ കടം ",
    "name_en": "Svapnattilè katam ",
    "author": "കനക രാഘവൻ ",
    "stockNumber": 2036,
    "price": null,
    "image": "books/2036.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉറങ്ങുന്ന സുന്ദരി ",
    "name_en": "Ura~n~nunna sundari ",
    "author": "ബീന ജോര്‍ജ്ജ്",
    "stockNumber": 2037,
    "price": null,
    "image": "books/2037.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആനയും സിംഹവും ",
    "name_en": "Aanayum simhavum ",
    "author": "കനക രാഘവൻ ",
    "stockNumber": 2038,
    "price": null,
    "image": "books/2038.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വെനീസിലെ വ്യാപാരി ",
    "name_en": "Vèneesilè vyaapaari ",
    "author": "ബീന ജോര്‍ജ്ജ്",
    "stockNumber": 2039,
    "price": null,
    "image": "books/2039.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "താഴ്മയുടെ ഫലം ",
    "name_en": "Taazhmayutè phalam ",
    "author": "ബീന ജോര്‍ജ്ജ്",
    "stockNumber": 2040,
    "price": null,
    "image": "books/2040.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രസകരമായ ബാലകഥകൾ ",
    "name_en": "Rasakaramaaya baalakathakaൾ ",
    "author": null,
    "stockNumber": 2041,
    "price": null,
    "image": "books/2041.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചിന്നുവിന്റെ പാട്ടുകുപ്പായം ",
    "name_en": "Chinnuvinrè paattukuppaayam ",
    "author": "ഹരീഷ് ആർ നമ്പൂതിരിപ്പാട് ",
    "stockNumber": 2042,
    "price": null,
    "image": "books/2042.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഭംഗിയില്ലാത്ത താറാകുഞ്ഞ്",
    "name_en": "Bhamgiyillaatta taaraaku~n~n",
    "author": "ബീന ജോര്‍ജ്ജ്",
    "stockNumber": 2043,
    "price": null,
    "image": "books/2043.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അലാവുദ്ദീനും അത്ഭുതവിളക്കും ",
    "name_en": "Alaavuddeenum atbhutavilakkum ",
    "author": "ബീന ജോര്‍ജ്ജ്",
    "stockNumber": 2044,
    "price": null,
    "image": "books/2044.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പരുന്തിനെ തോല്‍പ്പിച്ച കുട്ടി",
    "name_en": "Paruntinè tol‍ppichcha kutti",
    "author": "കനക രാഘവൻ ",
    "stockNumber": 2045,
    "price": null,
    "image": "books/2045.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്വർണ്ണത്താടി ",
    "name_en": "Svaർnnattaati ",
    "author": "മടവൂർ ശശി ",
    "stockNumber": 2046,
    "price": null,
    "image": "books/2046.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്വർണ്ണമാമ്പഴം ",
    "name_en": "Svaർnnamaampazham ",
    "author": "കനക രാഘവൻ ",
    "stockNumber": 2047,
    "price": null,
    "image": "books/2047.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സീനാഷയുടെ പുസ്തകം ",
    "name_en": "Seenaashayutè pustakam ",
    "author": "സീനാഷ ",
    "stockNumber": 2048,
    "price": null,
    "image": "books/2048.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വെളുത്ത നിലാവ് ",
    "name_en": "Vèlutta nilaav ",
    "author": "ബാലൻ മേലൂർ ",
    "stockNumber": 2049,
    "price": null,
    "image": "books/2049.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉറങ്ങുന്ന സുന്ദരി ",
    "name_en": "Ura~n~nunna sundari ",
    "author": "ബീന ജോര്‍ജ്ജ്",
    "stockNumber": 2050,
    "price": null,
    "image": "books/2050.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പൂവൻ കൂവാതായപ്പോൾ",
    "name_en": "Poovaൻ koovaataayappoൾ",
    "author": "മടവൂർ ശശി ",
    "stockNumber": 2051,
    "price": null,
    "image": "books/2051.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചെമ്പൻ കുരങ്ങും ചാരൻ കുരങ്ങും  ",
    "name_en": "Chèmpaൻ kura~n~num chaaraൻ kura~n~num  ",
    "author": "വർഗ്ഗീസ് അരിമ്പൂർ ",
    "stockNumber": 2052,
    "price": null,
    "image": "books/2052.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രശസ്ത സാഹിത്യകാരന്മാർ",
    "name_en": "Prashasta saahityakaaranmaaർ",
    "author": "ജിജി ജെയിംസ് ",
    "stockNumber": 2053,
    "price": null,
    "image": "books/2053.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചാച്ചാജി കഥകൾ ",
    "name_en": "Chaachchaaji kathakaൾ ",
    "author": "സവ്യ സജി ",
    "stockNumber": 2054,
    "price": null,
    "image": "books/2054.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുട്ടികൾക്ക്'കേരള ചരിത്രം  ",
    "name_en": "Kuttikaൾkk'kerala charitram  ",
    "author": "ജോർജ്ജ് ഇമ്മട്ടി ",
    "stockNumber": 2055,
    "price": null,
    "image": "books/2055.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "101 ഈസോപ്പ് കഥകൾ ",
    "name_en": "101 eesopp kathakaൾ ",
    "author": "ജോർജ്ജ് ഇമ്മട്ടി ",
    "stockNumber": 2056,
    "price": null,
    "image": "books/2056.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രസംഗ കല കുട്ടികൾക്ക് ",
    "name_en": "Prasamga kala kuttikaൾkk ",
    "author": "ഷാജി മാലിപ്പാറ ",
    "stockNumber": 2057,
    "price": null,
    "image": "books/2057.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിലക്കാനുണ്ട് കഴുതയെ ",
    "name_en": "Vilakkaanunt kazhutayè ",
    "author": "മടവൂർ ശശി ",
    "stockNumber": 2058,
    "price": null,
    "image": "books/2058.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കറുത്ത താടിയും വെളുത്ത താടിയും ",
    "name_en": "Karutta taatiyum vèlutta taatiyum ",
    "author": "കനക രാഘവൻ ",
    "stockNumber": 2059,
    "price": null,
    "image": "books/2059.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ദൈവവും രാജാവും ",
    "name_en": "Daivavum raajaavum ",
    "author": "കനക രാഘവൻ ",
    "stockNumber": 2060,
    "price": null,
    "image": "books/2060.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചെമ്പൻ കുരങ്ങും ചാരൻ കുരങ്ങും  ",
    "name_en": "Chèmpaൻ kura~n~num chaaraൻ kura~n~num  ",
    "author": "വർഗ്ഗീസ് അരിമ്പൂർ ",
    "stockNumber": 2061,
    "price": null,
    "image": "books/2061.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ശലഭങ്ങളുടെ നൃത്തം ",
    "name_en": "Shalabha~n~nalutè nrrittam ",
    "author": "ബീന ജോര്‍ജ്ജ്",
    "stockNumber": 2062,
    "price": null,
    "image": "books/2062.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "റാം c/o ആനന്ദി ",
    "name_en": "Raam c/o aanandi ",
    "author": "അഖിൽ പി ധർമജൻ ",
    "stockNumber": 2063,
    "price": null,
    "image": "books/2063.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അടിയോർ മിശിഹ എന്ന നോവൽ ",
    "name_en": "Atiyoർ mishiha ènna novaൽ ",
    "author": "വിനോയ് തോമസ് ",
    "stockNumber": 2064,
    "price": null,
    "image": "books/2064.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഡിറ്റ്ക്ടീവ്  പ്രഭാകരൻ ",
    "name_en": "Dirrkteev  prabhaakaraൻ ",
    "author": "ജി ആര് ഇന്ദുഗോപൻ ",
    "stockNumber": 2065,
    "price": null,
    "image": "books/2065.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രേമനഗരം ",
    "name_en": "Premanagaram ",
    "author": "ബിനീഷ് പുതുപ്പണം ",
    "stockNumber": 2066,
    "price": null,
    "image": "books/2066.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാട്ടൂര് കടവ് ",
    "name_en": "Kaattoor katav ",
    "author": "അശോകൻ ചരുവിൽ ",
    "stockNumber": 2067,
    "price": null,
    "image": "books/2067.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എന്റെ അരുമായായ പക്ഷിക്ക് ",
    "name_en": "Ènrè arumaayaaya pakshikk ",
    "author": "ജിസ്മ ഫൈസ് ",
    "stockNumber": 2068,
    "price": null,
    "image": "books/2068.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കഞ്ചാവ് ",
    "name_en": "Ka~nchaav ",
    "author": "ലിജീഷ് കുമാർ ",
    "stockNumber": 2069,
    "price": null,
    "image": "books/2069.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മിസ്റ്ററി @ മാമംഗലം ",
    "name_en": "Misrrari @ maamamgalam ",
    "author": "അമിത് കുമാർ ",
    "stockNumber": 2070,
    "price": null,
    "image": "books/2070.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാലാപാശം ",
    "name_en": "Kaalaapaasham ",
    "author": "പ്രഭാവർമ ",
    "stockNumber": 2071,
    "price": null,
    "image": "books/2071.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാകപുരം ",
    "name_en": "Kaakapuram ",
    "author": "റിഹാൻ റാഷിദ് ",
    "stockNumber": 2072,
    "price": null,
    "image": "books/2072.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "THINK AND GROW RICH",
    "name_en": "Theenk aand grow reech",
    "author": "NAPOLEON HILL",
    "stockNumber": 2073,
    "price": null,
    "image": "books/2073.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മീരാസാധു ",
    "name_en": "Meeraasaadhu ",
    "author": "കെ ആർ മീര ",
    "stockNumber": 2074,
    "price": null,
    "image": "books/2074.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇതിഹാസത്തിന്റെ ഇതിഹാസം",
    "name_en": "Itihaasattinrè itihaasam",
    "author": "ഓ വി വിജയൻ ",
    "stockNumber": 2076,
    "price": null,
    "image": "books/2076.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒറ്റമരപ്പെയ്ത്ത് ",
    "name_en": "Òrramarappèytt ",
    "author": "ദീപ നിശാന്ത് ",
    "stockNumber": 2077,
    "price": null,
    "image": "books/2077.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇക്കിഗായ് ",
    "name_en": "Ikkigaay ",
    "author": "ഗീതാഞ്ജലി ",
    "stockNumber": 2078,
    "price": null,
    "image": "books/2078.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മതിലുകൾ ",
    "name_en": "Matilukaൾ ",
    "author": "വൈക്കം മുഹമ്മദ് ബഷീർ ",
    "stockNumber": 2079,
    "price": null,
    "image": "books/2079.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കപാലം ",
    "name_en": "Kapaalam ",
    "author": "ഡോ ബി ഉമാദത്തൻ ",
    "stockNumber": 2080,
    "price": null,
    "image": "books/2080.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രേമലേഖനം ",
    "name_en": "Premalekhanam ",
    "author": "ബഷീർ ",
    "stockNumber": 2081,
    "price": null,
    "image": "books/2081.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഫ്രാൻസിസ് ഇട്ടിക്കോര ",
    "name_en": "Phraaൻsis ittikkora ",
    "author": "ടി ഡി രാമകൃഷ്ണൻ ",
    "stockNumber": 2082,
    "price": null,
    "image": "books/2082.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഒരിക്കൽ ",
    "name_en": "Òrikkaൽ ",
    "author": null,
    "stockNumber": 2083,
    "price": null,
    "image": "books/2083.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്നേഹം കാമം ഭ്രാന്ത്",
    "name_en": "Sneham kaamam bhraant",
    "author": "ജോസഫ് അന്നാകുട്ടി ജോസ് ",
    "stockNumber": 2084,
    "price": null,
    "image": "books/2084.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സസ്പെൻസ് ജിൻ ",
    "name_en": "Saspèൻs jiൻ ",
    "author": "രജത് ആർ ",
    "stockNumber": 2085,
    "price": null,
    "image": "books/2085.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അഗ്നി സാക്ഷി ",
    "name_en": "Agni saakshi ",
    "author": "ലളിതാംബിക അന്തർജനം ",
    "stockNumber": 2086,
    "price": null,
    "image": "books/2086.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടലത്തീരത്ത് ",
    "name_en": "Katalatteeratt ",
    "author": "ഓ വി വിജയൻ ",
    "stockNumber": 2088,
    "price": null,
    "image": "books/2088.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നഷ്ടപ്പെട്ട ദിനങ്ങൾ ",
    "name_en": "Nashtappètta dina~n~naൾ ",
    "author": "എം ടി വാസുദേവൻ ",
    "stockNumber": 2089,
    "price": null,
    "image": "books/2089.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാടിനുള്ളില് രഹസ്യമായി ഒഴുകുന്ന നദികൾ ",
    "name_en": "Kaatinullil rahasyamaayi òzhukunna nadikaൾ ",
    "author": "അംബികാസുതൻ മാങ്ങാട് ",
    "stockNumber": 2090,
    "price": null,
    "image": "books/2090.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "THE FARMER AND THE SNAKE & THE OTHER STORIES",
    "name_en": "The faarmer aand the snaake & the other storeees",
    "author": "AAROMAL T",
    "stockNumber": 2091,
    "price": null,
    "image": "books/2091.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "POLLUTION SOLUTION",
    "name_en": "Pollooteeon solooteeon",
    "author": "ARTHY MUTHANNA SINGH",
    "stockNumber": 2092,
    "price": null,
    "image": "books/2092.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "THE SELFISH GIANT",
    "name_en": "The selfeesh geeaant",
    "author": "SMITHA THOMAS",
    "stockNumber": 2093,
    "price": null,
    "image": "books/2093.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ANDHER NAGARI",
    "name_en": "Aandher naagaaree",
    "author": "SHWETHA E GEORGE",
    "stockNumber": 2094,
    "price": null,
    "image": "books/2094.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "BIRBAL AND THE PALMIST & THE OLD WOMAN'S BAG",
    "name_en": "Beerbaal aand the paalmeest & the old womaan's baag",
    "author": "SAJID A LATHEEF",
    "stockNumber": 2095,
    "price": null,
    "image": "books/2095.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "HOW THE GATEKEEPERS WHERE TRAPPED",
    "name_en": "How the gaatekeepers where traapped",
    "author": "SAJID A LATHEEF",
    "stockNumber": 2096,
    "price": null,
    "image": "books/2096.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "THE HALF THEIF AND THE THREE QUARTERS THEIF",
    "name_en": "The haalf theeef aand the three qooaarters theeef",
    "author": "ANITHA NAIR",
    "stockNumber": 2097,
    "price": null,
    "image": "books/2097.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "LITTLE TIKRI",
    "name_en": "Leettle teekree",
    "author": "LITTA JACOB",
    "stockNumber": 2098,
    "price": null,
    "image": "books/2098.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "THE CROW AND THE MOUSE & THE OTHER STORIES",
    "name_en": "The crow aand the mooose & the other storeees",
    "author": "VRINDA VARMA",
    "stockNumber": 2099,
    "price": null,
    "image": "books/2099.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "THE ANT AND THE DOVE & THE OTHER STORIES",
    "name_en": "The aant aand the dove & the other storeees",
    "author": "SHERLYANE REFEAQUE ",
    "stockNumber": 2100,
    "price": null,
    "image": "books/2100.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "THE SNOW QUEEN",
    "name_en": "The snow qooeen",
    "author": "GOWRI REKHA",
    "stockNumber": 2101,
    "price": null,
    "image": "books/2101.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "THE JACKAL AND THE CAT",
    "name_en": "The jaackaal aand the caat",
    "author": "ANITHA NAIR",
    "stockNumber": 2102,
    "price": null,
    "image": "books/2102.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "WILD SWANS",
    "name_en": "Weeld swaans",
    "author": "GOWRI REKHA",
    "stockNumber": 2103,
    "price": null,
    "image": "books/2103.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "THE PRINCESS AND THE PEA",
    "name_en": "The preencess aand the peaa",
    "author": "LUIZA CHANDY",
    "stockNumber": 2104,
    "price": null,
    "image": "books/2104.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "THE TORTOISE AND THE EAGLE",
    "name_en": "The tortoeese aand the eaagle",
    "author": "TANYA NUNSHI",
    "stockNumber": 2105,
    "price": null,
    "image": "books/2105.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "THE EMPEROR'S NEW CLOTHES",
    "name_en": "The emperor's new clothes",
    "author": "LITTA JACOB",
    "stockNumber": 2106,
    "price": null,
    "image": "books/2106.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "GREED GETS YOU NOWHERE",
    "name_en": "Greed gets yooo nowhere",
    "author": "ARTHY MUTHANNA SINGH",
    "stockNumber": 2107,
    "price": null,
    "image": "books/2107.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "THE WONDERFUL MANTRA",
    "name_en": "The wonderfool maantraa",
    "author": "ARTHY MUTHANNA SINGH",
    "stockNumber": 2108,
    "price": null,
    "image": "books/2108.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "THE SNOOTY TEAPOT & MR.&MRS ROBINS NEST",
    "name_en": "The snooty teaapot & mr.&mrs robeens nest",
    "author": "SEENA SUBRAN",
    "stockNumber": 2109,
    "price": null,
    "image": "books/2109.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എന്റെ സ്ത്രീയറിവുകൾ",
    "name_en": "Ènrè streeyarivukaൾ",
    "author": "ഇ പി രാജഗോപാലൻ ",
    "stockNumber": 2110,
    "price": null,
    "image": "books/2110.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഓർമകളിൽ എന്റെ പ്രിയ സഖാവ് ",
    "name_en": "Oർmakaliൽ ènrè priya sakhaav ",
    "author": "ശാരദ ടീച്ചർ ",
    "stockNumber": 2111,
    "price": null,
    "image": "books/2111.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സനാരി ",
    "name_en": "Sanaari ",
    "author": "മാനുവൽ ജോർജ്ജ് ",
    "stockNumber": 2112,
    "price": null,
    "image": "books/2112.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്നേഹായനങ്ങൾ ",
    "name_en": "Snehaayana~n~naൾ ",
    "author": "ഡോ യൂ ശശിമേനോൻ ",
    "stockNumber": 2113,
    "price": null,
    "image": "books/2113.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രതിരോധവും പ്രതിബോധവും ",
    "name_en": "Pratirodhavum pratibodhavum ",
    "author": "ഡോ യൂ ശശിമേനോൻ ",
    "stockNumber": 2114,
    "price": null,
    "image": "books/2114.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഓർമകളുടെ തണ്ണീർപന്തലുകൾ ",
    "name_en": "Oർmakalutè tanneeർpantalukaൾ ",
    "author": "പ്രൊഫ ബി മുഹമ്മദ് അഹമ്മദ് ",
    "stockNumber": 2115,
    "price": null,
    "image": "books/2115.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നവയുഗ പ്രതീക്ഷ ഒരേ ഒരു ഗാന്ധി ",
    "name_en": "Navayuga prateeksha òre òru gaandhi ",
    "author": "പ്രൊഫ ബി മുഹമ്മദ് അഹമ്മദ് ",
    "stockNumber": 2116,
    "price": null,
    "image": "books/2116.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കേരളത്തിലെ നാട്ടുപക്ഷികൾ ",
    "name_en": "Keralattilè naattupakshikaൾ ",
    "author": "ഡോ ടി ആർ ജയകുമാരി ",
    "stockNumber": 2117,
    "price": null,
    "image": "books/2117.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "THE CITY WITH A DUAL FACE",
    "name_en": "The ceety weeth aa dooaal faace",
    "author": "BENYAMIN",
    "stockNumber": 2118,
    "price": null,
    "image": "books/2118.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചെറിയ തുടക്കം വലിയ വിജയം ",
    "name_en": "Chèriya tutakkam valiya vijayam ",
    "author": "കെ പി ഖാലിദ് ",
    "stockNumber": 2119,
    "price": null,
    "image": "books/2119.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സമഞ്ജനം ",
    "name_en": "Sama~njanam ",
    "author": "ദേവി ",
    "stockNumber": 2120,
    "price": null,
    "image": "books/2120.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സ്വർഗം ഭൂമിയിൽ ",
    "name_en": "Svaർgam bhoomiyiൽ ",
    "author": "തങ്കമ്മ ജോൺ ",
    "stockNumber": 2121,
    "price": null,
    "image": "books/2121.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബേത്തിമാരൻ ",
    "name_en": "Bettimaaraൻ ",
    "author": "സുകുമാരൻ ",
    "stockNumber": 2122,
    "price": null,
    "image": "books/2122.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബുദ്ദുവും അപ്പുകിളിയും മറ്റു ചിലരും ",
    "name_en": "Budduvum appukiliyum marru chilarum ",
    "author": "കെ മധുസൂദനൻ കർത്ത ",
    "stockNumber": 2123,
    "price": null,
    "image": "books/2123.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആർടിഫിഷ്യൽ ഇന്റലിജൻസ് ",
    "name_en": "Aaർtiphishyaൽ inralijaൻs ",
    "author": "സഞ്ജയ് ഗോപിനാഥ് ",
    "stockNumber": 2124,
    "price": null,
    "image": "books/2124.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഉദാപ്പുത സത്വങ്ങൾ ",
    "name_en": "Udaapputa satva~n~naൾ ",
    "author": "അരുൺ ബാബു ആന്റെ ",
    "stockNumber": 2125,
    "price": null,
    "image": "books/2125.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്ത്യൻ നാടോടികഥകൾ ",
    "name_en": "Intyaൻ naatotikathakaൾ ",
    "author": "ബീന ജോർജ്ജ് ",
    "stockNumber": 2126,
    "price": null,
    "image": "books/2126.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചാൾസ് ഡിക്കൻസിന്റെ പ്രശസ്ത നോവലുകൾ ",
    "name_en": "Chaaൾs dikkaൻsinrè prashasta novalukaൾ ",
    "author": "പുന: സതീശൻ ,കനക രാഘവൻ ,ബീന ജോർജ്ജ് ",
    "stockNumber": 2127,
    "price": null,
    "image": "books/2127.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സാഹസീക കഥകൾ ",
    "name_en": "Saahaseeka kathakaൾ ",
    "author": "പുന : ബീന ജോർജ്ജ് ",
    "stockNumber": 2128,
    "price": null,
    "image": "books/2128.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "നല്ല സ്വപ്നം ",
    "name_en": "Nalla svapnam ",
    "author": "പുന : മടവൂർ ശശി ",
    "stockNumber": 2129,
    "price": null,
    "image": "books/2129.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കടത്തുകാരൻ പെരുമ്പാമ്പ്  ",
    "name_en": "Katattukaaraൻ pèrumpaamp  ",
    "author": "വർഗീസ് അരിമ്പൂർ ",
    "stockNumber": 2130,
    "price": null,
    "image": "books/2130.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "സഞ്ചാരകഥകൾ ",
    "name_en": "Sa~nchaarakathakaൾ ",
    "author": "ജോനാഥന് സ്വിഫ്റ്റ് ",
    "stockNumber": 2131,
    "price": null,
    "image": "books/2131.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അറബിക്കഥകൾ ",
    "name_en": "Arabikkathakaൾ ",
    "author": "പുന :ബീന ജോർജ്ജ് ",
    "stockNumber": 2132,
    "price": null,
    "image": "books/2132.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അത്ഭുത കഥകൾ ",
    "name_en": "Atbhuta kathakaൾ ",
    "author": "പുന : ബീന ജോർജ്ജ് ",
    "stockNumber": 2133,
    "price": null,
    "image": "books/2133.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാശുമാങ്ങയും കുഞ്ഞുമാലാഖയും ",
    "name_en": "Kaashumaa~n~nayum ku~n~numaalaakhayum ",
    "author": "സി പി പള്ളിപ്പുറം ",
    "stockNumber": 2134,
    "price": null,
    "image": "books/2134.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ബലി ",
    "name_en": "Bali ",
    "author": "ഓ എൻ വി ",
    "stockNumber": 2135,
    "price": null,
    "image": "books/2135.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജലസന്ധി ",
    "name_en": "Jalasandhi ",
    "author": "പി സുരേന്ദ്രൻ ",
    "stockNumber": 2136,
    "price": null,
    "image": "books/2136.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജോമോനും തേൻമാമ്പഴവൂം ",
    "name_en": "Jomonum teൻmaampazhavoom ",
    "author": "മാക്സിമിൻ നെട്ടൂർ ",
    "stockNumber": 2137,
    "price": null,
    "image": "books/2137.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പ്രകൃതിയമ്മ ",
    "name_en": "Prakrritiyamma ",
    "author": "ഡോ കെ ശ്രീകുമാർ ",
    "stockNumber": 2138,
    "price": null,
    "image": "books/2138.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "പൂത്തുമ്പിയുടെ സ്വർഗയാത്ര ",
    "name_en": "Poottumpiyutè svaർgayaatra ",
    "author": "രാജി കല്ലൂര് ",
    "stockNumber": 2139,
    "price": null,
    "image": "books/2139.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇഷ്ടകുട്ടിയും ഇഷ്ടല്ലാകുട്ടിയും ",
    "name_en": "Ishtakuttiyum ishtallaakuttiyum ",
    "author": "ചന്ദ്രമതി ",
    "stockNumber": 2140,
    "price": null,
    "image": "books/2140.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആത്രേയകം ",
    "name_en": "Aatreyakam ",
    "author": "ആർ രാജശ്രീ ",
    "stockNumber": 2141,
    "price": null,
    "image": "books/2141.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കോഫീ ഹൌസ് ",
    "name_en": "Kophee haus ",
    "author": "ലാജോ ജോസ് ",
    "stockNumber": 2142,
    "price": null,
    "image": "books/2142.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഓറഞ്ചുതോട്ടത്തിലെ അതിഥി ",
    "name_en": "Ora~nchutottattilè atithi ",
    "author": "ലാജോ ജോസ് ",
    "stockNumber": 2143,
    "price": null,
    "image": "books/2143.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഹൈഡ്രേഞ്ചിയ ",
    "name_en": "Haidre~nchiya ",
    "author": "ലാജോ ജോസ് ",
    "stockNumber": 2144,
    "price": null,
    "image": "books/2144.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മണൽ  ജീവികൾ ",
    "name_en": "Manaൽ  jeevikaൾ ",
    "author": "ജി ആർ ഇന്ദുഗോപൻ ",
    "stockNumber": 2145,
    "price": null,
    "image": "books/2145.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "തൊഴിൽകേന്ദ്രത്തിലേക്ക് ",
    "name_en": "Tòzhiൽkendrattilekk ",
    "author": "ഡോ എന് ആർ ഗ്രാമപ്രകാശ് ",
    "stockNumber": 2146,
    "price": null,
    "image": "books/2146.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മതപ്പാടുകൾ ",
    "name_en": "Matappaatukaൾ ",
    "author": "എം എൻ കാനശ്ശേരി ",
    "stockNumber": 2147,
    "price": null,
    "image": "books/2147.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കാബൂളിലെ പെൺകുട്ടി ",
    "name_en": "Kaaboolilè pèൺkutti ",
    "author": "ജെന്നി നോർദ്ബെർഗ് ",
    "stockNumber": 2148,
    "price": null,
    "image": "books/2148.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ആർത്തവം ശാസ്ത്രവും വിശ്വാസവും ",
    "name_en": "Aaർttavam shaastravum vishvaasavum ",
    "author": "രേശ്മ ചന്ദ്രൻ ",
    "stockNumber": 2149,
    "price": null,
    "image": "books/2149.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വടക്കേ മലബാറിലെ കർഷകസമരങ്ങളും സ്ത്രീകളും ",
    "name_en": "Vatakke malabaarilè kaർshakasamara~n~nalum streekalum ",
    "author": "ഡോ ശ്രീവിദ്യ വി ",
    "stockNumber": 2150,
    "price": null,
    "image": "books/2150.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "അശോക ",
    "name_en": "Ashoka ",
    "author": "സാറാ ജോസഫ് ",
    "stockNumber": 2151,
    "price": null,
    "image": "books/2151.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഇന്ത്യൻ റെയിൻബോ ",
    "name_en": "Intyaൻ rèyiൻbo ",
    "author": "ലഫ് കേണൽ ഡോ സോണിയ ചെറിയാൻ (റിട്ട )",
    "stockNumber": 2152,
    "price": null,
    "image": "books/2152.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മുത്തുപിള്ള ",
    "name_en": "Muttupilla ",
    "author": "ഇ ഉണ്ണികൃഷ്ണൻ ",
    "stockNumber": 2153,
    "price": null,
    "image": "books/2153.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "രാമായണം കൊത്തിയ സ്ത്രീജന്മങ്ങൾ ",
    "name_en": "Raamaayanam kòttiya streejanma~n~naൾ ",
    "author": "ഡോ പി സോമൻ ",
    "stockNumber": 2154,
    "price": null,
    "image": "books/2154.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "മായലോകത്തിലെ നൂനി ",
    "name_en": "Maayalokattilè nooni ",
    "author": "സുധാമൂർത്തി ",
    "stockNumber": 2155,
    "price": null,
    "image": "books/2155.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ജാനകി ഉണ്ടാക്കിയ കഥകൾ ",
    "name_en": "Jaanaki untaakkiya kathakaൾ ",
    "author": "പി വി ഷാജികുമാർ ",
    "stockNumber": 2156,
    "price": null,
    "image": "books/2156.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "കുറു ",
    "name_en": "Kuru ",
    "author": "സുകുമാരൻ ചാലിഗദ്ധ ",
    "stockNumber": 2157,
    "price": null,
    "image": "books/2157.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "എഴുത്തും തിരുത്തും പുനരെഴുത്തും ",
    "name_en": "Èzhuttum tiruttum punarèzhuttum ",
    "author": "ജി സ്റ്റാലിൻ ",
    "stockNumber": 2158,
    "price": null,
    "image": "books/2158.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "വിനാശത്തിലേക്ക് ഒരു മയക്കദൂരം ",
    "name_en": "Vinaashattilekk òru mayakkadooram ",
    "author": "എം ടി വാസുദേവൻ നായർ ",
    "stockNumber": 2159,
    "price": null,
    "image": "books/2159.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ഡ്രാക്കുള ",
    "name_en": "Draakkula ",
    "author": "പുന : ഏറ്റുമാനൂർ ശിവകുമാർ ",
    "stockNumber": 2160,
    "price": null,
    "image": "books/2160.jpg",
    "stock": "In Stock"
  },
  {
    "name_ml": "ചക്കരമാമ്പഴം ",
    "name_en": "Chakkaramaampazham ",
    "author": "ഡോ കെ ശ്രീകുമാർ ",
    "stockNumber": 2161,
    "price": null,
    "image": "books/2161.jpg",
    "stock": "In Stock"
  }
];