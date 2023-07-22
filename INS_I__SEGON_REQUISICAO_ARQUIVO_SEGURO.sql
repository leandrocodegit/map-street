USE IT3020_INTEGRACAO 
GO
IF EXISTS (SELECT * FROM SYSOBJECTS SO WHERE SO.name = 'INS_I__SEGON_REQUISICAO_ARQUIVO_SEGURO' AND SO.type = 'P')
	BEGIN
		DROP PROC dbo.INS_I__SEGON_REQUISICAO_ARQUIVO_SEGURO
	END
GO
-- EXEC dbo.INS_I__SEGON_REQUISICAO_ARQUIVO_SEGURO
CREATE PROCEDURE dbo.INS_I__SEGON_REQUISICAO_ARQUIVO_SEGURO(@IdCotacao VARCHAR(15), @IdContrato VARCHAR(15), @NumProposta INT, @CodSeguradora VARCHAR(20))
AS
BEGIN
/*==============================================================================================================================================
-- ESTA PROCEDURE É UTILIZADO DO TIBCO 'TIB_SEGUROS'
-- PROCEURE QUE EFETUA A INCLUSAO DE APOLICES DA MITSUI EM UMA TABLA DE CONTROLE, DESDE QUE A MESMA AINDA NAO EXISTA
================================================================================================================================================*/
	SET NOCOUNT ON
	
	IF (SELECT COUNT(*) FROM I__SEGON_REQUISICAO_ARQUIVO_SEGURO WHERE IdCotacao = @IdCotacao AND IdContrato = @IdContrato AND CodSeguradora = @CodSeguradora) = 0 AND LEN(RTRIM(@IdCotacao)) > 0 AND LEN(RTRIM(@IdContrato)) > 0
		BEGIN
			INSERT INTO I__SEGON_REQUISICAO_ARQUIVO_SEGURO (IdCotacao, 
															IdContrato,
															NumProposta,
															NumRequisicao, 
															NumBorderoPaylink, 
															VlrLiberacao,
															DataPrimeiroEnvioAON, 
															DataUltimoEnvioAON, 
															DataPrimeiroEnvioMitsui, 
															DataUltimoEnvioMitsui, 
															IdPrimeiroArquivoAON, 
															IdPrimeiroArquivoMitsui, 
															IdUltimoArquivoAON, 
															IdUltimoArquivoMitsui, 
															FlgReenvioAON, 
															FlgReenvioMitsui,
															ContratoCancelado,
															DataStatusContrato,
															CodSeguradora,				
															NROCONTRATO, -- @NROCONTRATO FINANCIAMENTO
															COD_STATUS_QUIVER) 
			VALUES (@IdCotacao, @IdContrato, @NumProposta, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, 0, NULL,@CodSeguradora, NULL, NULL)
 
			-- ATUALIZACAO DOS CAMPOS QUIVER
			UPDATE [IT3020_INTEGRACAO].[dbo].[I__SEGON_REQUISICAO_ARQUIVO_SEGURO] 
				  SET ID_GRUPOPRODUCAO_QUIVER = CT.ID_GRUPOPRODUCAO_QUIVER
					,COD_PRODUTO_QUIVER = PROD.COD_PRODUTO_QUIVER
				    ,SIGLA_CORRETORA = COR.SIGLA_CORRETORA
				    ,COD_SEGURADORA_QUIVER = SEG.COD_SEGURADORA_QUIVER
				    ,PERC_COMISSAO_CORRETORA = COR.PERC_COMISSAO_CORRETORA 
					,FlgReenvioAON = CASE WHEN COR.SIGLA_CORRETORA = 'TCS' THEN NULL END -- CASO A COTAÇÃO SEJA PELA CORRETORA TCS SETA FlgreenvioAON null (Não enviar)
					,COD_STATUS_QUIVER =  CASE WHEN COR.SIGLA_CORRETORA = 'TCS' THEN 0 END -- CASO A COTAÇÃO SEJA PELA CORRETORA TCS SETA StatusQuiver 0 (Pendente)
				FROM [IT3020_INTEGRACAO].[dbo].[I__SEGON_REQUISICAO_ARQUIVO_SEGURO] SR
				INNER JOIN [DB_SEGON].[dbo].[CORRETAGEM_TCS] CT
					ON CT.ID_COTACAO = SR.IdCotacao
				AND CT.NUM_PROPOSTA = SR.NumProposta
				INNER JOIN [DB_SEGON].[dbo].[CORRETORES] COR
					ON COR.COD_CORRETOR = CT.COD_CORRETOR
				INNER JOIN [DB_SEGON].[dbo].[PRODUTO_TCS] PROD
					ON PROD.COD_PRODUTO_SEGURADORA = CT.PRODUTO
				INNER JOIN [DB_SEGON].[dbo].[SEGURADORA] SEG
					ON SEG.ID = CT.SEGURADORA_FK
				WHERE 
				  IdCotacao = @IdCotacao
				  AND IdContrato = @IdContrato
				  AND NumProposta = @NumProposta
			
		END
	
	
END	
GO
GRANT EXECUTE ON INS_I__SEGON_REQUISICAO_ARQUIVO_SEGURO TO USERS_SYS 
