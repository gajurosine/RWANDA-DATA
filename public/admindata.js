

// admindata.js
import { Provinces, Districts, Sectors, Villages } from "rwanda";

const provinces = Provinces();
const districts = Districts();
const sectors = Sectors();
const villages = Villages();

// Assuming there's an HTML element with the ID 'result'
document.getElementById('result').innerHTML = `
<h2>Provinces:</h2>
<ul>${provinces.map(province => `<li>${province}</li>`).join('')}</ul>
<h2>Districts:</h2>
<ul>${districts.map(district => `<li>${district}</li>`).join('')}</ul>

<h2>Districts:</h2>
<ul>${sectors.map(sector=> `<li>${sector}</li>`).join('')}</ul>
<h2>Districts:</h2>
<ul>${villages.map(village=> `<li>${village}</li>`).join('')}</ul>
`;
