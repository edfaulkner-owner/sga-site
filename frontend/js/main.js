(function() {

// ARCHIVE
var archiveItems = [
  { name:'Retro Sticker Set', cat:'sticker', emoji:'&#127918;', bg:'linear-gradient(135deg,#FF6B35,#F7931E)' },
  { name:'Indie Card Series', cat:'trading', emoji:'&#127183;', bg:'linear-gradient(135deg,#4ECDC4,#2980B9)' },
  { name:'Wild Specimen', cat:'wild', emoji:'&#127807;', bg:'linear-gradient(135deg,#27AE60,#2ECC71)' },
  { name:'Vintage TCG Pack', cat:'trading', emoji:'&#9876;', bg:'linear-gradient(135deg,#8E44AD,#9B59B6)' },
  { name:'Anime Sticker Set', cat:'sticker', emoji:'&#10024;', bg:'linear-gradient(135deg,#E91E63,#FF5722)' },
  { name:'TCG Booster Pack', cat:'trading', emoji:'&#128302;', bg:'linear-gradient(135deg,#1ABC9C,#16A085)' },
  { name:'Rare Foil Card', cat:'trading', emoji:'&#128142;', bg:'linear-gradient(135deg,#F39C12,#E74C3C)' },
  { name:'Miscellaneous Entry', cat:'wild', emoji:'&#129419;', bg:'linear-gradient(135deg,#6C5CE7,#A29BFE)' },
  { name:'Horror Sticker Sheet', cat:'sticker', emoji:'&#128375;', bg:'linear-gradient(135deg,#2D3436,#636E72)' },
  { name:'Holographic Series', cat:'sticker', emoji:'&#127752;', bg:'linear-gradient(135deg,#FD79A8,#E84393)' },
  { name:'Nature Specimen', cat:'wild', emoji:'&#127812;', bg:'linear-gradient(135deg,#55EFC4,#00B894)' },
  { name:'Sports Card Lot', cat:'trading', emoji:'&#127942;', bg:'linear-gradient(135deg,#FDCB6E,#E17055)' }
];

function renderArchive(filter) {
  var grid = document.getElementById('archive-grid');
  var items = filter === 'all' ? archiveItems : archiveItems.filter(function(x){ return x.cat === filter; });
  var html = '';
  for (var i = 0; i < items.length; i++) {
    html += '<div class="archive-card">' +
      '<div class="archive-thumb">' +
        '<div class="archive-thumb-bg" style="background:' + items[i].bg + '"></div>' +
        '<span style="position:relative;z-index:1">' + items[i].emoji + '</span>' +
      '</div>' +
      '<div class="archive-lbl">' + items[i].name + '</div>' +
    '</div>';
  }
  grid.innerHTML = html;
}
window.renderArchive = renderArchive;

function filterArchive(btn, filter) {
  var tabs = document.querySelectorAll('.filter-tab');
  for (var i = 0; i < tabs.length; i++) { tabs[i].classList.remove('active'); }
  btn.classList.add('active');
  renderArchive(filter);
}
window.filterArchive = filterArchive;

// MACHINE DATA
var machines = [
  { id:'SGA-MCh-PA-001', city:'Tullytown', state:'PA', lat:40.14, lon:-74.82, type:'Sticker', status:'Documented', date:'09/18/2026', notes:'Dual-slot machine, excellent condition' },
  { id:'SGA-MCh-NY-002', city:'New York', state:'NY', lat:40.71, lon:-74.00, type:'Sticker / Trading', status:'Documented', date:'08/03/2026', notes:'Times Square arcade location' },
  { id:'SGA-MCh-IL-003', city:'Chicago', state:'IL', lat:41.88, lon:-87.63, type:'Sticker', status:'Documented', date:'07/22/2026', notes:'Retro 4-slot gumball style' },
  { id:'SGA-MCh-CA-004', city:'Los Angeles', state:'CA', lat:34.05, lon:-118.24, type:'Wild Specimen', status:'Documented', date:'06/11/2026', notes:'Hollywood gift shop find' },
  { id:'SGA-MCh-TX-005', city:'Houston', state:'TX', lat:29.76, lon:-95.37, type:'Sticker', status:'Pending', date:'05/30/2026', notes:'Needs follow-up visit' },
  { id:'SGA-MCh-FL-006', city:'Miami', state:'FL', lat:25.77, lon:-80.19, type:'Trading', status:'Documented', date:'04/14/2026', notes:'Beach boardwalk location' },
  { id:'SGA-MCh-WA-007', city:'Seattle', state:'WA', lat:47.61, lon:-122.33, type:'Sticker', status:'Documented', date:'03/05/2026', notes:'Pike Place Market' },
  { id:'SGA-MCh-CO-008', city:'Denver', state:'CO', lat:39.74, lon:-104.98, type:'Sticker', status:'Documented', date:'02/18/2026', notes:'Mountain themed stickers' },
  { id:'SGA-MCh-TN-009', city:'Nashville', state:'TN', lat:36.17, lon:-86.78, type:'Wild Specimen', status:'Inactive', date:'01/09/2026', notes:'Machine removed, record kept' },
  { id:'SGA-MCh-MA-010', city:'Boston', state:'MA', lat:42.36, lon:-71.06, type:'Trading', status:'Documented', date:'12/01/2025', notes:'Collector shop basement' },
  { id:'SGA-MCh-GA-011', city:'Atlanta', state:'GA', lat:33.75, lon:-84.39, type:'Sticker', status:'Documented', date:'11/14/2025', notes:'Ponce City Market' },
  { id:'SGA-MCh-AZ-012', city:'Phoenix', state:'AZ', lat:33.45, lon:-112.07, type:'Sticker', status:'Pending', date:'10/30/2025', notes:'Mall food court' },
  { id:'SGA-MCh-OR-013', city:'Portland', state:'OR', lat:45.52, lon:-122.68, type:'Wild Specimen', status:'Documented', date:'10/05/2025', notes:'Saturday market find' },
  { id:'SGA-MCh-MN-014', city:'Minneapolis', state:'MN', lat:44.98, lon:-93.27, type:'Sticker', status:'Documented', date:'09/20/2025', notes:'Mall of America, west wing' },
  { id:'SGA-MCh-OH-015', city:'Columbus', state:'OH', lat:39.96, lon:-82.99, type:'Trading', status:'Documented', date:'09/01/2025', notes:'Game shop near OSU' }
];

function renderMachineList() {
  var bmap = { 'Documented':'bdoc', 'Pending':'bpend', 'Inactive':'binact' };
  var html = '';
  for (var i = 0; i < machines.length; i++) {
    var m = machines[i];
    html += '<div class="mrow" onclick="selectMachine(' + i + ')">' +
      '<span class="mrow-id">' + m.id + '</span>' +
      '<span class="mrow-txt">' + m.city + ', ' + m.state + '</span>' +
      '<span class="mrow-txt">' + m.type + '</span>' +
      '<span class="mrow-txt">' + m.date + '</span>' +
      '<span class="mbadge ' + bmap[m.status] + '">' + m.status + '</span>' +
    '</div>';
  }
  document.getElementById('machine-list').innerHTML = html;
}
window.renderMachineList = renderMachineList;

function selectMachine(idx) {
  var m = machines[idx];
  document.getElementById('panel-prompt').style.display = 'none';
  document.getElementById('mi-id').textContent = m.id;
  document.getElementById('mi-loc').textContent = m.city + ', ' + m.state;
  document.getElementById('mi-type').textContent = m.type;
  var dc = m.status === 'Pending' ? 'sdot pend' : m.status === 'Inactive' ? 'sdot inact' : 'sdot';
  document.getElementById('mi-status').innerHTML = '<span class="' + dc + '"></span>' + m.status;
  document.getElementById('mi-date').textContent = m.date;
  document.getElementById('mi-notes').textContent = m.notes;
  document.getElementById('mi-badge').textContent = m.status;
  document.getElementById('machine-info').classList.add('vis');
  var markers = document.querySelectorAll('.spider-marker');
  for (var i = 0; i < markers.length; i++) { markers[i].classList.remove('active-marker'); }
  var sp = document.getElementById('sp-' + idx);
  if (sp) { sp.classList.add('active-marker'); }
}
window.selectMachine = selectMachine;

// MAP
var mapReady = false;
var projection = null;

function project(lat, lon) {
  if (!projection) return null;
  var p = projection([lon, lat]);
  return p ? { x: p[0], y: p[1] } : null;
}

function spiderSVG(cx, cy, idx, delay) {
  var d = delay.toFixed(2);
  var cid = 'cg' + idx;
  var aid = 'ag' + idx;
  var parts = [];
  parts.push('<g class="spider-marker" id="sp-' + idx + '"');
  parts.push(' transform="translate(' + cx.toFixed(1) + ',' + cy.toFixed(1) + ')"');
  parts.push(' onmouseenter="onSHover(' + idx + ')"');
  parts.push(' onmouseleave="onSLeave(' + idx + ')"');
  parts.push(' onclick="selectMachine(' + idx + ')">');
  parts.push('<g class="spider-marker-inner">');

  parts.push('<defs>');
  parts.push('<radialGradient id="' + cid + '" cx="35%" cy="28%" r="65%">');
  parts.push('<stop offset="0%" stop-color="#EDD04F"/>');
  parts.push('<stop offset="45%" stop-color="#C9A227"/>');
  parts.push('<stop offset="100%" stop-color="#6B4F10"/>');
  parts.push('</radialGradient>');
  parts.push('<radialGradient id="' + aid + '" cx="35%" cy="28%" r="65%">');
  parts.push('<stop offset="0%" stop-color="#D4AA2E"/>');
  parts.push('<stop offset="50%" stop-color="#B8901A"/>');
  parts.push('<stop offset="100%" stop-color="#5A3C08"/>');
  parts.push('</radialGradient>');
  parts.push('</defs>');

  parts.push('<circle class="spider-pulse-ring" cx="0" cy="2" r="5" fill="none" stroke="#C9A227" stroke-width="1.2" style="animation-delay:' + d + 's"/>');
  parts.push('<ellipse cx="0" cy="8" rx="11" ry="3.5" fill="rgba(0,0,0,0.45)"/>');

  parts.push('<path class="sleg ll4" d="M -5,9 Q -10,14 -14,20 Q -17,24 -16,28" stroke="#B8921F" stroke-width="1.3"/>');
  parts.push('<path class="sleg ll3" d="M -6,5 Q -13,9 -18,13 Q -22,16 -24,20" stroke="#B8921F" stroke-width="1.4"/>');
  parts.push('<path class="sleg ll2" d="M -6,1 Q -13,0 -19,3 Q -24,6 -27,9" stroke="#B8921F" stroke-width="1.5"/>');
  parts.push('<path class="sleg ll1" d="M -5,-3 Q -12,-9 -18,-5 Q -23,-2 -25,2" stroke="#B8921F" stroke-width="1.6"/>');
  parts.push('<path class="sleg lr4" d="M 5,9 Q 10,14 14,20 Q 17,24 16,28" stroke="#B8921F" stroke-width="1.3"/>');
  parts.push('<path class="sleg lr3" d="M 6,5 Q 13,9 18,13 Q 22,16 24,20" stroke="#B8921F" stroke-width="1.4"/>');
  parts.push('<path class="sleg lr2" d="M 6,1 Q 13,0 19,3 Q 24,6 27,9" stroke="#B8921F" stroke-width="1.5"/>');
  parts.push('<path class="sleg lr1" d="M 5,-3 Q 12,-9 18,-5 Q 23,-2 25,2" stroke="#B8921F" stroke-width="1.6"/>');

  parts.push('<g stroke="#9A7818" stroke-width="0.6" opacity="0.5">');
  parts.push('<line x1="-13" y1="-7" x2="-14" y2="-9"/>');
  parts.push('<line x1="-20" y1="-3" x2="-22" y2="-5"/>');
  parts.push('<line x1="-14" y1="1" x2="-15" y2="-1"/>');
  parts.push('<line x1="-20" y1="6" x2="-22" y2="4"/>');
  parts.push('<line x1="13" y1="-7" x2="14" y2="-9"/>');
  parts.push('<line x1="20" y1="-3" x2="22" y2="-5"/>');
  parts.push('<line x1="14" y1="1" x2="15" y2="-1"/>');
  parts.push('<line x1="20" y1="6" x2="22" y2="4"/>');
  parts.push('</g>');

  parts.push('<path d="M -3,-7 Q -5,-11 -7,-10" stroke="#C9A227" stroke-width="1.2" fill="none"/>');
  parts.push('<path d="M 3,-7 Q 5,-11 7,-10" stroke="#C9A227" stroke-width="1.2" fill="none"/>');

  parts.push('<g class="spider-ceph">');
  parts.push('<ellipse cx="0" cy="-2" rx="8" ry="7" fill="url(#' + cid + ')"/>');
  parts.push('<path d="M 0,-8 Q 0,-2 0,4" stroke="rgba(0,0,0,0.3)" stroke-width="0.8" fill="none"/>');
  parts.push('<path d="M -4,-6 Q -3,-1 -3,3" stroke="rgba(0,0,0,0.18)" stroke-width="0.5" fill="none"/>');
  parts.push('<path d="M 4,-6 Q 3,-1 3,3" stroke="rgba(0,0,0,0.18)" stroke-width="0.5" fill="none"/>');
  parts.push('<ellipse cx="-2" cy="-4" rx="3" ry="2" fill="rgba(255,220,100,0.18)" transform="rotate(-15,-2,-4)"/>');
  parts.push('</g>');

  parts.push('<g class="spider-abdomen">');
  parts.push('<ellipse cx="0" cy="11" rx="11" ry="12" fill="url(#' + aid + ')"/>');
  parts.push('<ellipse cx="0" cy="9" rx="4" ry="3" fill="rgba(180,130,20,0.45)"/>');
  parts.push('<ellipse cx="0" cy="13" rx="3.5" ry="2.5" fill="rgba(180,130,20,0.35)"/>');
  parts.push('<ellipse cx="0" cy="17" rx="2.5" ry="2" fill="rgba(180,130,20,0.25)"/>');
  parts.push('<ellipse cx="-2" cy="7" rx="3.5" ry="2.5" fill="rgba(255,220,100,0.18)" transform="rotate(-10,-2,7)"/>');
  parts.push('<ellipse cx="0" cy="22" rx="2" ry="1.5" fill="#8B6914"/>');
  parts.push('</g>');

  parts.push('<circle cx="-2.5" cy="-5" r="1.8" fill="#0d0d0d"/>');
  parts.push('<circle cx="2.5" cy="-5" r="1.8" fill="#0d0d0d"/>');
  parts.push('<circle cx="-1.8" cy="-5.7" r="0.55" fill="rgba(255,255,255,0.65)"/>');
  parts.push('<circle cx="3.2" cy="-5.7" r="0.55" fill="rgba(255,255,255,0.65)"/>');
  parts.push('<circle cx="-5.5" cy="-4" r="1.1" fill="#0a0a0a"/>');
  parts.push('<circle cx="5.5" cy="-4" r="1.1" fill="#0a0a0a"/>');
  parts.push('<circle cx="-4.5" cy="-7" r="0.9" fill="#0a0a0a"/>');
  parts.push('<circle cx="4.5" cy="-7" r="0.9" fill="#0a0a0a"/>');
  parts.push('<circle cx="-5.2" cy="-2" r="0.7" fill="#131313"/>');
  parts.push('<circle cx="5.2" cy="-2" r="0.7" fill="#131313"/>');

  parts.push('<path d="M -2,-8 Q -3,-10 -2.5,-13" stroke="#9A7818" stroke-width="1.5" fill="none" stroke-linecap="round"/>');
  parts.push('<path d="M 2,-8 Q 3,-10 2.5,-13" stroke="#9A7818" stroke-width="1.5" fill="none" stroke-linecap="round"/>');
  parts.push('<circle cx="-2.5" cy="-13" r="1.1" fill="#C9A227"/>');
  parts.push('<circle cx="2.5" cy="-13" r="1.1" fill="#C9A227"/>');

  parts.push('</g></g>');
  return parts.join('');
}

function initMap() {
  if (mapReady) { return Promise.resolve(); }
  var svg = document.getElementById('usa-map');
  if (!svg) { return Promise.resolve(); }
  mapReady = true;
  return d3.json('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json')
    .then(function(topology) {
      var statesJson = topojson.feature(topology, topology.objects.states);
      projection = d3.geoAlbersUsa().fitSize([750, 450], statesJson);
      var path = d3.geoPath().projection(projection);
      var html = '<g id="map-content"><defs><radialGradient id="mapbg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#1c1c1c"/><stop offset="100%" stop-color="#111111"/></radialGradient></defs>';
      html += '<rect x="0" y="0" width="750" height="450" fill="url(#mapbg)" rx="2"/>';
      html += '<g class="states">';
      for (var s = 0; s < statesJson.features.length; s++) {
        var d = path(statesJson.features[s]);
        if (d) {
          html += '<path d="' + d + '" fill="#171717" stroke="rgba(201,162,39,0.32)" stroke-width="1.5"/>';
        }
      }
      html += '</g>';
      html += '<g stroke="rgba(201,162,39,0.07)" stroke-width="0.6" fill="none">';
      for (var a = 0; a < machines.length; a++) {
        var pa = project(machines[a].lat, machines[a].lon);
        if (!pa) continue;
        for (var b = a + 1; b < machines.length; b++) {
          var pb = project(machines[b].lat, machines[b].lon);
          if (!pb) continue;
          var dist = Math.sqrt(Math.pow(pa.x - pb.x, 2) + Math.pow(pa.y - pb.y, 2));
          if (dist < 180) {
            html += '<line x1="' + pa.x.toFixed(1) + '" y1="' + (pa.y + 2).toFixed(1) + '" x2="' + pb.x.toFixed(1) + '" y2="' + (pb.y + 2).toFixed(1) + '"/>';
          }
        }
      }
      html += '</g>';
      for (var i = 0; i < machines.length; i++) {
        var pos = project(machines[i].lat, machines[i].lon);
        if (pos) {
          html += spiderSVG(pos.x, pos.y, i, i * 0.38);
        }
      }
      html += '</g>';
      svg.innerHTML = html;
      var zoom = d3.zoom().scaleExtent([1, 4]).on('zoom', function(event) {
        d3.select('#map-content').attr('transform', event.transform);
      });
      d3.select('#usa-map').call(zoom);
      document.getElementById('map-zoom-in').onclick = function() {
        d3.select('#usa-map').transition().duration(300).call(zoom.scaleBy, 1.3);
      };
      document.getElementById('map-zoom-out').onclick = function() {
        d3.select('#usa-map').transition().duration(300).call(zoom.scaleBy, 0.7);
      };
    })
    .catch(function(err) {
      console.error('Map load failed:', err);
      svg.innerHTML = '<rect x="0" y="0" width="750" height="450" fill="#111111" rx="2"/>' +
        '<text x="375" y="225" text-anchor="middle" fill="rgba(201,162,39,0.6)" font-family="Cinzel,serif" font-size="14">Unable to load map</text>';
    });
}
window.initMap = initMap;

function onSHover(idx) {
  var m = machines[idx];
  var tt = document.getElementById('stt');
  document.getElementById('stt-id').textContent = m.id;
  document.getElementById('stt-loc').textContent = m.city + ', ' + m.state + ' \u00b7 ' + m.type;
  var mapEl = document.getElementById('usa-map');
  var rect = mapEl.getBoundingClientRect();
  var vb = mapEl.viewBox.baseVal;
  var pos = project(m.lat, m.lon);
  if (!pos) return;
  tt.style.left = ((pos.x / 750) * rect.width + 22) + 'px';
  tt.style.top = ((pos.y / 450) * rect.height - 24) + 'px';
  tt.classList.add('vis');
}
window.onSHover = onSHover;

function onSLeave(idx) {
  document.getElementById('stt').classList.remove('vis');
}
window.onSLeave = onSLeave;

})();