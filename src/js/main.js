var nl;
nl = {
	ns: function (ns) {
		var obj = this;
		var parts = ns.split('.');
		for (var i = 0, l = parts.length; i < l; i++) {
			var part = parts[i];
			if (typeof obj[part] === 'undefined') {
				obj[part] = {};
			}
			obj = obj[part];
		}
		return obj;
	}
};