// Data Loader — loads all company data from projects/
const DATA_BASE = 'projects/';

async function loadManifest() {
    const res = await fetch(DATA_BASE + 'manifest.json');
    return res.json();
}

async function loadCompanyData(folder) {
    const res = await fetch(DATA_BASE + folder + '/data.json');
    const data = await res.json();
    data.folder = folder;
    return data;
}

async function loadAllExperiences() {
    const manifest = await loadManifest();
    const promises = manifest.companies.map(folder => loadCompanyData(folder));
    return Promise.all(promises);
}
