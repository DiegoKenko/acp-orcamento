function advplToJs(codeType, content) {
    if (codeType === 'orcamento'){
        sessionStorage.setItem('orcamento', content);
    }
}
