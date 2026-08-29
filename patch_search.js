const fs = require('fs');
let code = fs.readFileSync('src/app/vendor-register/page.tsx', 'utf8');

const regex = /<div>\s*<label[^>]*>Material \/ Category<\/label>\s*<select[\s\S]*?<\/select>\s*<\/div>/;

const datalistHTML = `<div>
                <label className="block text-sm font-medium text-zinc-400 mb-1.5">Material / Category</label>
                <input
                  list="vendor-industries"
                  required
                  value={formData.industry}
                  onChange={e => setFormData(p => ({ ...p, industry: e.target.value }))}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  placeholder="Type to search or select category..."
                />
                <datalist id="vendor-industries">
                  {industries.map(i => (
                    <option key={i} value={i} />
                  ))}
                </datalist>
              </div>`;

if (regex.test(code)) {
    code = code.replace(regex, datalistHTML);
    fs.writeFileSync('src/app/vendor-register/page.tsx', code, 'utf8');
    console.log("Successfully patched Website vendor register with datalist!");
} else {
    console.log("Regex didn't match in Website");
}
