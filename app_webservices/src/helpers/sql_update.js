const {Pool, Client, initPGSQL} = require('../conf/database');
const {errorBody}   = require('../utils/_json');

/**
    * @param {integer} codigo - codigo
    * @param {integer} codigo2 - codigo2
    * @returns {Array} returns
*/

    const updateDOMFIC  = async(_ACCION,
        codigo,
        _DOMFICEST,
        _DOMFICORD,
        _DOMFICPAR,
        _DOMFICNOM,
        _DOMFICCSS,
        _DOMFICICO,
        _DOMFICPAT,
        _DOMFICEQU,
        _DOMFICVAL,
        _DOMFICOBS,
        _DOMFICCEM,
        _DOMFICCUS,
        _DOMFICCIP,
        _DOMFICCPR,
        _DOMFICAEM,
        _DOMFICAUS,
        _DOMFICAIP,
        _DOMFICAPR) => {

        let _code   = 200;
        let _data   = [];
    
        let query00 = '';

        switch (_ACCION) {
            case 1:
                query00 = `UPDATE adm.DOMFIC a SET  
                                DOMFICEST   = (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMDOMINIOESTADO' AND DOMFICPAR = ${_DOMFICEST}), 
                                DOMFICORD   = ${_DOMFICORD}, 
                                DOMFICPAR   = ${_DOMFICPAR},     
                                DOMFICNOM   = '${_DOMFICNOM}',      
                                DOMFICCSS   = ${_DOMFICCSS},     
                                DOMFICICO   = ${_DOMFICICO},    
                                DOMFICPAT   = ${_DOMFICPAT},     
                                DOMFICEQU   = ${_DOMFICEQU},     
                                DOMFICVAL   = ${_DOMFICVAL},
                                DOMFICOBS   = ${_DOMFICOBS},    
                                DOMFICCEM   = ${_DOMFICCEM},   
                                DOMFICCUS   = ${_DOMFICCUS},    
                                DOMFICCIP   = ${_DOMFICCIP},     
                                DOMFICCPR   = ${_DOMFICCPR},     
                                DOMFICAEM   = ${_DOMFICAEM},     
                                DOMFICAUS   = ${_DOMFICAUS},     
                                DOMFICAIP   = ${_DOMFICAIP},     
                                DOMFICAPR   = ${_DOMFICAPR} 

                            FROM adm.DOMFIC b

                            WHERE a.DOMFICCOD = ${codigo} AND
                            NOT EXISTS (SELECT * FROM adm.DOMFIC c WHERE c.DOMFICVAL = ${_DOMFICVAL} AND b.DOMFICPAR <> c.DOMFICPAR AND c.DOMFICCOD = ${codigo}) RETURNING a.DOMFICCOD`;	
            break;

            case 2:
                query00 = `UPDATE adm.DOMFIC SET  
                                DOMFICEST   = (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMDOMINIOESTADO' AND DOMFICPAR = ${_DOMFICEST}), 
                                DOMFICAEM   = ${_DOMFICAEM},     
                                DOMFICAUS   = ${_DOMFICAUS},     
                                DOMFICAIP   = ${_DOMFICAIP},     
                                DOMFICAPR   = ${_DOMFICAPR} 

                            WHERE DOMFICCOD = ${codigo} RETURNING DOMFICCOD`;
            break;	
        }

        const connPGSQL = new Client(initPGSQL);
        
        await connPGSQL
            .connect()
            .catch(e => {
                _code = 401;
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: updateDOMFIC', true)
                    .then(result => _data = result);
            }
        );

        if (_code == 200) {
            await connPGSQL
                .query(query00)
                .then(result => {
                    _code = 200;
                    _data = result.rows;
                })
                .catch(e => {
                    _code = 500;
                    errorBody(_code, 'Code: '+ e.code + ', Routine2: ' + e.routine + ', Function: updateDOMFIC', true)
                        .then(result => _data = result);
                })
                .then(() => {
                    connPGSQL.end();
                }
            );
        }
        
        if (_data == ''){
            _code   = 404;
        }
        
        return Array(_code, _data);
    }

    const updateEMPFIC  = async(_ACCION,
            codigo,
            _EMPFICEST,
            _EMPFICTRC,
            _EMPFICTAC,
            _EMPFICORD,
            _EMPFICNOM,
            _EMPFICRUC,
            _EMPFICTEL,
            _EMPFICCEL,
            _EMPFICWEB,
            _EMPFICCOR,
            _EMPFICUBI,
            _EMPFICDIR,
            _EMPFICLOG,
            _EMPFICOBS,
            _EMPFICAEM,
            _EMPFICAUS,
            _EMPFICAIP,
            _EMPFICAPR,
            _EMPFICAIN) => {

        let _code   = 200;
        let _data   = [];
        let query00 = '';

        switch (_ACCION) {
            case 1:
                query00 = `UPDATE adm.EMPFIC a SET 
                                EMPFICEST	= (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMEMPRESAESTADO' AND DOMFICPAR  = ${_EMPFICEST}),
                                EMPFICTRC	= (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMEMPRESARUBRO' AND DOMFICPAR   = ${_EMPFICTRC}),
                                EMPFICTAC	= (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMEMPRESAACCESO' AND DOMFICPAR  = ${_EMPFICTAC}),
                                EMPFICORD	= ${_EMPFICORD}, 	 
                                EMPFICNOM	= ${_EMPFICNOM}, 
                                EMPFICRUC   = ${_EMPFICRUC},		   
                                EMPFICTEL	= ${_EMPFICTEL},     
                                EMPFICCEL	= ${_EMPFICCEL}, 	 
                                EMPFICWEB	= ${_EMPFICWEB}, 	
                                EMPFICCOR	= ${_EMPFICCOR}, 	   
                                EMPFICUBI	= ${_EMPFICUBI}, 	  
                                EMPFICDIR	= ${_EMPFICDIR}, 	 
                                EMPFICLOG	= ${_EMPFICLOG}, 	    
                                EMPFICOBS	= ${_EMPFICOBS}, 	     
                                EMPFICAEM	= ${_EMPFICAEM},     
                                EMPFICAUS	= ${_EMPFICAUS},     
                                EMPFICAIP	= ${_EMPFICAIP},     
                                EMPFICAPR	= ${_EMPFICAPR},     
                                EMPFICAIN	= ${_EMPFICAIN}
                                
                            FROM adm.EMPFIC b
                            WHERE a.EMPFICCOD   = ${codigo} AND
                            NOT EXISTS (SELECT * FROM adm.EMPFIC c WHERE c.EMPFICRUC = ${_EMPFICRUC} AND c.EMPFICCOD <> b.EMPFICCOD) RETURNING a.EMPFICCOD`;	

            break;

            case 2:
                query00 = `UPDATE adm.EMPFIC SET 
                                EMPFICEST	= (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMEMPRESAESTADO' AND DOMFICPAR  = ${_EMPFICEST}), 
                                EMPFICAEM	= ${_EMPFICAEM},     
                                EMPFICAUS	= ${_EMPFICAUS},     
                                EMPFICAIP	= ${_EMPFICAIP},     
                                EMPFICAPR	= ${_EMPFICAPR} 

                            WHERE EMPFICCOD =  ${codigo} RETURNING EMPFICCOD`;
            break;	
        }

        const connPGSQL = new Client(initPGSQL);
        
        await connPGSQL
            .connect()
            .catch(e => {
                _code = 401;
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: updateEMPFIC', true)
                    .then(result => _data = result);
            }
        );

        if (_code == 200) {
            await connPGSQL
                .query(query00)
                .then(result => {
                    _code = 200;
                    _data = result.rows;
                })
                .catch(e => {
                    _code = 500;
                    errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: updateEMPFIC', true)
                        .then(result => _data = result);
                })
                .then(() => {
                    connPGSQL.end();
                }
            );
        }

        if (_data == ''){
            _code   = 404;
        }
        
        return Array(_code, _data);
    }

    const updateSUCFIC  = async(_ACCION,
                codigo,
                _SUCFICEST,
                _SUCFICTSC,
                _SUCFICEMP,
                _SUCFICORD,
                _SUCFICNOM,
                _SUCFICTEL,
                _SUCFICCEL,
                _SUCFICCOR,
                _SUCFICUBI,
                _SUCFICDIR,
                _SUCFICOBS,
                _SUCFICAEM,
                _SUCFICAUS,
                _SUCFICAIP,
                _SUCFICAPR,
                _SUCFICAIN) => {

        let _code   = 200;
        let _data   = [];
        let query00 = '';

        switch (_ACCION) {
            case 1:
                query00 = `UPDATE adm.SUCFIC SET																					 
                                SUCFICEST	= (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMSUCURSALESTADO' AND DOMFICPAR = ${_SUCFICEST}), 																						   
                                SUCFICTSC	= (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMSUCURSALTIPO' AND DOMFICPAR = ${_SUCFICTSC}), 	  
                                SUCFICEMP	= ${_SUCFICEMP}, 	 
                                SUCFICORD	= ${_SUCFICORD}, 	
                                SUCFICNOM	= ${_SUCFICNOM}, 	   
                                SUCFICTEL	= ${_SUCFICTEL},     
                                SUCFICCEL	= ${_SUCFICCEL}, 	 
                                SUCFICCOR	= ${_SUCFICCOR}, 	
                                SUCFICUBI	= ${_SUCFICUBI}, 	   
                                SUCFICDIR	= ${_SUCFICDIR}, 	  
                                SUCFICOBS	= ${_SUCFICOBS},              
                                SUCFICAEM	= ${_SUCFICAEM},     
                                SUCFICAUS	= ${_SUCFICAUS},     
                                SUCFICAIP	= ${_SUCFICAIP},     
                                SUCFICAPR	= ${_SUCFICAPR}, 
                                SUCFICAIN	= ${_SUCFICAIN}
            
                            WHERE SUCFICCOD = ${codigo}`;	

            break;

            case 2:
                query00 = `UPDATE adm.SUCFIC SET																					 
                                SUCFICEST	= (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMSUCURSALESTADO' AND DOMFICPAR = ${_SUCFICEST}), 
                                SUCFICAEM	= ${_SUCFICAEM},     
                                SUCFICAUS	= ${_SUCFICAUS},     
                                SUCFICAIP	= ${_SUCFICAIP},     
                                SUCFICAPR	= ${_SUCFICAPR}, 
                                SUCFICAIN	= ${_SUCFICAIN}

                            WHERE SUCFICCOD =  ${codigo}`;
            break;	
        }

        const connPGSQL = new Client(initPGSQL);

        await connPGSQL
            .connect()
            .catch(e => {
                _code = 401;
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: updateSUCFIC', true)
                    .then(result => _data = result);
            }
        );

        if (_code == 200) {
            await connPGSQL
                .query(query00)
                .then(result => {
                    _code = 200;
                    _data = result.rows;
                })
                .catch(e => {
                    _code = 500;
                    errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: updateSUCFIC', true)
                        .then(result => _data = result);
                })
                .then(() => {
                    connPGSQL.end();
                }
            );
        }

        return Array(_code, _data);
    }

    const updateUSUFIC  = async(_ACCION,
        codigo,
        _USUFICEST,
        _USUFICEMC,
        _USUFICSUC,
        _USUFICORD,
        _USUFICDOC,
        _USUFICNOM,
        _USUFICAPE,
        _USUFICUSU,
        _USUFICPAS,
        _USUFICEMA,
        _USUFICCEL,
        _USUFICOBS,
        _USUFICCEM,
        _USUFICCUS,
        _USUFICCIP,
        _USUFICCPR,
        _USUFICAEM,
        _USUFICAUS,
        _USUFICAIP,
        _USUFICAPR,
        _USUFICAIN) => {

        let _code   = 200;
        let _data   = [];
        let query00 = '';

        switch (_ACCION) {
            case 1:
                query00 = `UPDATE adm.USUFIC SET
                                USUFICEST	= (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMUSUARIOESTADO' AND DOMFICPAR	= ${_USUFICEST}), 
                                USUFICEMC	= ${_USUFICEMC}, 
                                USUFICSUC	= ${_USUFICSUC}, 
                                USUFICORD	= ${_USUFICORD}, 
                                USUFICDOC	= ${_USUFICDOC},  
                                USUFICNOM	= ${_USUFICNOM},
                                USUFICAPE	= ${_USUFICAPE}, 
                                USUFICUSU   = ${_USUFICUSU},
                                USUFICPAS   = '${_USUFICPAS}',
                                USUFICEMA	= ${_USUFICEMA}, 
                                USUFICCEL	= ${_USUFICCEL}, 
                                USUFICOBS	= ${_USUFICOBS}, 
                                USUFICAEM	= ${_USUFICAEM}, 
                                USUFICAUS	= ${_USUFICAUS},   
                                USUFICAIP	= ${_USUFICAIP}, 
                                USUFICAPR	= ${_USUFICAPR},  
                                USUFICAIN	= ${_USUFICAIN}
                            
                            WHERE USUFICCOD = ${codigo} RETURNING USUFICCOD`;	

            break;

            case 2:
                query00 = `UPDATE adm.USUFIC SET
                                USUFICEST	= (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMUSUARIOESTADO' AND DOMFICPAR	= ${_USUFICEST}),       
                                USUFICAEM	= ${_USUFICAEM}, 
                                USUFICAUS	= ${_USUFICAUS},   
                                USUFICAIP	= ${_USUFICAIP}, 
                                USUFICAPR	= ${_USUFICAPR},  
                                USUFICAIN	= ${_USUFICAIN}

                            WHERE USUFICCOD =  ${codigo} RETURNING USUFICCOD`;
            break;	

            case 3:
                query00 = `UPDATE adm.USUFIC SET
                                USUFICPAS   = '${_USUFICPAS}',    
                                USUFICAEM	= ${_USUFICAEM}, 
                                USUFICAUS	= ${_USUFICAUS},   
                                USUFICAIP	= ${_USUFICAIP}, 
                                USUFICAPR	= ${_USUFICAPR},  
                                USUFICAIN	= ${_USUFICAIN}

                            WHERE USUFICCOD =  ${codigo} RETURNING USUFICCOD`;
            break;
        }

        const connPGSQL = new Client(initPGSQL);

        await connPGSQL
            .connect()
            .catch(e => {
                _code = 401;
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: updateUSUFIC', true)
                    .then(result => _data = result);
            }
    );

    if (_code == 200) {
        await connPGSQL
            .query(query00)
            .then(result => {
                _code = 200;
                _data = result.rows;
            })
            .catch(e => {
                _code = 500;
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: updateUSUFIC', true)
                    .then(result => _data = result);
            })
            .then(() => {
                connPGSQL.end();
            }
        );
    }

    if (_data == ''){
        _code   = 404;
    }

    return Array(_code, _data);
    }

    const updateROLFIC = async(_ACCION,
        codigo,
        _ROLFICEST,
        _ROLFICEMC,
        _ROLFICORD,
        _ROLFICNOM,
        _ROLFICFDE,
        _ROLFICFHA,
        _ROLFICEQU,
        _ROLFICOBS,
        _ROLFICAEM,
        _ROLFICAUS,
        _ROLFICAIP,
        _ROLFICAPR,
        _ROLFICAIN) => {

        let _code   = 200;
        let _data   = [];
        let query00 = '';

        switch (_ACCION) {
            case 1:
                query00 = `UPDATE adm.ROLFIC SET																				
                                ROLFICEST	= (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMROLESTADO' AND DOMFICPAR = ${_ROLFICEST}), 	  
                                ROLFICEMC	= ${_ROLFICEMC}, 	  
                                ROLFICORD	= ${_ROLFICORD}, 	
                                ROLFICNOM	= ${_ROLFICNOM}, 		
                                ROLFICFDE	= '${_ROLFICFDE}', 	   
                                ROLFICFHA	= '${_ROLFICFHA}',     
                                ROLFICEQU	= ${_ROLFICEQU},     
                                ROLFICOBS	= ${_ROLFICOBS},    
                                ROLFICAEM	= ${_ROLFICAEM},     
                                ROLFICAUS	= ${_ROLFICAUS},    
                                ROLFICAIP	= ${_ROLFICAIP},     
                                ROLFICAPR	= ${_ROLFICAPR}, 
                                ROLFICAIN	= ${_ROLFICAIN}
                            
                            WHERE ROLFICCOD = ${codigo}`;	

            break;

            case 2:
                query00 = `UPDATE adm.ROLFIC SET																				
                                ROLFICEST	= (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMROLESTADO' AND DOMFICPAR = ${_ROLFICEST})),       
                                ROLFICAEM	= ${_ROLFICAEM},     
                                ROLFICAUS	= ${_ROLFICAUS},    
                                ROLFICAIP	= ${_ROLFICAIP},     
                                ROLFICAPR	= ${_ROLFICAPR}, 
                                ROLFICAIN	= ${_ROLFICAIN}
                                
                                WHERE ROLFICCOD = ${codigo}`;
            break;	

        }

        const connPGSQL = new Client(initPGSQL);

        await connPGSQL
            .connect()
            .catch(e => {
                _code = 401;
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: updateROLFIC', true)
                    .then(result => _data = result);
            }
    );

    if (_code == 200) {
        await connPGSQL
            .query(query00)
            .then(result => {
                _code = 200;
                _data = result.rows;
            })
            .catch(e => {
                _code = 500;
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: updateROLFIC', true)
                    .then(result => _data = result);
            })
            .then(() => {
                connPGSQL.end();
            }
        );
    }

    return Array(_code, _data);
    }

    const updateCAMFIC = async(_ACCION,
        codigo,
        _CAMFICEST,
        _CAMFICTCC,
        _CAMFICEMC,
        _CAMFICORD,
        _CAMFICNOM,
        _CAMFICFDE,
        _CAMFICFHA,
        _CAMFICEQU,
        _CAMFICOBS,
        _CAMFICCEM,
        _CAMFICCUS,
        _CAMFICCIP,
        _CAMFICCPR,
        _CAMFICAEM,
        _CAMFICAUS,
        _CAMFICAIP,
        _CAMFICAPR,
        _CAMFICAIN) => {

        let _code   = 200;
        let _data   = [];
        let query00 = '';

        switch (_ACCION) {
            case 1:
                query00 = `UPDATE adm.CAMFIC SET
                                CAMFICEST	= (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMCAMPANHAESTADO' AND DOMFICPAR = ${_CAMFICEST}), 																						 
                                CAMFICTCC	= (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMCAMPANHATIPO' AND DOMFICPAR = ${_CAMFICTCC}), 	  
                                CAMFICEMC	= ${_CAMFICEMC}, 	 
                                CAMFICORD	= ${_CAMFICORD}, 	
                                CAMFICNOM	= ${_CAMFICNOM}, 	   
                                CAMFICFDE	= '${_CAMFICFDE}',     
                                CAMFICFHA	= '${_CAMFICFHA}',     
                                CAMFICEQU	= ${_CAMFICEQU},     
                                CAMFICOBS	= ${_CAMFICOBS}, 	        
                                CAMFICAEM	= ${_CAMFICAEM}, 	  
                                CAMFICAUS	= ${_CAMFICAUS}, 	 
                                CAMFICAIP	= ${_CAMFICAIP}, 	
                                CAMFICAPR	= ${_CAMFICAPR},    
                                CAMFICAIN	= ${_CAMFICAIN}
                                
                            WHERE CAMFICCOD = ${codigo}`;	

            break;

            case 2:
                query00 = `UPDATE adm.CAMFIC SET
                                CAMFICEST	= (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMCAMPANHAESTADO' AND DOMFICPAR = ${_CAMFICEST}),     
                                CAMFICAEM	= ${_CAMFICAEM}, 	  
                                CAMFICAUS	= ${_CAMFICAUS}, 	 
                                CAMFICAIP	= ${_CAMFICAIP}, 	
                                CAMFICAPR	= ${_CAMFICAPR},    
                                CAMFICAIN	= ${_CAMFICAIN}
                                
                            WHERE CAMFICCOD = ${codigo}`;
            break;	

        }

        const connPGSQL = new Client(initPGSQL);

        await connPGSQL
            .connect()
            .catch(e => {
                _code = 401;
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: updateCAMFIC', true)
                    .then(result => _data = result);
            }
    );

    if (_code == 200) {
        await connPGSQL
            .query(query00)
            .then(result => {
                _code = 200;
                _data = result.rows;
            })
            .catch(e => {
                _code = 500;
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: updateCAMFIC', true)
                    .then(result => _data = result);
            })
            .then(() => {
                connPGSQL.end();
            }
        );
    }

    return Array(_code, _data);
    }

    const updateFORFIC = async(_ACCION,
        codigo,
        _FORFICEST,
        _FORFICEMC,
        _FORFICORD,
        _FORFICNOM,
        _FORFICURL,
        _FORFICOBS,
        _FORFICCEM,
        _FORFICCUS,
        _FORFICCIP,
        _FORFICCPR,
        _FORFICAEM,
        _FORFICAUS,
        _FORFICAIP,
        _FORFICAPR,
        _FORFICAIN) => {

        let _code   = 200;
        let _data   = [];
        let query00 = '';

        switch (_ACCION) {
            case 1:
                query00 = `UPDATE adm.FORFIC SET
                                FORFICEST	= (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMFORMULARIOESTADO' AND DOMFICPAR = ${_FORFICEST}), 	  
                                FORFICEMC	= ${_FORFICEMC}, 	  
                                FORFICORD	= ${_FORFICORD},     
                                FORFICNOM	= ${_FORFICNOM}, 	
                                FORFICURL	= ${_FORFICURL}, 	     
                                FORFICAEM	= ${_FORFICAEM}, 	
                                FORFICAUS	= ${_FORFICAUS},    
                                FORFICAIP	= ${_FORFICAIP}, 	
                                FORFICAPR	= ${_FORFICAPR}, 
                                FORFICAIN	= ${_FORFICAIN}
                                
                            WHERE FORFICCOD = ${codigo}`;	

            break;

            case 2:
                query00 = `UPDATE adm.FORFIC SET
                                FORFICEST	= (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMFORMULARIOESTADO' AND DOMFICPAR = ${_FORFICEST}),   
                                FORFICAEM	= ${_FORFICAEM}, 	  
                                FORFICAUS	= ${_FORFICAUS}, 	 
                                FORFICAIP	= ${_FORFICAIP}, 	
                                FORFICAPR	= ${_FORFICAPR},    
                                FORFICAIN	= ${_FORFICAIN}
                                
                            WHERE FORFICCOD = ${codigo}`;
            break;	

        }

        const connPGSQL = new Client(initPGSQL);

        await connPGSQL
            .connect()
            .catch(e => {
                _code = 401;
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: updateFORFIC', true)
                    .then(result => _data = result);
            }
    );

    if (_code == 200) {
        await connPGSQL
            .query(query00)
            .then(result => {
                _code = 200;
                _data = result.rows;
            })
            .catch(e => {
                _code = 500;
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: updateFORFIC', true)
                    .then(result => _data = result);
            })
            .then(() => {
                connPGSQL.end();
            }
        );
    }

    return Array(_code, _data);
    }

    const updateROLFOR = async(_ACCION,
        codigo,
        codigo2,
        _ROLFOREST,
        _ROLFOREMC,
        _ROLFORORD,
        _ROLFORACC,
        _ROLFORDSP,
        _ROLFORUPD,
        _ROLFORDLT,
        _ROLFORINS,
        _ROLFORXLS,
        _ROLFORPDF,
        _ROLFORIMP,
        _ROLFOROBS,
        _ROLFORCEM,
        _ROLFORCUS,
        _ROLFORCIP,
        _ROLFORCPR,
        _ROLFORAEM,
        _ROLFORAUS,
        _ROLFORAIP,
        _ROLFORAPR,
        _ROLFORAIN) => {

        let _code   = 200;
        let _data   = [];
        let query00 = '';

        switch (_ACCION) {
            case 1:
                query00 = `UPDATE adm.ROLFOR SET  																								   
                                ROLFOREST	= (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMROLFORMULARIOESTADO' AND DOMFICPAR = ${_ROLFOREST}),    
                                ROLFORORD	= ${_ROLFORORD}, 		
                                ROLFORACC	= ${_ROLFORACC}, 	   
                                ROLFORDSP	= ${_ROLFORDSP}, 	  
                                ROLFORUPD	= ${_ROLFORUPD},	 
                                ROLFORDLT	= ${_ROLFORDLT},     
                                ROLFORINS	= ${_ROLFORINS},     
                                ROLFORXLS	= ${_ROLFORXLS},     
                                ROLFORPDF	= ${_ROLFORPDF},     
                                ROLFORIMP	= ${_ROLFORIMP}, 	
                                ROLFOROBS	= ${_ROLFOROBS}, 	        
                                ROLFORAEM	= ${_ROLFORAEM},     
                                ROLFORAUS	= ${_ROLFORAUS},     
                                ROLFORAIP	= ${_ROLFORAIP},    
                                ROLFORAPR	= ${_ROLFORAPR},    
                                ROLFORAIN	= ${_ROLFORAIN}
                                
                            WHERE ROLFORROC = ${codigo} AND ROLFORFOC = ${codigo2} AND ROLFOREMC = ${_ROLFOREMC}`;	

            break;

            case 2:
                query00 = `UPDATE adm.ROLFOR SET  																								   
                                ROLFOREST	= (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMROLFORMULARIOESTADO' AND DOMFICPAR = ${_ROLFOREST}),    
                                ROLFORAEM	= ${_ROLFORAEM},     
                                ROLFORAUS	= ${_ROLFORAUS},     
                                ROLFORAIP	= ${_ROLFORAIP},    
                                ROLFORAPR	= ${_ROLFORAPR},    
                                ROLFORAIN	= ${_ROLFORAIN}
                                
                                WHERE ROLFORROC = ${codigo} AND ROLFORFOC = ${codigo2} AND ROLFOREMC = ${_ROLFOREMC}`;
            break;	

        }

        const connPGSQL = new Client(initPGSQL);

        await connPGSQL
            .connect()
            .catch(e => {
                _code = 401;
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: updateFORFIC', true)
                    .then(result => _data = result);
            }
    );

    if (_code == 200) {
        await connPGSQL
            .query(query00)
            .then(result => {
                _code = 200;
            })
            .catch(e => {
                _code = 500;
                console.log(e);
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: updateFORFIC', true)
                    .then(result => _data = result);
            })
            .then(() => {
                connPGSQL.end();
            }
        );
    }

    return Array(_code, _data);
    }

module.exports = {
    updateDOMFIC,
    updateEMPFIC,
    updateSUCFIC,
    updateUSUFIC,
    updateROLFIC,
    updateCAMFIC,
    updateFORFIC,
    updateROLFOR

};