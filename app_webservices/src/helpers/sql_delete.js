const {Pool, Client, initPGSQL} = require('../conf/database');
const {errorBody}   = require('../utils/_json');

/**
    * @param {integer} codigo - codigo
    * @param {integer} codigo2 - codigo2
    * @param {integer} codigo3 - codigo3
    * @param {integer} codigo4 - codigo4
    * @returns {Array} returns
*/

const deleteDOMFIC  = async(codigo) => {

    let _code   = 200;
    let _data   = [];
   
    let query00 = '';

    query00 = `DELETE FROM adm.DOMFIC WHERE DOMFICCOD =  ${codigo}`;	

    const connPGSQL = new Client(initPGSQL);
    
    await connPGSQL
        .connect()
        .catch(e => {
            _code = 401;
            errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: deleteDOMFIC', true)
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
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine, 'Function: deleteDOMFIC')
                    .then(result => _data = result);
            })
            .then(() => {
                connPGSQL.end();
            }
        );
    }
    
    return Array(_code, _data);
}

const deleteEMPFIC  = async(codigo) => {

    let _code   = 200;
    let _data   = [];
   
    let query00 = '';

    query00 = `DELETE FROM adm.EMPFIC WHERE EMPFICCOD =  ${codigo}`;	

    const connPGSQL = new Client(initPGSQL);
    
    await connPGSQL
        .connect()
        .catch(e => {
            _code = 401;
            errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: deleteEMPFIC', true)
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
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine, 'Function: deleteEMPFIC')
                    .then(result => _data = result);
            })
            .then(() => {
                connPGSQL.end();
            }
        );
    }
    
    return Array(_code, _data);
}

const deleteSUCFIC  = async(codigo) => {

    let _code   = 200;
    let _data   = [];
   
    let query00 = '';

    query00 = `DELETE FROM adm.SUCFIC WHERE SUCFICCOD =  ${codigo}`;	

    const connPGSQL = new Client(initPGSQL);
    
    await connPGSQL
        .connect()
        .catch(e => {
            _code = 401;
            errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: deleteSUCFIC', true)
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
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine, 'Function: deleteSUCFIC')
                    .then(result => _data = result);
            })
            .then(() => {
                connPGSQL.end();
            }
        );
    }
    
    return Array(_code, _data);
}

const deleteUSUFIC  = async(codigo) => {

    let _code   = 200;
    let _data   = [];
   
    let query00 = '';

    query00 = `DELETE FROM adm.USUFIC WHERE USUFICCOD =  ${codigo}`;	

    const connPGSQL = new Client(initPGSQL);
    
    await connPGSQL
        .connect()
        .catch(e => {
            _code = 401;
            errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: deleteUSUFIC', true)
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
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine, 'Function: deleteUSUFIC')
                    .then(result => _data = result);
            })
            .then(() => {
                connPGSQL.end();
            }
        );
    }
    
    return Array(_code, _data);
}

const deleteROLFIC  = async(codigo) => {

    let _code   = 200;
    let _data   = [];
    let _error  = 0 ;
   
    let query00 = '';

    query00 = `DELETE FROM adm.ROLFIC WHERE ROLFICCOD =  ${codigo}`;	

    const connPGSQL = new Client(initPGSQL);
    
    await connPGSQL
        .connect()
        .catch(e => {
            _code = 401;
            errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: deleteROLFIC', true)
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
                _error  = e.code;
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine, 'Function: deleteROLFIC')
                    .then(result => _data = result);
            })
            .then(() => {
                connPGSQL.end();
            }
        );
    }

    if (_error == 23503){
        _code   = 404;
    }

    return Array(_code, _data);
}

const deleteCAMFIC  = async(codigo) => {

    let _code   = 200;
    let _data   = [];
   
    let query00 = '';

    query00 = `DELETE FROM adm.CAMFIC WHERE CAMFICCOD =  ${codigo}`;	

    const connPGSQL = new Client(initPGSQL);
    
    await connPGSQL
        .connect()
        .catch(e => {
            _code = 401;
            errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: deleteCAMFIC', true)
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
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine, 'Function: deleteCAMFIC')
                    .then(result => _data = result);
            })
            .then(() => {
                connPGSQL.end();
            }
        );
    }
    
    return Array(_code, _data);
}

const deleteFORFIC  = async(codigo) => {

    let _code   = 200;
    let _data   = [];
    let _error  = 0;
   
    let query00 = '';

    query00 = `DELETE FROM adm.FORFIC WHERE FORFICCOD =  ${codigo}`;	

    const connPGSQL = new Client(initPGSQL);
    
    await connPGSQL
        .connect()
        .catch(e => {
            _code = 401;
            errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: deleteFORFIC', true)
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
                _code   = 500;
                _error  = e.code; 
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine, 'Function: deleteFORFIC')
                    .then(result => _data = result);
            })
            .then(() => {
                connPGSQL.end();
            }
        );
    }

    if (_error == 23503){
        _code   = 404;
    }
    
    return Array(_code, _data);
}

const deleteROLFOR  = async(codigo, codigo2) => {

    let _code   = 200;
    let _data   = [];
   
    let query00 = '';

    query00 = `DELETE FROM adm.ROLFOR WHERE ROLFORROC =  ${codigo} AND ROLFORTFC = (SELECT DOMFICCOD FROM adm.DOMFIC WHERE DOMFICVAL = 'ADMFORMULARIOTIPO' AND DOMFICPAR = ${codigo2})`;	

    const connPGSQL = new Client(initPGSQL);
    
    await connPGSQL
        .connect()
        .catch(e => {
            _code = 401;
            errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: deleteROLFOR', true)
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
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine, 'Function: deleteROLFOR')
                    .then(result => _data = result);
            })
            .then(() => {
                connPGSQL.end();
            }
        );
    }
    
    return Array(_code, _data);
}

const deleteUSUROL  = async(codigo, codigo2) => {

    let _code   = 200;
    let _data   = [];
   
    let query00 = '';

    query00 = `DELETE FROM adm.USUROL WHERE USUROLUSC =  ${codigo} AND USUROLROC = ${codigo2}`;	
    const connPGSQL = new Client(initPGSQL);
    
    await connPGSQL
        .connect()
        .catch(e => {
            _code = 401;
            errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: deleteUSUROL', true)
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
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine,'Function: deleteUSUROL')
                    .then(result => _data = result);
            })
            .then(() => {
                connPGSQL.end();
            }
        );
    }
    
    return Array(_code, _data);
}

const deleteUSUCAM  = async(codigo, codigo2) => {

    let _code   = 200;
    let _data   = [];
   
    let query00 = '';

    query00 = `DELETE FROM adm.USUCAM WHERE USUCAMUSC =  ${codigo} AND USUCAMCAC = ${codigo2}`;	
    const connPGSQL = new Client(initPGSQL);
    
    await connPGSQL
        .connect()
        .catch(e => {
            _code = 401;
            errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: deleteUSUCAM', true)
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
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine, 'Function: deleteUSUCAM')
                    .then(result => _data = result);
            })
            .then(() => {
                connPGSQL.end();
            }
        );
    }
    
    return Array(_code, _data);
}

const deleteUSUFLU  = async(codigo, codigo2, codigo3, codigo4) => {

    let _code   = 200;
    let _data   = [];
   
    let query00 = '';

    query00 = `DELETE FROM adm.USUFLU WHERE USUFLUUSC = ${codigo} AND USUFLUROC = ${codigo2} AND  USUFLURO1 = ${codigo3} AND USUFLUUS1 =  ${codigo4}`;	
    const connPGSQL = new Client(initPGSQL);
    
    await connPGSQL
        .connect()
        .catch(e => {
            _code = 401;
            errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: deleteUSUFLU', true)
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
                errorBody(_code, 'Code: '+ e.code + ', Routine: ' + e.routine + ', Function: deleteUSUFLU', true)
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
    deleteDOMFIC,
    deleteEMPFIC,
    deleteSUCFIC,
    deleteUSUFIC,
    deleteROLFIC,
    deleteCAMFIC,
    deleteFORFIC, 
    deleteROLFOR,
    deleteUSUROL,
    deleteUSUCAM,
    deleteUSUFLU
};