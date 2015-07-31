var TemplateEngine = function(html, options) {
    var re = /\{\{([^\}\}]+)?\}\}/g, 
    reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, 
    code = 'var r=[];\n', 
    cursor = 0, 
    match;
    var add = function(line, js) {
        js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
            (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
        return add;
    }
    while(match = re.exec(html)) {
        var prop = match[1].replace(/\ /ig,'');
        prop = prop.indexOf("this.") === 0 ? prop : "this." + prop;
        add(html.slice(cursor, match.index))(prop, true);
        cursor = match.index + match[0].length;
    }
    add(html.substr(cursor, html.length - cursor)); console.log(code);
    code += 'return r.join("");';
    return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
}
