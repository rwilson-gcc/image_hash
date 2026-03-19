function downloadCSV_SHA() {
    let rows = ["MatchGroupID_SHA256,FileName,InternalName,SHA256,IsExactMatch"];
    let id = 1;

    Object.entries(window._shaGroups).forEach(([hash, imgs]) => {
        imgs.forEach(i => {
            rows.push([
                imgs.length > 1 ? id : "",
                i.fileName,
                i.internalName,
                i.sha,
                imgs.length > 1
            ].join(","));
        });
        if (imgs.length > 1) id++;
    });

    const blob = new Blob([rows.join("\n")], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "sha256_matches.csv";
    a.click();
}

window.downloadCSV_SHA = downloadCSV_SHA;